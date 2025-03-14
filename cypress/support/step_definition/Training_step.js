import {Given, When, And, Then} from "@badeball/cypress-cucumber-preprocessor"
Given("", () => {
    cy.visit('https://v1.training-support.net/selenium/simple-form?')
})
When("User enter the {word}",(FirstName) => {
    cy.get('#firstName').type('FirstName');
})
When("User enter the {word} ",(LastName) => {
    cy.get('#lastName').type('LastName');
})
When("User have to enter the valid {word} ",(Email) => {
    cy.get('#email').type('Email');
})
When("User enter the {word}",(ContactNumber) => {
    cy.get('#number').type('ContactNumber');
})
And("User enter the {word} ",(Message) => {
    cy.get('[class="field"]').should('have.length',4).type("Message")
})
Then("User successfully submit the details",() => {
    cy.get('[value="submit"]').click()
})