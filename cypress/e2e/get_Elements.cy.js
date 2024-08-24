describe('Get Elements', () => {

    it('Encontrar Elementos', () => {
        //get() - encontrar ou selecionar elementos
        cy.visit('https://automationpratice.com.br/')
            .get('.mobile-menu-logo')

        //contains() - encontrar elementos por texto onde geralmente diminuimos o escopo com 'get()'
        cy.get('#top_header').as('cabecalho')
            .contains('Login')

        //find() - encontrar elementos, diminuimos o escopo com 'get()'
        cy.get('#top_header')
            .find('.fa-user')

        //as() - alias - serve para criar apelidos ou atalhos para grandes comandos
        cy.get('@cabecalho')
            .find('.fa-user')
    })
})