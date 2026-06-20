<?php

namespace Sowl\Tests;

use PHPUnit\Framework\TestCase;

final class CaptchaValidationTest extends TestCase
{
    protected function tearDown(): void
    {
        unset($GLOBALS['__smartcaptcha_http_mock']);
    }

    public function testParseResponseAllowsRequestWhenApiReturnsNon200(): void
    {
        $this->assertTrue(parse_captcha_validation_response(500, '{"status":"failed"}'));
        $this->assertTrue(parse_captcha_validation_response(503, ''));
    }

    public function testParseResponseAcceptsOkStatus(): void
    {
        $this->assertTrue(parse_captcha_validation_response(200, '{"status":"ok","host":"sowl.ru"}'));
    }

    public function testParseResponseRejectsFailedStatus(): void
    {
        $this->assertFalse(parse_captcha_validation_response(200, '{"status":"failed","message":"Invalid or expired Token."}'));
    }

    public function testParseResponseRejectsMalformedJson(): void
    {
        $this->assertFalse(parse_captcha_validation_response(200, 'not-json'));
        $this->assertFalse(parse_captcha_validation_response(200, ''));
    }

    public function testCheckCaptchaReturnsFalseWhenServerKeyMissing(): void
    {
        $result = process_lead_request(
            [
                'name' => 'Иван',
                'phone' => '+79001234567',
                'consent' => '1',
                'smart-token' => 'token',
            ],
            [
                'server_key' => '',
                'check_captcha' => static fn () => true,
                'send_mail' => static fn () => true,
            ]
        );

        $this->assertSame(503, $result['code']);
    }

    public function testCheckCaptchaUsesMockedHttpClientForValidToken(): void
    {
        $GLOBALS['__smartcaptcha_http_mock'] = static function () {
            return [
                'httpcode' => 200,
                'body' => '{"status":"ok","host":"sowl.ru"}',
            ];
        };

        $this->assertTrue(check_captcha('valid-token'));
    }

    public function testCheckCaptchaUsesMockedHttpClientForInvalidToken(): void
    {
        $GLOBALS['__smartcaptcha_http_mock'] = static function () {
            return [
                'httpcode' => 200,
                'body' => '{"status":"failed","message":"Invalid or expired Token."}',
            ];
        };

        $this->assertFalse(check_captcha('expired-token'));
    }

    public function testCheckCaptchaAllowsRequestWhenApiUnavailable(): void
    {
        $GLOBALS['__smartcaptcha_http_mock'] = static function () {
            return [
                'httpcode' => 502,
                'body' => 'Bad Gateway',
            ];
        };

        $this->assertTrue(check_captcha('any-token'));
    }
}
