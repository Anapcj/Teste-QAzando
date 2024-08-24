# Comentário
Feature: Login
    Eu como cliente
    Quero fazer login na aplicação
    Para fazer um pedido de compra

    Scenario: Login com campo e-mail vazio
        Given I am on login screen
        When I click on Login
        Then I see the menssage "E-mail inválido."  

    Scenario: Login com campo e-mail vazio
        Given I am on login screen
        And fill e-mail
        When I click on Login
        Then I see the menssage "Senha inválida." 
    