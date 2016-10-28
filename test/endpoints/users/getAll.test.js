import consts from '../utils/consts';

describe('Users', function () {
  describe('getAll', function () {

    it('Get all users', function () {
      chai.
        request(consts.SERVER).
        get('/api/users').
        end(function (err, res) {
          expect(err).to.be.falsy;
          expect(res).to.have.status(200);
          expect(res).to.have.property('body').to.be.an('array');

          res.body.forEach(function (user) {
            expect(user).to.be.an('object');
            expect(user).to.have.property('_id').to.be.a('string');
            expect(user).to.have.property('name').to.be.a('string');
            expect(user).to.have.property('email').to.be.a('string');
          });
        });
    });

  });
});
