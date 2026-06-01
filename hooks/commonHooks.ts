

import test from '@playwright/test'
import { TestConfig } from '../test.config'

test.beforeEach(async ({page})=>{
   await page.goto(TestConfig.appUrl)

})

test.afterEach(async ({page})=>{
  await page.pause()
  // await page.close()

})
