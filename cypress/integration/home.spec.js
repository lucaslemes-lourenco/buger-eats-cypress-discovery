describe('home page', ()=>{ //necessário para que possa ser crido a swit de caso de testes.s
    it('app deve estar online', ()=>{ //utilizado para colocar o nome de caso de testes. 

        cy.visit('/')
        cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
    })



})