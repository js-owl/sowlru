<?php

function load_env($path)
{
    if (!is_readable($path)) {
        return;
    }

    $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    if ($lines === false) {
        return;
    }

    foreach ($lines as $line) {
        $line = trim($line);
        if ($line === '' || $line[0] === '#') {
            continue;
        }

        $separator = strpos($line, '=');
        if ($separator === false) {
            continue;
        }

        $key = trim(substr($line, 0, $separator));
        $value = trim(substr($line, $separator + 1));
        $value = trim($value, " \t\"'");

        if ($key === '' || getenv($key) !== false) {
            continue;
        }

        putenv($key . '=' . $value);
        $_ENV[$key] = $value;
    }
}

load_env(__DIR__ . '/.env');

define('SMARTCAPTCHA_CLIENT_KEY', getenv('SMARTCAPTCHA_CLIENT_KEY') ?: '');
define('SMARTCAPTCHA_SERVER_KEY', getenv('SMARTCAPTCHA_SERVER_KEY') ?: '');

function check_captcha($token)
{
    if (SMARTCAPTCHA_SERVER_KEY === '') {
        return false;
    }

    $ch = curl_init();
    $args = http_build_query([
        'secret' => SMARTCAPTCHA_SERVER_KEY,
        'token' => $token,
        'ip' => isset($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : '',
    ]);
    curl_setopt($ch, CURLOPT_URL, 'https://smartcaptcha.yandexcloud.net/validate?' . $args);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 3);

    $server_output = curl_exec($ch);
    $httpcode = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($httpcode !== 200) {
        return true;
    }

    $resp = json_decode((string) $server_output);

    return is_object($resp) && isset($resp->status) && $resp->status === 'ok';
}
