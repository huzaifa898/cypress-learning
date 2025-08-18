describe("Login Functionality", () => { 
    it('Login Registe user', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm;jsessionid=0653221BECE16D32949F8CAE891B51CA')
        //cy.get('#loginPanel > :nth-child(3) > a').click()
        cy.get(" input[name='username']").type('johndoe333')
        cy.get("input[name='password']").type('password123')  
        cy.get("input[value='Log In']").click()
    })
}) 

