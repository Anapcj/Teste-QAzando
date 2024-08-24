describe('Verificação se um Elemento está Visível', () => {

    it.only('Asserts', () => {

        cy.visit('https://automationpratice.com.br/')
            .get('.header-logo')

            cy.get('.fa-user')
                .click()

            cy.get('.account_form > h3')
                .should('be.visible')

            cy.get('.account_form > h3')
                .should('contain', 'Login')
                .should('have.text', 'Login')

            
            cy.get('.account_form > h3')
                .then((element) => {
                expect(element.text()).eq('Login')
                expect(element).to.be.visible
                expect(element).not.disabled

            })  
    })
})