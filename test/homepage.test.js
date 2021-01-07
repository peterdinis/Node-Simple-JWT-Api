const homeRoutes = require('../routes/homeRoutes');
const chaiHttp = require('chai-http');
const chai = require('chai');

chai.should();
chai.use(chaiHttp);

describe('Return HomePage', () => {
    it('Return HomePage routes correctly', (done) => {
        chai.request(homeRoutes)
        .get('/')
        .end((res) => {
            res.should.have.status(200);
        })
        done();
    })
})
