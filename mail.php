<?php
require __DIR__ . '/captcha-config.php';

header('Content-Type: application/json; charset=UTF-8');

function respond($ok, $message, $code = 200)
{
    http_response_code($code);
    echo json_encode(
        ['ok' => $ok, 'message' => $message],
        JSON_UNESCAPED_UNICODE
    );
    exit;
}

$name = isset($_POST['name']) ? trim((string) $_POST['name']) : '';
$phone = isset($_POST['phone']) ? trim((string) $_POST['phone']) : '';
$consent = isset($_POST['consent']) ? (string) $_POST['consent'] : '';
$token = isset($_POST['smart-token']) ? trim((string) $_POST['smart-token']) : '';

if ($name === '' || $phone === '') {
    respond(false, 'Заполните имя и телефон.', 400);
}

if ($consent !== '1') {
    respond(false, 'Необходимо согласие на обработку персональных данных.', 400);
}

if (SMARTCAPTCHA_SERVER_KEY === '') {
    respond(false, 'Форма временно недоступна. Позвоните нам или напишите позже.', 503);
}

if ($token === '') {
    respond(false, 'Подтвердите, что вы не робот.', 400);
}

if (!check_captcha($token)) {
    respond(false, 'Проверка капчи не пройдена. Попробуйте ещё раз.', 400);
}

$nameEsc = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$phoneEsc = htmlspecialchars($phone, ENT_QUOTES, 'UTF-8');

$sent = mail(
    'aklimovskikh@yandex.ru',
    'Call me',
    "Please call to $nameEsc with phone $phoneEsc"
);

if (!$sent) {
    respond(false, 'Не удалось отправить заявку. Попробуйте позже или позвоните нам.', 500);
}

respond(true, 'Заявка отправлена.');
