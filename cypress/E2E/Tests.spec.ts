// cypress/integration/firstTest.spec.ts

import Items from "../Classes/Items";
import User from "../Classes/StandardUser";

describe('Automation Test', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit('/', {failOnStatusCode: false});
  })
  const user = new User();
  const items = new Items()
    it('Login as standard user : Confirm login and check the URL', () => {
      cy.get('[data-test="username"]').type(user.standard);
      cy.get('[data-test="password"]').type(user.password+'{enter}');
      cy.url().should('contain','inventory.html')
    })
    it('Login as standard user : Add item to cart, verify quantity, check remove button visibility', ()=> {
      cy.get('[data-test="username"]').type(user.standard);
      cy.get('[data-test="password"]').type(user.password+'{enter}');
      items.backpack.click();
      items.jacket.click();
      cy.scrollTo('top')
      cy.wait(2000)
      items.shoppingCart
      items.removeButton.should('exist')
    })
})