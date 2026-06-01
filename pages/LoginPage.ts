import { Locator, Page } from "@playwright/test";


export class LoginPage
{
//Page Object class - constructor, locator, action methods
page: Page;
emailinput: Locator;
emailpassword: Locator;
loginbutton: Locator;
successmessagelogin: Locator;
errorMessage:Locator;


constructor(page:Page)
{
   this.page = page;
   this.emailinput=page.locator('#input-email')
   this.emailpassword=page.locator('#input-password')
   this.loginbutton=page.locator('//input[@type="submit"]')
   this.successmessagelogin=page.getByText('My Account').nth(2)
   this.errorMessage = page.locator("//div[contains(@class,'alert-danger')]");


}

//Action methods

async enteremail(emailid:string) 
{
    await this.emailinput.fill(emailid)
}

async enterpassword(pass12: string)
{
     await this.emailpassword.fill(pass12)
  
}

async clickloginbutton()
{
     await  this.loginbutton.click()
 
}

async successmessagevalidation()
{
   return await this.successmessagelogin.textContent()
}

  async getloginErrorMessage() {
        const errorText = await this.errorMessage.textContent();
        return errorText?.trim();
    }


}