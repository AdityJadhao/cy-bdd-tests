const URL = 'https://opensource-demo.orangehrmlive.com/'
const USERNAME_INPUT = '#txtUsername'
const PASSWORD_INPUT = '#txtPassword'
const LOGIN_BUTTON = 'input[name="Submit"]'
const ERROR_MESSAGE = '#spanMessage'



class LoginPage {
    //visitwebpage
    static visit(){
        cy.visit(URL)
    }

    static fillUserName(name){
       cy.get(USERNAME_INPUT).type(name)
    }

    static fillPassword(password){
        cy.get(PASSWORD_INPUT).typr(password)

    }

    static Login(){
        cy.get(LOGIN_BUTTON).click()

    }

    static shouldShowErrorMessage(){
        cy.get(ERROR_MESSAGE).contains('Invalid credentials')

    }

}

export default LoginPage