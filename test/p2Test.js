const chai = require('chai');
const assert = chai.assert;    // Using Assert style
const expect = chai.expect;    // Using Expect style
const should = chai.should();  // Using Should style
const chaiHttp = require('chai-http');

const server = require('../index');
chai.use(chaiHttp);




describe('Test du programme P2 (fonction dateDifference)', function () {
    it('fails as expected if its not in YYYY-MM-DD Format for the first parameter', function(done) { 
        chai.request('http://localhost:4242')
        .get('/api/p2/cell')
        .then((res) => {
            res.should.have.status(504);
            done();
        })
        .catch((err) => {
            throw err;
        })
     });

     it('fails as expected if its not in YYYY-MM-DD Format for the second parameter', function(done) { 
        chai.request('http://localhost:4242')
        .get('/api/p2/2019-12-08/pok')
        .then((res) => {
            res.should.have.status(505);
            done();
        })
        .catch((err) => {
            throw err;
        })
     });
})