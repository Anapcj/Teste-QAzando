// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

///   <reference types="cypress" />

//import cypress = require("cypress")

//Elementos
const elements = {   
   //buttons: {
    //register:'#btnRegister' //'#btnRegister' 
   //},

   fields:{
    name:'#user',
    email:'#email',
    password:'#password'
   },

   menssages:{
    error:'.errorLabel',
    sucessTitle:'#swal2-title',
    sucessSubTitle:'#swal2-html-container'

   }
}

//Ações/métodos/ações

//Cypress.Commands.add('saveRegister', () => {
    //cy.get(elements.buttons.register)
            //.click()
//})

Cypress.Commands.add('accessRegistrerPage', () => {

 //acessou a aplicação
 cy.visit('https://automationpratice.com.br/')

 //entrou no registro
 cy.get('.fa-lock')
     .click()
 //verifica se está na página cadastro    
 cy.get(elements.fields.name)
     .should('be.visible')

})
Cypress.Commands.add('fillEmail', (email) => {
    cy.get(elements.fields.email)
        .should('be.visible')
        .type(email)
   
   })
Cypress.Commands.add('fillName', (name) => {
    cy.get(elements.fields.name)
        .type(name)
   
   })
   Cypress.Commands.add('fillPassword', (password) => {
    cy.get(elements.fields.password)
        .should('be.visible')
        .type(password)
   
   })
   Cypress.Commands.add('checkMensssage', (mensage) => {
    cy.get(elements.menssages.error)
            .should('have.text', mensage)
   
   })
   Cypress.Commands.add('checkRegistrerSucess', (name) => {

    cy.get(elements.menssages.sucessTitle)
        .should('have.text', 'Cadastro realizado!')

    cy.get(elements.menssages.sucessSubTitle , {timeout: 3000})
        .should('have.text', `Bem-vindo ${name}`)

})

