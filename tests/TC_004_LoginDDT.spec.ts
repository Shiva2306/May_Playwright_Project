

import { HomePage } from '../pages/HomePage';

import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import '../hooks/commonHooks'
import { DataProvider } from '../utils/dataProvider';


// Load CSV test data
const csvPath = "testData/logindata2.csv";
const testData = DataProvider.getTestDataFromCsv(csvPath);

//This code reads login data (email, password, expected result) from a CSV file and stores it in testData.
//  Then, it loops through each row and runs the same login test multiple times with different data (data-driven testing).
//  For each row, it opens the website, performs login using the given credentials, and checks the result. 
// If login is expected to succeed, it verifies the “My Account” page is visible; otherwise, it checks for an error message.

for (const data of testData) {

    test(`Login Test with CSV Data: ${data.testName} @datadriven`, async ({ page }) => {

       let hp = new HomePage(page);
           await hp.clickonmyaccount();
           await hp.clickonlogin();
       
           let lp = new LoginPage(page);
        await lp.enteremail(data.email);
        await lp.enterpassword(data.password);
        await lp.clickloginbutton();

         await page.waitForLoadState('networkidle') 
         //waits until all network requests (like API calls, images, scripts) are finished and the page becomes idle.
         //  It helps ensure the page is fully loaded before performing assertions.
         //  This is useful after actions like login or navigation in dynamic applications. 

        if (data.expected.toLowerCase() === 'success') {

        
            await expect(page.locator('#content').getByRole('heading', { name: 'My Account' })).toBeVisible();

        } else {

            const errorMessage = await lp.getloginErrorMessage();
             expect(errorMessage).toContain('Warning: No match');

        }
    });

}