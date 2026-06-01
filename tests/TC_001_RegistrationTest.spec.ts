
import { test, expect } from '@playwright/test'
import { HomePage } from '../pages/HomePage';
import { RegistrationPage } from '../pages/RegistrationPage'
import { RandomDataUtil } from '../utils/randomDataGenerator';
import { TestConfig } from '../test.config';
import '../hooks/commonHooks'



test('TC_001_Registration test', async ({ page }) => {


    let hp = new HomePage(page);
    await hp.clickonmyaccount();
    await hp.clickonregister();

    let rp = new RegistrationPage(page);
    await rp.enterfirstname(RandomDataUtil.getFirstName());
    await rp.enterlastname(RandomDataUtil.getlastName());
    await rp.enteremail(RandomDataUtil.getEmail());
    await rp.entertele(RandomDataUtil.getPhoneNumber());

     const password = RandomDataUtil.getPassword()
    await rp.enterpass1(password);
    await rp.enterpass2(password);
    await rp.clickcheckbox();
    await rp.clickcontinue();

    let text = await rp.sucesstext();
    expect(text).toContain('Your Account Has Been Created!');

    await page.pause()
});