import consts from '../utils/consts';

describe('Users', function () {
  describe('get', function () {

    it('Get one user', function (done) {
      chai.
        request(consts.SERVER).
        get('/api/users/' + consts.USER.ID).
        end(function (err, res) {
          expect(err).to.be.falsy;
          expect(res).to.have.status(200);
          expect(res).to.have.property('body').to.be.an('object');
          expect(res.body).to.have.property('_id').to.be.a('string');
          expect(res.body).to.have.property('name').to.be.a('string');
          expect(res.body).to.have.property('email').to.be.a('string');
          done();
        });
    });

  });
});
