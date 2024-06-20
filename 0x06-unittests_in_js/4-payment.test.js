const chai = require('chai');
const sinon = require('sinon');
const utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment.js');

const expect = chai.expect;

describe('Test sendPaymentToApi function', () => {
  it('Validate the use of utils in sendPaymentToApi', () => {
    const stub = sinon.stub(utils, 'calculateNumber');
    stub.returns(10);

    const paymentPayload = sendPaymentRequestToApi(100, 20);
    const spy = sinon.spy(console, 'log');
    expect(spy.calledOnceWithExactly('The total is: 10'));
    expect(utils.calculateNumber('SUM', 100, 20)).to.equal(paymentPayload);

    stub.restore();
    spy.restore();
  });
});
