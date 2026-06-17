# Диагностика sitemap.xml — sowl.ru

**Дата проверки:** 17.06.2026

## Симптом

При первичном аудите `https://sowl.ru/sitemap.xml` возвращал HTTP 500. Повторная проверка показала **HTTP 200** и валидный XML.

## Локальный файл

Файл [`sitemap.xml`](../sitemap.xml) в репозитории корректен: валидная структура `urlset`, 16 URL, без битых тегов.

## Вероятные причины 500 (если повторится)

| Причина | Что проверить |
|--------|----------------|
| Файл не задеплоен на сервер | Сравнить `sitemap.xml` на хостинге с репозиторием |
| Неверный MIME-type / сжатие | В `.htaccess` добавлен `AddType application/xml` и заголовок `Content-Type` для `sitemap.xml` |
| Временный сбой хостинга | Повторить запрос через 5–15 минут |
| Права на файл | `chmod 644 sitemap.xml` на сервере |

## Внесённые исправления

1. [`.htaccess`](../.htaccess) — MIME-type для `.xml`, явный `Content-Type` и `Cache-Control` для `sitemap.xml`.
2. [`sitemap.xml`](../sitemap.xml) — добавлен `lastmod` для главной, добавлена страница `privacy.html`.

## Рекомендации после деплоя

1. Проверить ответ: `curl -I https://sowl.ru/sitemap.xml` → ожидается `200` и `Content-Type: application/xml`.
2. Отправить sitemap в [Яндекс.Вебмастер](https://webmaster.yandex.ru/) и [Google Search Console](https://search.google.com/search-console).
3. При добавлении новых страниц обновлять `lastmod` и список `<url>`.
