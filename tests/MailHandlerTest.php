<?php

namespace Sowl\Tests;

use PHPUnit\Framework\TestCase;

final class MailHandlerTest extends TestCase
{
    private function validPost(array $overrides = []): array
    {
        return array_merge(
            [
                'name' => 'Мария',
                'phone' => '+79057750627',
                'consent' => '1',
                'smart-token' => 'valid-token',
            ],
            $overrides
        );
    }

    private function defaultOptions(array $overrides = []): array
    {
        return array_merge(
            [
                'server_key' => 'test-server-key',
                'check_captcha' => static fn () => true,
                'send_mail' => static fn () => true,
            ],
            $overrides
        );
    }

    public function testSuccessfulSubmission(): void
    {
        $result = process_lead_request($this->validPost(), $this->defaultOptions());

        $this->assertTrue($result['ok']);
        $this->assertSame(200, $result['code']);
        $this->assertSame('Заявка отправлена.', $result['message']);
    }

    public function testMissingName(): void
    {
        $result = process_lead_request(
            $this->validPost(['name' => '']),
            $this->defaultOptions()
        );

        $this->assertFalse($result['ok']);
        $this->assertSame(400, $result['code']);
        $this->assertSame('Заполните имя и телефон.', $result['message']);
    }

    public function testMissingPhone(): void
    {
        $result = process_lead_request(
            $this->validPost(['phone' => '   ']),
            $this->defaultOptions()
        );

        $this->assertFalse($result['ok']);
        $this->assertSame(400, $result['code']);
    }

    public function testMissingConsent(): void
    {
        $result = process_lead_request(
            $this->validPost(['consent' => '0']),
            $this->defaultOptions()
        );

        $this->assertFalse($result['ok']);
        $this->assertSame(400, $result['code']);
        $this->assertSame(
            'Необходимо согласие на обработку персональных данных.',
            $result['message']
        );
    }

    public function testMissingCaptchaToken(): void
    {
        $result = process_lead_request(
            $this->validPost(['smart-token' => '']),
            $this->defaultOptions()
        );

        $this->assertFalse($result['ok']);
        $this->assertSame(400, $result['code']);
        $this->assertSame('Подтвердите, что вы не робот.', $result['message']);
    }

    public function testCaptchaNotConfigured(): void
    {
        $result = process_lead_request(
            $this->validPost(),
            $this->defaultOptions(['server_key' => ''])
        );

        $this->assertFalse($result['ok']);
        $this->assertSame(503, $result['code']);
    }

    public function testInvalidCaptchaToken(): void
    {
        $result = process_lead_request(
            $this->validPost(['smart-token' => 'bad-token']),
            $this->defaultOptions([
                'check_captcha' => static fn () => false,
            ])
        );

        $this->assertFalse($result['ok']);
        $this->assertSame(400, $result['code']);
        $this->assertSame('Проверка капчи не пройдена. Попробуйте ещё раз.', $result['message']);
    }

    public function testMailTransportFailure(): void
    {
        $result = process_lead_request(
            $this->validPost(),
            $this->defaultOptions([
                'send_mail' => static fn () => false,
            ])
        );

        $this->assertFalse($result['ok']);
        $this->assertSame(500, $result['code']);
    }

    public function testNameAndPhoneAreEscapedInMailBody(): void
    {
        $capturedBody = null;

        process_lead_request(
            $this->validPost([
                'name' => '<script>alert(1)</script>',
                'phone' => '8905&775',
            ]),
            $this->defaultOptions([
                'send_mail' => static function ($to, $subject, $body) use (&$capturedBody) {
                    $capturedBody = $body;
                    return true;
                },
            ])
        );

        $this->assertStringContainsString('Please call to &lt;script&gt;alert(1)&lt;/script&gt;', $capturedBody);
        $this->assertStringContainsString('8905&amp;775', $capturedBody);
    }
}
