// eslint-disable-next-line import/no-extraneous-dependencies
const request = require('supertest');
const app = require('../app');
/* global test */
test('GET /getChamp 200 json res array', (done) => {
  request(app)
    .get('/getChamp')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err) => {
      if (err) return done(err);
      return done();
    });
});
