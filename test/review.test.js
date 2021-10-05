const chai = require('chai').should()
const expect = require('chai').expect
const supertest = require('supertest')

const api = supertest('http://localhost:8080')

describe('GET /reviews and /reviews/:id', () => {
    let reviews;


    before((done) => {
        api
            .get('/reviews')
            .set('Accept', 'application/json')
            .end((error, response) => {
                reviews = response.body
                done();
            })
    })

      it('should check for reviews array', () => {
						expect(reviews).to.be.an('array')
			});

        it('should be specific review', () => {
					api
						.get('/reviews/' + `${reviews[0]._id}`)
						.set('Accept', 'application/json')
						.end((error, response) => {
							expect(response.body).to.have.property('title')
                            expect(response.body).to.have.property('author');
							done();
						});
				});

})