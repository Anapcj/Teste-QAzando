///   <reference types="cypress" />
export default {
    //accessRegistrerPage(){
//acessou a aplicação
 //cy.visit('https://automationpratice.com.br/')

 //entrou no registro
 //cy.get('.fa-lock')
     //.click()

 //verifica se está na página cadastro    
 //cy.get('#user')
     //.should('be.visible')
    //}
//}

accessRegisterPage () {
    
    //acessou a aplicação
    cy.visit('https://automationpratice.com.br/')
   
    //entrou no registro
    cy.get('.fa-lock')
        .click()
    //verifica se está na página cadastro    
    cy.get(elements.fields.name)
        .should('be.visible')
   
   }
}

//Método Page Objects! 