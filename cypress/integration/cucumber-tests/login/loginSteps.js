import {Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './loginPage'


Given ('I open login page', () => {
    //cy.visit('https://opensource-demo.orangehrmlive.com/')

    LoginPage.visit()

})

/*When ('I submit login',() => {
    cy.get('#txtUsername').type('Admin')
    cy.get('#txtPassword').type('admin123')
    cy.get('input[name="Submit"]').click()*/

   /* LoginPage.fillUserName('Admin')
    LoginPage.fillPassword('Admin123')
    LoginPage.Submit()*/


When ('I fill username with {string}', username =>{

    LoginPage.fillUserName(username)
})

When ('I fill password with {string}',password => {

    LoginPage.fillPassword(password)

})

When ('I click on login button',() => {
    LoginPage.Login()
})

Then ('I should see homepage', () => {
    cy.get('#welcome').should('be.visible')

Then ('I should see error message', () => {
    LoginPage.shouldShowErrorMessage()
})

})


