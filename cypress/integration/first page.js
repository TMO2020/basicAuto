import {WORDPRESS} from "../support/navigations";

describe ('Go to page' , () => {
    it('Should be able to visit local host page', () => {
        cy.visit('http://localhost:8888/wordpress/')
    })

   // it ('Should go to wordpress home page', () => {
        // cy.visit(WORDPRESS)
    // })

})