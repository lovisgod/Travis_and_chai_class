const expect = require('chai').expect
const server = require('./api');
const post = require('request')
const get = require('request')

describe('test', () => {
  const body = {};
  before((done) => {
    get('http://localhost:3000/user', (error, res) =>{
      body.response = res.body;
      done();
    })
  })
  it('should return a string', () => {
    expect(body.response).to.equal('ci with travis');
  });
});
