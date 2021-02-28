const chai = require('chai');
const assert = chai.assert;    // Using Assert style
const expect = chai.expect;    // Using Expect style
const should = chai.should();  // Using Should style
const chaiHttp = require('chai-http');

const server = require('../index');
chai.use(chaiHttp);

describe('Test du programme P1 (fonction noboDivision)', function() {

    it('fails as expected with one number > 20 for the second parameter', function(done) { 
        chai.request('http://localhost:4242')
        .get('/api/p1/boubou/31')
        .then((res) => {
            res.should.have.status(501);
            done();
        })
        .catch((err) => {
            throw err;
        })
     });

    it('works as espected with two parameters', function(done) { 
        chai.request('http://localhost:4242')
        .get('/api/p1/vegeta/5')
        .then((res) => {
            res.should.have.status(200);
            done();
        })
        .catch((err) => {
            throw err;
        })
    });

    
    
})