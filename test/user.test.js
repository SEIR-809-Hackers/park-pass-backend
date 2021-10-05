const chai = require('chai').should()
const expect = require('chai').expect
const supertest = require('supertest')

const api = supertest('http://localhost:8080')

describe('GET /users and /users/:id', () => {
    let users;


    before((done) => {
        api
            .get('/users')
            .set('Accept', 'application/json')
            .end((error, response) => {
                users = response.body
                done();
            })
    })

      it('should check for users array', () => {
						expect(users).to.be.an('array')
			});

        it('should be specific user', () => {
					api
						.get('/users/' + `${users[0]._id}`)
						.set('Accept', 'application/json')
						.end((error, response) => {
							expect(response.body).to.have.property('name')
                            expect(response.body).to.have.property('myParks');
							done();
						});
				});

})