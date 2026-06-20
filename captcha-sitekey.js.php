<?php
require __DIR__ . '/captcha-config.php';

header('Content-Type: application/javascript; charset=UTF-8');
header('Cache-Control: no-store');

echo 'window.SMARTCAPTCHA_CLIENT_KEY=' . json_encode(SMARTCAPTCHA_CLIENT_KEY, JSON_UNESCAPED_UNICODE) . ';';
