class DirectoryPage {
    showdirectory() {
        cy.contains('Directory').should('be.visible').click();
        cy.url().should('include', '/directory/viewDirectory');
    }

    directoryIntercepts() {
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/directory/employees**').as('employees')
    }
    
    waitDirectoryData() {
        cy.wait('@employees').its('response.statusCode').should('eq', 200);
    }

    waitDirectoryDataError() {
        cy.wait('@employees').its('response.statusCode').should('eq', 422);
    }

    fillName(name) {
        cy.get('input[placeholder="Type for hints..."]')
        .should('be.visible')
        .clear()
        .type(name)

        cy.get('.oxd-autocomplete-dropdown .oxd-autocomplete-option')
        .should('be.visible');

        cy.contains('.oxd-autocomplete-option', name).click();
    }

    fillJob(job) {
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input')
        .click();

        cy.get('.oxd-select-dropdown')
        .should('be.visible')
        .contains(job)
        .click();
    }

    fillLocation(location) {
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input')
        .click();

        cy.get('.oxd-select-dropdown')
        .should('be.visible')
        .contains(location)
        .click();
    }

    searchButton() {
        cy.get('button[type="submit"]')
        .should('be.visible')
        .click()
    }

    requiredMessage() {
        cy.xpath('//span[contains(@class, "oxd-input-field-error-message")]')
        .should('be.visible')
        .and('contain.text', 'Required');
    }

    resetButton() {
        cy.get('button[type="reset"]')
        .should('be.visible')
        .click()
    }
}

export default DirectoryPage;