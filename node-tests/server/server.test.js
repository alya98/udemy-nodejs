const request = require('supertest');
const expect = require('expect');

const app = require('./server').app;
describe('Server', () => {
  describe('GET /', () => {
    it('should return хаюшки response', done => {
      request(app)
        .get('/')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            error: 'page not found'
          })
        })
        .end(done);
    });
  })
  
  describe(' GET /users', () => {
    it('should return list of users', done => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            name: 'Artem',
            age: 15,
          })
        })
        .end(done);
    });

  })
})