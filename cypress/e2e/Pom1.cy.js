import "C:/Users/Administrator/OneDrive/Cucumber BDD/cypress/support/Pomlogin.js"
import "C:/Users/Administrator/OneDrive/Cucumber BDD/cypress/support/PomContact.js"
import "C:/Users/Administrator/OneDrive/Cucumber BDD/cypress/support/PomHome.js"
describe('To validate the pom ', () =>{ 
    it('To verify the pom', () => {
        cy.visit("https://practicesoftwaretesting.com/");
        cy.Login
        //cy.url().should('include','dashboard');
        cy.Contact
        cy.Home
    });
});