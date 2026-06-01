
import { test, expect } from '@playwright/test'
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { TestConfig } from '../test.config';
import '../hooks/commonHooks'

test('TC_002_LoginTest', async ({ page }) => {

    let hp = new HomePage(page);
    await hp.clickonmyaccount();
    await hp.clickonlogin();

    let lp = new LoginPage(page);
    await lp.enteremail(TestConfig.email1);
    await lp.enterpassword(TestConfig.password1);
    await lp.clickloginbutton();

    let loginvalidation: string | null = await lp.successmessagevalidation();
    expect(loginvalidation).toContain('My Account');

    await page.pause()
});