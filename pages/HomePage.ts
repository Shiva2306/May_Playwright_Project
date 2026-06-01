

//Page Object class consists of 3 components - constructor, locator, action methods

import {Page, Locator} from '@playwright/test'

export class HomePage

{
    page:Page;
    myaccount: Locator;
    register: Locator;
    login:Locator;

    //Constructor will initialize object reference (instance variable)
    constructor(page:Page)
    {
     this.page=page;

    this.myaccount= page.locator('//span[text()="My Account"]')
    this.register=page.locator('//a[text()="Register"]')
    this.login=page.locator('//a[text()="Login"]')
    }

//Action methods
   async clickonmyaccount()
   {
      await this.myaccount.click()  
   }

   async clickonregister()
   {
     await this.register.click()
   }

   async clickonlogin()
   {
     await this.login.click()
   }



}

