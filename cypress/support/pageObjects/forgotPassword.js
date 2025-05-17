class ForgotPassword {
    visit() {
        cy.visit('/auth/login');
    }

    clickForgotPassword() {
        cy.xpath('//p[@class="oxd-text oxd-text--p orangehrm-login-forgot-header"]')
        .should('be.visible')
        .click();
    }

    fillUsername(username) {
        cy.get('input[placeholder=Username]')
        .should('be.visible')
        .clear()
        .type(username)
        .should('have.value', username)
    }

    emptyUsername() {
        cy.get('input[placeholder=Username]')
        .should('be.visible')
        .clear()
        .should('have.value', '')
    }

    submit() {
        cy.get('button[type=submit]')
        .should('be.visible')
        .click();
    }

    cancel() {
        cy.get('button[type=button]')
        .should('be.visible')
        .click();
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    requiredMessage() {
        cy.xpath('//span[contains(@class, "oxd-input-field-error-message")]')
        .should('contain', 'Required')
    }

    invalidCredentialsMessage() {
        cy.xpath('//p[contains(@class, "oxd-alert-content-text")]')
        .should('contain', 'Invalid credentials')
    }

    resetPasswordSuccess() {
        cy.url().should('include', '/auth/sendPasswordReset')
        cy.xpath('//h6[normalize-space()="Reset Password link sent successfully"]')
        .should('contain', 'Reset Password link sent successfully')
    }
}

export default ForgotPassword;