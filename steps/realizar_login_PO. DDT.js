const { test, expect } = require('@playwright/test')

import { parse } from 'csv-parse/sync' 
import { readFileSync } from 'fs' 
import HomePage from '../pages/home.page'
import LoginPage from '../pages/login.page'
 
const massa = parse(readFileSync('data/csv/login.csv'), {
      columns: true
})
 
massa.forEach(({
      email,
      password    
}) => {
 
        test(`Realizar login - ${email}, ${password}`, async ({ page }) => {
            // Instanciar os objetos do Page Object
            const homePage = new HomePage(page)
            const loginPage = new LoginPage(page)
                         
            // Página Principal - Home
            await page.goto('https://www.blazedemo.com')
           
            // clicar em home                                      
             await page.getByRole('link', { name: 'home' }).click()

            // Página de Login - Login
             await page.waitForURL(loginPage.url);                                 
             await expect(page.locator(loginPage.titulosecao))                         
             await expect(page.locator('.panel-heading')).toHaveText('Login')

            await expect(page).toHaveURL(loginPage.url)
            await expect(page.locator(loginPage.titulosecao))
                  .toHaveText('Login')        

            await loginPage.preencher_email(email)
            await loginPage.preencher_senha(password)
            await loginPage.lembrar_de_mim()
            await loginPage.clicar_para_concluir_login()
            await expect(page.locator('.message')).toHaveText('Page Expired')
)})                                                                