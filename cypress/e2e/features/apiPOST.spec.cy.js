describe('testes API - POST', () => {

    it('Criar um usuário e retornar status 201', () => {
        cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/users',
            body: {

                id: 11,
                name: "Teste USER",
                username: "UTeste",
                email: "Testee@april.biz",
                address: {
                    street: "Kulas Light",
                    suite: "Apt. 556",
                    city: "Gwenborough",
                    zipcode: "92998-3874",
                    geo: {
                        lat: "-37.3159",
                        lng: "81.1496"
                    }
                },
                phone: "1-770-736-8031 x56442",
                website: "hildegard.org",
                company: {
                    name: "Romaguera-Crona",
                    catchPhrase: "Multi-layered client-server neural-net",
                    bs: "harness real-time e-markets"
                }
            }
        })
            .then((response) => {
                expect(response.status).to.eq(201);
                cy.log('Usuário Criado:');
                cy.log(`Nome: ${response.body.name}`);
                cy.log(`Email: ${response.body.email}`);
                cy.log(`Username: ${response.body.username}`);
                cy.log(`Telefone: ${response.body.phone}`);
                cy.log(`Endereço: ${response.body.address.street}, ${response.body.address.city}`);

                // Você pode também logar o objeto completo de resposta, se preferir
                cy.log(JSON.stringify(response.body, null, 2));
            })
    })

    it('Criar um usuário em rota inexistente para gerar um erro e retornar status 400', () => {
        cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/nonexistentroute',
            body: {
                name: 'John Doe',
                email: 'john.doe@example.com',
                address: {
                    street: '123 Main St',
                    city: 'Anytown',
                    zipcode: '12345'
                }
            },
            failOnStatusCode: false
        }).should((response) => {
            expect(response.status).to.eq(404);


            expect(response.body).to.deep.equal({});
        });
    });

});