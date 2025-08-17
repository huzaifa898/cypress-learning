describe("Launch the application", () => { 
    it('Test launch the application', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm;jsessionid=0653221BECE16D32949F8CAE891B51CA')
        cy.get("input[name='username']").type("john")
        cy.get("input[name='password']").type("demo")
    })
}) 