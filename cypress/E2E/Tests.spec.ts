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
    it('Login as problem user : Check that the onesie image is shown as the source for the onesie (this test should fail since the correct image isn\'t shown)',()=>{
      cy.get('[data-test="username"]').type(user.problem);
      cy.get('[data-test="password"]').type(user.password+'{enter}');
      items.onsiePicture.should('have.attr', 'src').should('include', '/static/media/red-onesie-1200x1500.2ec615b2.jpg');
    })
    it('Login with locked user : Login with this user and confirm error is displayed',()=>{
      cy.get('[data-test="username"]').type(user.lockedOut);
      cy.get('[data-test="password"]').type(user.password+'{enter}');
      items.error.should('exist')
    })
})