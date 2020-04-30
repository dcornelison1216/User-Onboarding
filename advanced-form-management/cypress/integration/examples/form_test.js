describe("Testing form input", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("Test name, email, password, checkbox", () => {
    // get the name input and type a name into it
    // use an assertion to check if the text inputted contains the name you provided
    cy.get('[data-cy="name"]').type("Derek").should("have.value", "Derek");
    // get the email input and type an email address into it
    cy.get('[data-cy="email"]').type("dcornelison1216@gmail.com");
    // get the password input and type a password into it
    cy.get('[data-cy="password"]').type("passwordpassword");
    // set up a test that will check to see if a user can check the terms of service box
    cy.get('[type="checkbox"]').check().should("be.checked");
    // check to see if a user can submit the form data
    cy.contains('Submit').click();
  })

  // check for form validation if an input is left empty
  // name field left empty
  it("Test with empty name field", () => {
    cy.get('[data-cy="email"]').type("dcornelison1216@gmail.com");
    cy.get('[data-cy="password"]').type("passwordpassword");
    cy.get('[type="checkbox"]').check();
    cy.contains('Submit').should("be.disabled");
  })
  // email field left empty
  it("Test with empty name field", () => {
    cy.get('[data-cy="name"]').type("Derek");
    cy.get('[data-cy="password"]').type("passwordpassword");
    cy.get('[type="checkbox"]').check();
    cy.contains('Submit').should("be.disabled");
  })
  // password field left empty
  it("Test with empty name field", () => {
    cy.get('[data-cy="name"]').type("Derek");
    cy.get('[data-cy="email"]').type("dcornelison1216@gmail.com");
    cy.get('[type="checkbox"]').check();
    cy.contains('Submit').should("be.disabled");
  })
  // terms checkbox unclicked
  it("Test with checkbox unclicked", () => {
    cy.get('[data-cy="name"]').type("Derek");
    cy.get('[data-cy="email"]').type("dcornelison1216@gmail.com");
    cy.get('[data-cy="password"]').type("passwordpassword");
    cy.contains('Submit').should("be.disabled");
  })

})
