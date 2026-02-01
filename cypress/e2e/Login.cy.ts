describe("Login functionality", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
  });
  
  it("should log in successfully with valid credentials", () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.url().should("include", "/inventory.html");
    cy.get('.title').should('have.text', 'Products');
  });

  it("should display an error message with invalid credentials", () => {
    cy.get('[data-test="username"]').type("invalid_user");
    cy.get('[data-test="password"]').type("wrong_password");
    cy.get('[data-test="login-button"]').click();
    cy.get("[data-test='error']").should("be.visible").and("contain.text", "Username and password do not match any user in this service");
  });

  it("should display error messages for empty username and password fields", () => {
    cy.get('[data-test="login-button"]').click();
    cy.get("[data-test='error']").should("be.visible").and("contain.text", "Username is required");
    cy.get("#user-name").type("standard_user");
    cy.get("#login-button").click();
    cy.get("[data-test='error']").should("be.visible").and("contain.text", "Password is required");
  });
});