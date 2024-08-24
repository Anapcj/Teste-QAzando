describe('Login', () => {

    it('Obter Texto de um Elemento', () => {
        
        cy.visit('https://automationpratice.com.br/')
            .get('.header-logo')

        cy.get('.top_header_left > p')
            .then((element) =>{
                console.log(element.text())
                element.hide() // hide - Esconder elementos
            })
            
    })
})