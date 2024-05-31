class Items {
    get backpack(){
        return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
    }
    get removeBackpac(){
        return cy.get('[data-test="remove-sauce-labs-backpack"]')
    }
    get bikeLight(){
        return cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]')
    }
    get blackShirt(){
        return cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')
    }
    get jacket(){
        return cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]')
    }
    get onsie(){
        return cy.get('[data-test="add-to-cart-sauce-labs-onesie"]')
    }
    get onsiePicture(){
        return cy.get('[data-test="inventory-item-sauce-labs-onesie-img"]')
    }
    get redShirt(){
        return cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]')
    }
    get shoppingCart(){
       return  Object.defineProperty(Items.prototype, "shoppingCart", {
            get: function () {
                return cy.get('[data-test="shopping-cart-link"]').should('contain','2');
            },
            enumerable: false,
            configurable: true
        });
        
    }
    get removeButton(){
        return cy.get('.btn').should('contain','Remove')
    }
    get error(){
        return cy.get('.error').should('contain','Epic sadface: Sorry, this user has been locked out.')
    }
}
export default Items;
