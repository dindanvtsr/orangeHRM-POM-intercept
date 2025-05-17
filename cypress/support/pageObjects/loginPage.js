class LoginPage {
    visit() {
        cy.visit('/auth/login');
    }

    fillUsername(username) {
        cy.get('input[placeholder=Username]')
        .should('be.visible')
        .clear()
        .type(username)
        .should('have.value', username)
    }

    fillPassword(password) {
        cy.get('input[placeholder=Password]')
        .should('be.visible')
        .clear()
        .type(password)
        .should('have.value', password)
    }

    emptyUsername() {
        cy.get('input[placeholder=Username]')
        .should('be.visible')
        .clear()
        .should('have.value', '')
    }

    emptyPassword() {
        cy.get('input[placeholder=Password]')
        .should('be.visible')
        .clear()
        .should('have.value', '')
    }

    submit() {
        cy.get('button[type=submit]')
        .should('be.visible')
        .click();
    }

    invalidCredentialsMessage() {
        cy.xpath('//p[contains(@class, "oxd-alert-content-text")]')
        .should('contain', 'Invalid credentials')
    }

    requiredMessage() {
        cy.xpath('//span[contains(@class, "oxd-input-field-error-message")]')
        .should('contain', 'Required')
    }

    loginSuccessUrl() {
        cy.url().should('include', '/dashboard')
    }

    loginSuccessDashboardIntercepts() {
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary').as('actionSummary')
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/shortcuts').as('shortcuts')
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/buzz/feed?limit=5&offset=0&sortOrder=DESC&sortField=share.createdAtUtc').as('feeds')
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/leaves**').as('employeesLeaves')
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/subunit').as('subunit')
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/locations').as('locations')
    }
    
    waitDashboardData() {
        cy.wait('@actionSummary').its('response.statusCode').should('eq', 200);
        cy.wait('@shortcuts').its('response.statusCode').should('eq', 200);
        cy.wait('@feeds').its('response.statusCode').should('eq', 200);
        cy.wait('@employeesLeaves').its('response.statusCode').should('eq', 200);
        cy.wait('@subunit').its('response.statusCode').should('eq', 200);
        cy.wait('@locations').its('response.statusCode').should('eq', 200);
    }
  }

  export default LoginPage;