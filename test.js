const expect = require('chai').expect
const server = require('./api');

describe('test', () => {
  it('should return a string', () => {
    expect('ci with travis').to.equal('ci with travis');
  });
});

describe('test/ayo',() => {
    it('should return a string', () => {
        expect('Ayo is a good man').to.equal('Ayo is a good boy');
    });
});