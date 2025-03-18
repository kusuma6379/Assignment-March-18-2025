class Contact{
    Contact(){
        cy.get('#first_name').type('firstname');
        cy.get('#last_name').type('lastname');
        cy.get('#email').type('email');
        cy.get('#subject').type('subject');
        cy.get('#message').type('text');
        cy.get('#attachment').type('anyfile').click();
        cy.get('.btnSubmit').click();
    }
}
     export default Contact;