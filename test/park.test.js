const chai = require('chai').should();
const expect = require('chai').expect
const supertest = require('supertest')

const api = supertest('http://localhost:8080')


describe('GET /parks and /parks/:id', () => {
    let parks;


    before((done) => {
        api
            .get('/parks')
            .set('Accept', 'application/json')
            .end((error, response) => {
                parks = response.body
                done();
            })
    })

      it('should check for parks array', () => {
						expect(parks).to.be.an('array')
			});

        it('should be specific park', () => {
					api
						.get('/parks/' + `${parks[0]._id}`)
						.set('Accept', 'application/json')
						.end((error, response) => {
							expect(response.body).to.have.property('ParkName')
                            expect(response.body).to.have.property('ParkDetails');
							done();
						});
				});

})