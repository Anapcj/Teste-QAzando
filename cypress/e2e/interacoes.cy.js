describe('Interações', () => {

    it('Preencher um Campo de um Elemento (Digitar)', () => {

        cy.visit('https://automationpratice.com.br/')
            .get('.header-logo')

        cy.get('.form-control')
            .type('ana.cesarioteste@gmail.com')


    })

    //it('Click', () => {

    //cy.visit('https://automationpratice.com.br/')
    //.get('.header-logo')

    // Click normal
    //cy.get('.fa-user')
    //.click()

    // Click duplo
    //cy.get('.fa-user')
    //.dblclick()

    // Click botão direito
    //cy.get('.fa-user')
    //.rightclick()

    //Click por  cordenadas
    //cy.get('.fa-user')
    //.click(100, 100, {force: true})  

    //Apertar enter (simular)
    //cy.get('.form-control')
    //.type('ana.cesarioteste@gmail.com{enter}')

    // })

    it.only('Select', () => {

        cy.visit('https://automationpratice.com.br/')
            .get('.header-logo')

        cy.get('.footer_one_widget')
            .contains('Checkout View Two')
            .click()

        cy.get('#country')
            .select('Colombia')
    })

    it('Checkbox e radio button ', () => {

        cy.visit('https://automationpratice.com.br/')
            .get('.header-logo')

        cy.get('.footer_one_widget')
            .contains('Checkout View One')
            .click()

        cy.get('#materialUnchecked')
            .check()
            .uncheck()

        cy.get('#css')
            .check()
    })
})