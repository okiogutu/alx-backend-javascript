const chai = require('chai');
const request = require('request');

const expect = chai.expect;

const url = 'http://localhost:7865';

describe('test API response', () => {
  it('test /index page', (done) => {
    request(`${url}`, 'GET', (err, res, body) => {
      if (err) throw err;
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
    });
    done();
  });

  it('test /cart page with id 14', (done) => {
    request(`${url}/cart/14`, 'GET', (err, res, body) => {
      if (err) throw err;
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 14');
    });
    done();
  });

  it('test /cart page with id 1', (done) => {
    request(`${url}/cart/1`, 'GET', (err, res, body) => {
      if (err) throw err;
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 1');
    });
    done();
  });

  it('test /cart page with id 550', (done) => {
    request(`${url}/cart/550`, 'GET', (err, res, body) => {
      if (err) throw err;
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 550');
    });
    done();
  });

  it('test /cart page with id r1L37', (done) => {
    request(`${url}/cart/r1L37`, 'GET', (err, res) => {
      if (err) throw err;
      expect(res.statusCode).to.equal(404);
    });
    done();
  });

  it('test /cart page with id maximus', (done) => {
    request(`${url}/cart/maximus`, 'GET', (err, res) => {
      if (err) throw err;
      expect(res.statusCode).to.equal(404);
    });
    done();
  });
});
