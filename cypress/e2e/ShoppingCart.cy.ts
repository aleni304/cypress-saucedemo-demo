describe("Login functionality", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
  });

  it("should add an item to the shopping cart", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get(".shopping_cart_badge").should("have.text", "1");
  });

  it("should remove an item from the shopping cart", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get(".shopping_cart_badge").should("have.text", "1");
    cy.get(".shopping_cart_link").click();
    cy.url().should('include', '/cart.html')
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    cy.get(".shopping_cart_badge").should("not.exist");
  });

  it("should proceed to checkout from the shopping cart", () => {
    cy.get(".shopping_cart_link").click();
    cy.url().should('include', '/cart.html');
    cy.get("[data-test='checkout']").click();
    cy.get('.title').should('have.text', 'Checkout: Your Information');
    cy.get('[data-test="firstName"]').should('be.visible');
  });

  it("should complete the purchase successfully with valid information", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type('Juanito');
    cy.get('[data-test="lastName"]').type('Perez');
    cy.get('[data-test="postalCode"]').type('15000');
    cy.get('[data-test="continue"]').click();
    cy.url().should('include', '/checkout-step-two.html');
    cy.get('.title').should('have.text', 'Checkout: Overview');
    cy.get('[data-test="finish"]').click();
    cy.url().should('include', '/checkout-complete.html');
    cy.get('.complete-header').should('have.text', 'Thank you for your order!');
    cy.get('.pony_express').should('be.visible');
  });

  it("should show an error message if checkout information is missing", () => {
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="error"]').should('be.visible');
    cy.get('[data-test="error"]').should('contain.text', 'Error: First Name is required');
    cy.url().should('include', '/checkout-step-one.html');
  });
});