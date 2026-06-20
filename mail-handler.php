<?php

function process_lead_request(array $post, array $options = [])
{
    $checkCaptcha = $options['check_captcha'] ?? 'check_captcha';
    $sendMail = $options['send_mail'] ?? 'mail';
    $serverKey = $options['server_key'] ?? (defined('SMARTCAPTCHA_SERVER_KEY') ? SMARTCAPTCHA_SERVER_KEY : '');

    $name = isset($post['name']) ? trim((string) $post['name']) : '';
    $phone = isset($post['phone']) ? trim((string) $post['phone']) : '';
    $consent = isset($post['consent']) ? (string) $post['consent'] : '';
    $token = isset($post['smart-token']) ? trim((string) $post['smart-token']) : '';

    if ($name === '' || $phone === '') {
        return [
            'ok' => false,
            'message' => 'Заполните имя и телефон.',
            'code' => 400,
        ];
    }

    if ($consent !== '1') {
        return [
            'ok' => false,
            'message' => 'Необходимо согласие на обработку персональных данных.',
            'code' => 400,
        ];
    }

    if ($serverKey === '') {
        return [
            'ok' => false,
            'message' => 'Форма временно недоступна. Позвоните нам или напишите позже.',
            'code' => 503,
        ];
    }

    if ($token === '') {
        return [
            'ok' => false,
            'message' => 'Подтвердите, что вы не робот.',
            'code' => 400,
        ];
    }

    $captchaValid = is_callable($checkCaptcha)
        ? (bool) $checkCaptcha($token)
        : (bool) call_user_func($checkCaptcha, $token);

    if (!$captchaValid) {
        return [
            'ok' => false,
            'message' => 'Проверка капчи не пройдена. Попробуйте ещё раз.',
            'code' => 400,
        ];
    }

    $nameEsc = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
    $phoneEsc = htmlspecialchars($phone, ENT_QUOTES, 'UTF-8');
    $body = "Please call to $nameEsc with phone $phoneEsc";

    $sent = is_callable($sendMail)
        ? (bool) $sendMail('aklimovskikh@yandex.ru', 'Call me', $body)
        : (bool) call_user_func($sendMail, 'aklimovskikh@yandex.ru', 'Call me', $body);

    if (!$sent) {
        return [
            'ok' => false,
            'message' => 'Не удалось отправить заявку. Попробуйте позже или позвоните нам.',
            'code' => 500,
        ];
    }

    return [
        'ok' => true,
        'message' => 'Заявка отправлена.',
        'code' => 200,
    ];
}
