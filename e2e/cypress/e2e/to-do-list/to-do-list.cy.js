describe(`Visit Printi Marvel`, () => {
    // it(`Open Login view`, () => {
    //     cy.visit('https://printimarvel.netlify.app/')
    // })

    // it (`Doing login`, () => {
    //     cy.visit('https://printimarvel.netlify.app/')
    //     const publicKey = cy.get(`input[name='publicKey']`).type(`68c1b6cf8d23e586b95143dd99dfaab9`)
    //     const privateKey = cy.get(`input[name='privateKey']`).type(`44beb173207d7d665f8d557ddf9daccadbc0c913`)
    //     const loginButton = cy.get(`button[id='login-button']`).click()
    //     cy.wait(5000)
    //     const firstElement = cy.get(`p`).contains(`1011334`)
    // })

    // it(`Make request`, () => {

    //     cy.visit('https://printimarvel.netlify.app/')
    //     const publicKey = cy.get(`input[name='publicKey']`).type(`68c1b6cf8d23e586b95143dd99dfaab9`)
    //     const privateKey = cy.get(`input[name='privateKey']`).type(`44beb173207d7d665f8d557ddf9daccadbc0c913`)
    //     const loginButton = cy.get(`button[id='login-button']`).click()

    //     cy.request({
    //         url:`https://gateway.marvel.com/v1/public/characters`,
    //         qs: {
    //             limit: 10,
    //             offset: 0,
    //             apikey: `68c1b6cf8d23e586b95143dd99dfaab9`,
    //             ts: 1,
    //             hash: `62ac0534fcf44ff4454a58a1b0ecb56e`
    //         }
    //     }).then((response) => {
    //         const {data} = response.body;
    //         const {results} = data;
    //         expect(results).to.have.length(10)
    //     })

    // })

    // it(`Open TODO task list and post a new task`, () => {
    //     cy.visit(`http://localhost:3000/tasks`)
    //     cy.wait(5000)
    //     const inputTaskName = cy.get(`input[id='taskName']`).type(`Cypress Test`)
    //     const formButton = cy.get(`button[id="add-task"]`).click();
    //     const newTaskElement = cy.get(`p`).contains(`Cypress Test`)
    // })

    // it(`Open TODO task list and put a task`, () => {
    //     cy.visit(`http://localhost:3000/tasks`)
    //     cy.wait(5000)
    //     const taskButton = cy.get(`button[id="edit-task-a8b1bdea-f935-4ce2-9109-4f413b6e33ee"]`).click()
    //     const inputTaskName = cy.get(`input[id='taskName']`).should('have.value', 'teste 123').clear().type(`teste 12345`);
    //     const formButton = cy.get(`button[id="add-task"]`).click();
    //     cy.wait(1000)
    //     const newTaskElement = cy.get(`p`).contains(`teste 12345`)
    // })

    context(`CRUD Task`, () => {
        beforeEach(() => {
            cy.visit(`https://printi.com.br`);
            cy.wait(5000);
        });
        
        it(`Open TODO task list and post a new task`, () => {
            const inputTaskName = cy.get(`input[id='taskName']`).type(`Cypress Test`)
            const formButton = cy.get(`button[id="add-task"]`).click();
            const newTaskElement = cy.get(`p`).contains(`Cypress Test`)
        })
    
        it(`Open TODO task list and put a task`, () => {
            const taskButton = cy.get(`button[id="edit-task-a8b1bdea-f935-4ce2-9109-4f413b6e33ee"]`).click()
            const inputTaskName = cy.get(`input[id='taskName']`).should('have.value', 'teste 123').clear().type(`teste 12345`);
            const formButton = cy.get(`button[id="add-task"]`).click();
            cy.wait(1000)
            const newTaskElement = cy.get(`p`).contains(`teste 12345`)
        })

        it(`Open TODO task list and Delete a task`, () => {
            const taskDeleteButton = cy.get(`button[id="delete-task-a8b1bdea-f935-4ce2-9109-4f413b6e33ee"]`).click()
            cy.wait(1000)
            cy.get('div[id="a8b1bdea-f935-4ce2-9109-4f413b6e33ee"]').should('not.exist');
        })
    });
})