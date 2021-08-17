const chai = require('chai');
const chaiHttp = require('chai-http');

const expect = chai.expect;
chai.use(chaiHttp);

const server = require('../app');

describe('Get numbers: ', ()=>{
    it('should get numbers', (done)=>{
        chai.request(server)
        .get('/musicalNumbers')
        .end(function(err,res){
            console.log(res.body);
            expect(res).to.have.status(200);
            done();
        });
    });
})