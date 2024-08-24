///   <reference types="cypress" />

import { faker } from '@faker-js/faker';
//import home_Page from '../support/pages/home_Page' //Método Page Objects! 
//import registrer_Page from '../support/pages/registrer_Page'; //Método Page Objects! 

const randomName = faker.person.fullName(); // Rowan Nikolaus
//const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz

const user_data = require('../fixtures/desafio_valid_data .json')

describe('Cadastro de usuário', () => {

    beforeEach('Acessando página de cadastro', () => {

        cy.accessRegistrerPage() //home_Page.accessRegistrerPage() * Método Page Objects! 
    })

    it('Validar campo nome vazio', () => {

        //clicou no registrar
        //register_page.saveRegistrer()
        cy.get('#btnRegister')
            .click()

        //assert
        cy.checkMensssage('O campo nome deve ser prenchido') 
        //registrer_page.checkMensssage('O campo nome deve ser prenchido') 
    })

    it('Validar campo e-mail vazio', () => {
        
        cy.fillName(user_data.name)

        //registrer_page.fillName(user_data.name)
        //registrer_page.saveRegistrer()
        //registrer_page.checkMensssage('O campo nome deve ser prenchido') 

        //cy.get('#user')
            //.type(user_data.name)

        cy.get('#email')
            .should('be.visible')
            .click()

        //clicou no registrar
        //cy.saveRegistrer()
        cy.get('#btnRegister')
            .click()

        //assert
        cy.checkMensssage('O campo e-mail deve ser prenchido corretamente')

    })

    it('Validar campo e-mail inválido', () => {
        cy.fillName(user_data.name)

        //verifica se o e-mail está preenchido corretamente
        cy.fillEmail('hahahahahaha{enter}')
            
        //clicou no registrar
        //cy.saveRegistrer()
        cy.get('#btnRegister')
            .click()

        //assert
        cy.checkMensssage('O campo e-mail deve ser prenchido corretamente')

    })

    it('Validar campo senha vazia', () => {
       cy.fillName(user_data.name)

        //verifica se o e-mail está preenchido 
        cy.fillEmail(user_data['e-mail'])

        //verifica a senha 
        cy.get('#password')
            .should('be.visible')
            .click()

        //clicou no registrar
        //cy.saveRegistrer()
        cy.get('#btnRegister')
            .click()

        //assert
        cy.checkMensssage('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Validar campo senha inválida', () => {

       cy.fillName(user_data.name)

        //verifica se o e-mail está preenchido 
        cy.fillEmail(user_data['e-mail'])

        //verifica se a senha está correta
        cy.fillPassword('5{enter}')
            
        //clicou no registrar
        //cy.saveRegistrer()
        cy.get('#btnRegister')
            .click()


        //assert
        cy.checkMensssage('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Validar cadastro com sucesso!', () => {
        const name = faker.person.fullName()
        //const email = faker.internet.email()

       cy.fillName(name)

        //verifica se o e-mail está preenchido 
        cy.fillEmail(user_data['e-mail'])

        //verifica se a senha está correta
        cy.fillPassword(user_data.password)

        //clicou no registrar
        //cy.saveRegister()
        cy.get('#btnRegister')
            .click()

        //assert
        cy.checkRegistrerSucess(name)
    })
})