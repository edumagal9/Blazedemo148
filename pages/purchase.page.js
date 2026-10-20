class PurchasePage {

    constructor(page) {
        this.page = page
        this.url = 'purchase'
        this.titulosecao = 'h2'                // seletor tipo tag
        this.name = '#inputName'              // seletor tipo id
        this.cardType = '[name="cardType"]'   // seletor tipo parametro
        this.rememberMe = '#rememberMe'      // seletor tipo id
        this.btnPurchaseFlight = '.btn.btn-primary' // seletor tipo classe
    }

    async preencher_nome(nome) {
        await this.page.locator(this.name).fill(nome)
    }

    async selecionar_bandeira(bandeira) {
        await this.page.locator(this.cardType).selectOption(bandeira)
    }

    async lembrar_de_mim() {
        await this.page.locator(this.rememberMe).check()
    }

    async clicar_para_concluir_compra() {
        await this.page.locator(this.btnPurchaseFlight).click()
    }
}

module.exports = PurchasePage


