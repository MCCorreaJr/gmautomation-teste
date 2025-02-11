
describe('Testes API - GET', () => {

    it('Buscar todos os usuários e retornar status 200', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                expect(response.status).to.eq(200);
                const users = response.body;


                users.forEach((user) => {
                    cy.log(user.name);
                });
            });
    });

})
