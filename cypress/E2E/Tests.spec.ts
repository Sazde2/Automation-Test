// cypress/integration/firstTest.spec.ts

import User from "../Classes/StandardUser";

describe('Automation Test', () => {
  const user = new User();
    it('Login as standard user : Confirm login and check the URL', () => {
      cy.visit('https://www.saucedemo.com', {
        auth: {
          username: user.standard,
          password: user.password
        }
      })
      cy.get('[data-test="username"]').type(user.standard);
      cy.get('[data-test="password"]').type(user.password+'{enter}');
      cy.url().should('contain','inventory.html')
    })
  })
  