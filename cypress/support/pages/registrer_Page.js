///   <reference types="cypress" />

//Elementos
const elements = {   
    buttons: {
     register:'#btnRegister' //'#btnRegister' 
    },
 
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
 
 //Ações/métodos

 export default {

    saveRegister ()  {
        cy.get(elements.buttons.register)
                .click()
    },
    
    accessRegisterPage () {
    
     //acessou a aplicação
     cy.visit('https://automationpratice.com.br/')
    
     //entrou no registro
     cy.get('.fa-lock')
         .click()
     //verifica se está na página cadastro    
     cy.get(elements.fields.name)
         .should('be.visible')
    
    },
    fillEmail (email) {
        cy.get(elements.fields.email)
            .should('be.visible')
            .type(email)
       
    },
    fillName (name) {
        cy.get(elements.fields.name)
            .type(name)
       
    },

      fillPassword (password) {
        cy.get(elements.fields.password)
            .should('be.visible')
            .type(password)
       
    },
    checkMensssage (mensage) {
        cy.get(elements.menssages.error)
                .should('have.text', mensage)
       
       },
       checkRegistrerSucess (name) {
    
        cy.get(elements.menssages.sucessTitle , {timeout: 3000})
            .should('have.text', 'Cadastro realizado!')
    
        cy.get(elements.menssages.sucessSubTitle , {timeout: 3000})
            .should('have.text', `Bem-vindo ${name}`)
    
    }

 }

 //Método Page Objects! 