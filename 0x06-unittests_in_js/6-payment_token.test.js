const chai = require('chai');
const getTokenFromApi = require('./6-payment_token');

const expect = chai.expect;
describe('Get payment token from API test', () => {
  it('test getPaymentTokenFromApi ', (done) => {
    getTokenFromApi(true)
      .then((res) => {
        expect(res).to.eql({ data: 'Successful response from the API' });
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});
