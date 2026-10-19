import { test } from '@playwright/test'
import HomePage from '../pages/home.pages.js'
import ReservePage from '../pages/reserve.page.js'
import PurchasePage from '../pages/purchase.page.js'
import ConfirmationPage from '../pages/confirmation.page.js'

test('Comprar Passagem', async ({ page }) => {
    const homePage = new HomePage(page)
    const reservePage = new ReservePage(page)
    const purchasePage = new PurchasePage(page)
    const confirmationPage = new ConfirmationPage(page)

    await homePage.visit()
    await homePage.selecionar_viagem('São Paolo', 'London')

    await reservePage.validar_pagina('São Paolo', 'London')
    await reservePage.selecionar_voo('9696')

    await purchasePage.validar_pagina()
    await purchasePage.preencher_dados_compra('Eduardo', 'amex', true)
    await purchasePage.comprar()

    await confirmationPage.validar_pagina()
    await confirmationPage.validar_valor_passagem('555 USD')
})

test('Login com usuário não cadastrado', async ({ page }) => {
    const homePage = new HomePage(page)

    await homePage.visit()
    await homePage.abrir_login()

    await page.waitForURL(/login/)
    await page.locator('.panel-heading').toHaveText('Login')

    await page.locator('#email').fill('Eduardo@test.com')
    await page.locator('#password').fill('SuperSpecial*123')
    await page.locator('input[name="remember"]').check()
    await page.locator('.btn.btn-primary').click()

    await page.locator('.message').toHaveText('Page Expired')
})

