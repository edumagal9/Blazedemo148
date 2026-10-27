class LoginPage{
    // Arrange - Prepara
    // Mapear os elementos
    constructor(page){
        // interno = externo
        this.page = page //Playwright (reservado)
        this.url = /login/
        this.titulosecao ='.panel-heading'
        this.email = '#email'
        this.password = '#password'
        this.btnLogin = '.btn.btn-primary'
    } // fecha o constructor

    // Act - Executar
    // Mapear as ações
    async preencher_login(email, password){
        await this.page.locator(this.email).fill(email)
        await this.page.locator(this.password).fill(password)
    } 
     async lembrar_de_mim() {                            
         await this.page.locator(this.rememberMe).check()
    }
    async clicar_para_concluir_login() {          
        await this.page.locator(this.btnLogin).click()
                  

           
    } // fecha realizar_login
    

    // Assert - Valida
    // Faremos nos testes

} // fecha a classe

export default LoginPage // torna a classe visivel
