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

function parse_captcha_validation_response($httpcode, $server_output)
{
    if ((int) $httpcode !== 200) {
        return true;
    }

    $resp = json_decode((string) $server_output);

    return is_object($resp) && isset($resp->status) && $resp->status === 'ok';
}

function smartcaptcha_http_validate($secret, $token, $ip)
{
    if (isset($GLOBALS['__smartcaptcha_http_mock']) && is_callable($GLOBALS['__smartcaptcha_http_mock'])) {
        return call_user_func($GLOBALS['__smartcaptcha_http_mock'], $secret, $token, $ip);
    }

    $ch = curl_init('https://smartcaptcha.cloud.yandex.ru/validate');
    curl_setopt_array($ch, [
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => http_build_query([
            'secret' => $secret,
            'token' => $token,
            'ip' => $ip,
        ]),
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 3,
    ]);

    $server_output = curl_exec($ch);
    $httpcode = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    return [
        'httpcode' => $httpcode,
        'body' => $server_output,
    ];
}

function check_captcha($token)
{
    if (SMARTCAPTCHA_SERVER_KEY === '') {
        return false;
    }

    $result = smartcaptcha_http_validate(
        SMARTCAPTCHA_SERVER_KEY,
        $token,
        isset($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : ''
    );

    return parse_captcha_validation_response($result['httpcode'], $result['body']);
}
