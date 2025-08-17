describe("Parabank Registration Tests", () => {
  
  beforeEach(() => {
    // Runs before every test
    cy.visit("https://parabank.parasoft.com/parabank/index.htm")
    cy.get('#loginPanel > :nth-child(3) > a').click() // Go to registration page
  })

  it("Should register a new user successfully", () => {
    // Fill registration form
    cy.get("input[id='customer.firstName']").type('John')
    cy.get("input[id='customer.lastName']").type('Doe')
    cy.get("input[id='customer.address.street']").type('123 Main St')
    cy.get("input[id='customer.address.city']").type('Anytown')
    cy.get("input[id='customer.address.state']").type('CA')
    cy.get("input[id='customer.address.zipCode']").type('12345')
    cy.get("input[id='customer.phoneNumber']").type('123-456-7890')
    cy.get("input[id='customer.ssn']").type('123-45-6789')
    
    // dynamic username to avoid "username already exists"
    const uniqueUsername = 'johndoe' + Date.now()
    cy.get("input[id='customer.username']").type(uniqueUsername)

    cy.get("input[id='customer.password']").type('password123')
    cy.get("#repeatedPassword").type('password123')

    // Submit the form
    cy.get("input[value='Register']").click()

    // Assertion – check if user is logged in
    cy.contains("Welcome " + 'John').should("be.visible")
    cy.contains("Accounts Overview").should("be.visible")
  })

  it("Should show validation errors when submitting empty form", () => {
    // Submit empty form
    cy.get("input[value='Register']").click()

    // Assertions – check validation messages
    cy.get("#customer\\.firstName\\.errors").should('contain', 'First name is required.')
    cy.get("#customer\\.lastName\\.errors").should('contain', 'Last name is required.')
    cy.get("#customer\\.address\\.street\\.errors").should('contain', 'Address is required.')
    cy.get("#customer\\.address\\.city\\.errors").should('contain', 'City is required.')
    cy.get("#customer\\.address\\.state\\.errors").should('contain', 'State is required.')
    cy.get("#customer\\.address\\.zipCode\\.errors").should('contain', 'Zip Code is required.')
    cy.get("#customer\\.ssn\\.errors").should('contain', 'Social Security Number is required.')
    cy.get("#customer\\.username\\.errors").should('contain', 'Username is required.')
    cy.get("#customer\\.password\\.errors").should('contain', 'Password is required.')
    cy.get("#repeatedPassword\\.errors").should('contain', 'Password confirmation is required.')
  })

})
