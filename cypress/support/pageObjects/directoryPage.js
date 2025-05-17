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

    fillName(name) {
        cy.get('input[placeholder=Type for hints...]')
        .should('be.visible')
        .clear()
        .type(name)
        .should('have.value', name)
    }
}

export default DirectoryPage;