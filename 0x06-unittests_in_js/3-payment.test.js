const chai = require('chai');
const sinon = require('sinon');
const utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment.js');

const expect = chai.expect;

describe('Test sendPaymentToApi function', () => {
  it('Validate the use of utils in sendPaymentToApi', () => {
    const spy = sinon.spy(utils, 'calculateNumber');
    const paymentPayload = sendPaymentRequestToApi(100, 20);

    expect(spy.calledOnceWithExactly('SUM', 100, 20)).to.equal(true);
    expect(utils.calculateNumber('SUM', 100, 20)).to.equal(paymentPayload);

    spy.restore();
  });
});
