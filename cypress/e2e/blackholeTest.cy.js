describe('template spec', () => {
    beforeEach(() => {
        cy.visit('https://testpages.eviltester.com/styled/basic-web-page-test.html');        
        cy.url().should('contain', 'basic-web-page-test');
    });
    
    it('passes', () => {
        
        cy.get('h1')
            .should('be.visible')
            .should('contain', 'Basic Web Page Example');        
        cy.get('.explanation p')
            .should('contain', 'Very simple web pages')
            .should('be.visible');
        cy.get('#para1').should('have.text', 'A paragraph of text');
        cy.get('#para2').should('have.text', 'Another paragraph of text');

    });
})