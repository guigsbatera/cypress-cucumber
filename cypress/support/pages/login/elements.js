/// <reference types="cypress" />

export const ELEMENTS = {
    
    txtPassword: 'input[data-qa="login-password"]',
    txtEmailAddrees: 'input[data-qa="login-email"]',
    btnLogin: 'button[data-qa="login-button"]',
    txtLoggedInAs: 'ul[class="nav navbar-nav"] > li > a > b',
    txtLoginSenhaIncorreto: 'p[style="color: red;"]'
}