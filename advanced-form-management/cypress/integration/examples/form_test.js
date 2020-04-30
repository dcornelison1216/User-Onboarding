describe("Testing form input", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("Adds text to name field", () => {
    cy.get('[data-cy="name"]').type("Derek").should("have.value", "Derek");
    cy.get('[data-cy="email"]').type("dcornelison1216@gmail.com").should("have.value", "dcornelison1216@gmail.com");
    cy.get('[data-cy="password"]').type("passwordpassword").should("have.value", "passwordpassword");
    cy.get('[type="checkbox"]').check().should("be.checked");
    cy.contains('Submit').click();
  })
})
