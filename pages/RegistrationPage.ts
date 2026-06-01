



//Page Object class consists of 3 components - constructor, locator, action methods

import {Page, Locator} from '@playwright/test'

export class RegistrationPage
{
    page: Page;

    firstname: Locator;
    lastname: Locator;
    email: Locator;
    telephone: Locator;
    password1: Locator;
    password2: Locator;
    checkbox: Locator;
    continue: Locator;
    successmessage:Locator


    constructor(page: Page)
    {
        this.page=page;

        this.firstname=page.locator('#input-firstname')
        this.lastname=page.locator('#input-lastname')
       this.email = page.locator('#input-email')
        this.telephone=page.locator('#input-telephone')
        this.password1=page.locator('#input-password')
        this.password2=page.locator('#input-confirm')
        this.checkbox=page.locator('//input[@type="checkbox"]')
        this.continue=page.locator('//input[@type="submit"]')
        this.successmessage=page.getByText('Your Account Has Been Created!')

    }

    //Action methods

    async enterfirstname(fname:string)
    {
   await this.firstname.fill(fname)
    }

     async enterlastname(lname:string)
    {
   await this.lastname.fill(lname)
    }

     async enteremail(email:string)
    {
   await this.email.fill(email)
    }

     async entertele(tele: string)
    {
   await this.telephone.fill(tele)
    }

     async enterpass1(pass1: string)
    {
   await this.password1.fill(pass1)
    }

     async enterpass2(pass2: string)
    {
   await this.password2.fill(pass2)
    }

     async clickcheckbox()
    {
   await this.checkbox.click()
    }

     async clickcontinue()
    {
   await this.continue.click()
    }

    async sucesstext()
    {
       return await this.successmessage.textContent()
    }
}