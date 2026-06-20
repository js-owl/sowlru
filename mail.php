<?php
require __DIR__ . '/captcha-config.php';
require __DIR__ . '/mail-handler.php';

header('Content-Type: application/json; charset=UTF-8');

$result = process_lead_request($_POST);

http_response_code($result['code']);
echo json_encode(
    ['ok' => $result['ok'], 'message' => $result['message']],
    JSON_UNESCAPED_UNICODE
);
