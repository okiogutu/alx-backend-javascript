const chai = require('chai');
const request = require('request');

const expect = chai.expect;

const baseUrl = 'http://localhost:7865';

describe('test API response', () => {
  it('test /index page', (done) => {
    request(`${baseUrl}`, 'GET', (err, res, body) => {
      if (err) throw err;
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
    });
    done();
  });

  it('test /cart page with id 14', (done) => {
    request(`${baseUrl}/cart/14`, 'GET', (err, res, body) => {
      if (err) throw err;
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 14');
    });
    done();
  });

  it('test /cart page with id 1', (done) => {
    request(`${baseUrl}/cart/1`, 'GET', (err, res, body) => {
      if (err) throw err;
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 1');
    });
    done();
  });

  it('test /cart page with id 550', (done) => {
    request(`${baseUrl}/cart/550`, 'GET', (err, res, body) => {
      if (err) throw err;
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 550');
    });
    done();
  });

  it('test /cart page with id r1L37', (done) => {
    request(`${baseUrl}/cart/r1L37`, 'GET', (err, res) => {
      if (err) throw err;
      expect(res.statusCode).to.equal(404);
    });
    done();
  });

  it('test /cart page with id maximus', (done) => {
    request(`${baseUrl}/cart/maximus`, 'GET', (err, res) => {
      if (err) throw err;
      expect(res.statusCode).to.equal(404);
    });
    done();
  });

  it('test /login page with body', (done) => {
    let payload = {
      url: `${baseUrl}/login`,
      method: 'POST',
      json: {
        userName: 'Jamie',
      },
    };
    request(payload, (err, res, body) => {
      if (err) throw err;
      expect(res.statusCode).to.equal(200);
      expect(body).to.be.equal('Welcome Jamie');
    });
    done();
  });

  it('test /login page with empty body', (done) => {
    let payload = {
      url: `${baseUrl}/login`,
      method: 'POST',
    };
    request(payload, (err, res, body) => {
      if (err) throw err;
      expect(res.statusCode).to.equal(200);
      expect(body).to.be.equal('Welcome undefined');
    });
    done();
  });

  it('test /available_payments response', (done) => {
    let payload = {
      url: `${baseUrl}/available_payments`,
      method: 'GET',
    };
    request(payload, (err, res, body) => {
      if (err) throw err;
      expect(res.statusCode).to.equal(200);
      expect(body).to.be.equal(
        '{"payment_methods":{"credit_cards":true,"paypal":false}}',
      );
    });
    done();
  });
});
