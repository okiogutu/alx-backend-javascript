const chai = require('chai');
const request = require('request');

const expect = chai.expect;

describe('test API response', () => {
  it('test /index page', (done) => {
    request('http://localhost:7865', 'GET', (err, res, body) => {
      if (err) throw err;
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
    });
    done();
  });
});
