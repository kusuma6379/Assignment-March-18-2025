class Login{
    Login(){
        cy.get('#email').type("email");
        cy.get('#password').type("password");
        cy.get('.btnSubmit').click();
        cy.url().should('include','dashboard');

    }
}
export default Login;