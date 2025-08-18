describe("Login Functionality", () => { 
    it('Login Register user', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm;jsessionid=0653221BECE16D32949F8CAE891B51CA')
        //cy.get('#loginPanel > :nth-child(3) > a').click()
        cy.get(" input[name='username']").type('johndoe333')
        cy.get("input[name='password']").type('password123')  
        cy.get("input[value='Log In']").click()
        cy.get("a[href='activity.htm?id=18672']").click()
        cy.get("#month").select('January')
        cy.get("#transactionType").select("All")
        cy.get("input[value='Go']").click()
    })
}) 

