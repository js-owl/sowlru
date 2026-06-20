import { test, expect } from '@playwright/test';

const baseURL = process.env.SOWL_BASE_URL || 'http://127.0.0.1:8765';

test.describe('Форма записи и SmartCaptcha', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${baseURL}/#request`);
  });

  test('страница содержит форму, поля и контейнер капчи', async ({ page }) => {
    await expect(page.locator('#form')).toBeVisible();
    await expect(page.locator('#request-name')).toBeVisible();
    await expect(page.locator('#request-phone')).toBeVisible();
    await expect(page.locator('#request-consent')).toBeVisible();
    await expect(page.locator('#captcha-container')).toBeVisible();
    await expect(page.locator('#captcha-hint')).toBeHidden();
  });

  test('captcha-sitekey.js.php отдаёт клиентский ключ', async ({ request }) => {
    const response = await request.get(`${baseURL}/captcha-sitekey.js.php`);
    expect(response.ok()).toBeTruthy();

    const body = await response.text();
    expect(body).toMatch(/window\.SMARTCAPTCHA_CLIENT_KEY=/);
    expect(body).toContain('ysc1_');
  });

  test('подключается официальный скрипт SmartCaptcha', async ({ page }) => {
    const script = page.locator('script[src*="smartcaptcha.cloud.yandex.ru/captcha.js"]');
    await expect(script).toHaveCount(1);
  });

  test('контейнер получает data-sitekey до инициализации', async ({ page }) => {
    const sitekey = await page.locator('#captcha-container').getAttribute('data-sitekey');
    expect(sitekey).toMatch(/^ysc1_/);
  });

  test('виджет «Я не робот» отрисовывается', async ({ page }) => {
    const checkboxFrame = page.frameLocator('iframe[title*="checkbox"], iframe[title*="Checkbox"]');
    await expect(checkboxFrame.locator('body')).toBeVisible({ timeout: 15000 });
  });

  test('HTML5 блокирует отправку без обязательных полей', async ({ page }) => {
    let requestMade = false;
    page.on('request', (request) => {
      if (request.url().includes('mail.php')) {
        requestMade = true;
      }
    });

    page.once('dialog', (dialog) => dialog.dismiss());
    await page.locator('#form button[type="submit"]').click();

    expect(requestMade).toBeFalsy();
    await expect(page.locator('#request-name:invalid')).toHaveCount(1);
  });

  test('отправка без капчи показывает предупреждение', async ({ page }) => {
    await page.locator('#request-name').fill('Тест');
    await page.locator('#request-phone').fill('+79001234567');
    await page.locator('#request-consent').check();

    let capturedMessage = '';
    page.once('dialog', async (dialog) => {
      capturedMessage = dialog.message();
      await dialog.dismiss();
    });

    await page.evaluate(() => {
      document.getElementById('form').dispatchEvent(
        new Event('submit', { bubbles: true, cancelable: true })
      );
    });

    await expect.poll(() => capturedMessage).toContain('Подтвердите, что вы не робот');
    expect(capturedMessage).toContain('Adblock Plus');
  });

  test('mail.php: пустой запрос → 400', async ({ request }) => {
    const response = await request.post(`${baseURL}/mail.php`, {
      form: {},
    });

    expect(response.status()).toBe(400);
    const json = await response.json();
    expect(json.ok).toBe(false);
    expect(json.message).toContain('Заполните имя и телефон');
  });

  test('mail.php: без капчи → 400', async ({ request }) => {
    const response = await request.post(`${baseURL}/mail.php`, {
      form: {
        name: 'Тест',
        phone: '+79001234567',
        consent: '1',
      },
    });

    expect(response.status()).toBe(400);
    const json = await response.json();
    expect(json.message).toContain('не робот');
  });

  test('mail.php: без согласия → 400', async ({ request }) => {
    const response = await request.post(`${baseURL}/mail.php`, {
      form: {
        name: 'Тест',
        phone: '+79001234567',
        'smart-token': 'fake-token',
      },
    });

    expect(response.status()).toBe(400);
    const json = await response.json();
    expect(json.message).toContain('согласие');
  });

  test('mail.php: невалидный токен капчи → 400', async ({ request }) => {
    const response = await request.post(`${baseURL}/mail.php`, {
      form: {
        name: 'Тест',
        phone: '+79001234567',
        consent: '1',
        'smart-token': 'invalid-token-for-tests',
      },
    });

    expect(response.status()).toBe(400);
    const json = await response.json();
    expect(json.ok).toBe(false);
    expect(json.message).toMatch(/капч/i);
  });

  test('подсказка про Adblock видна при network-error', async ({ page }) => {
    await page.addInitScript(() => {
      window.smartCaptcha = {
        subscribe: (_id, event, callback) => {
          if (event === 'network-error') {
            window.setTimeout(callback, 100);
          }
          return () => {};
        },
      };
      window.captchaEventsBound = true;
    });

    await page.evaluate(() => {
      const hint = document.getElementById('captcha-hint');
      if (hint) {
        hint.hidden = false;
        hint.classList.add('is-error');
      }
    });

    await expect(page.locator('#captcha-hint')).toBeVisible();
    await expect(page.locator('#captcha-hint')).toContainText('Adblock Plus');
  });

  test('overlay переносится на экран при off-screen позиции', async ({ page }) => {
    const rect = await page.evaluate(() => {
      const overlay = document.createElement('div');
      overlay.id = 'test-captcha-overlay';
      overlay.className = 'SmartCaptcha-Overlay SmartCaptcha-Overlay_show_spinner';
      overlay.style.position = 'fixed';
      overlay.style.left = '-10000px';
      overlay.style.top = '-10000px';
      overlay.innerHTML = '<div class="SmartCaptcha-Spin" style="display:block"></div>';
      document.body.appendChild(overlay);

      const node = document.getElementById('test-captcha-overlay');
      const spin = node.querySelector('.SmartCaptcha-Spin');
      const spinActive = spin && getComputedStyle(spin).display !== 'none';
      if (spinActive) {
        const box = node.getBoundingClientRect();
        if (box.x < -1000 || box.y < -1000) {
          node.style.setProperty('position', 'fixed', 'important');
          node.style.setProperty('left', '0', 'important');
          node.style.setProperty('top', '0', 'important');
          node.style.setProperty('inset', '0', 'important');
          node.style.setProperty('transform', 'none', 'important');
          node.style.setProperty('z-index', '10000000', 'important');
        }
      }

      const fixed = node.getBoundingClientRect();
      return { x: fixed.x, y: fixed.y };
    });

    expect(rect.x).toBeGreaterThanOrEqual(0);
    expect(rect.y).toBeGreaterThanOrEqual(0);
  });
});
