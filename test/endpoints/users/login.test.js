import consts from '../utils/consts';

describe('Users', function () {
  describe('Login', function () {

    it('Success', function (done) {
      chai.
        request(consts.SERVER).
        post('/api/login').
        send({
          email: consts.USER.EMAIL,
          pwd: consts.USER.PWD
        }).
        end(function (err, res) {
          expect(err).to.be.falsy;
          expect(res).to.have.status(200);
          expect(res).to.have.cookie('sessionid');
          done();
        });
    });

    it('Error', function (done) {
      chai.
        request(consts.SERVER).
        post('/api/login').
        send({
          email: 'error@error.com',
          pwd: 'error-error'
        }).
        end(function (err, res) {
          expect(err).to.be.falsy;
          expect(res).to.have.property('status', 401);
          expect(res).to.have.property('body').to.be.an('object');
          expect(res).to.have.property('body').to.have.property('message').to.be.a('string');
          expect(res).to.not.have.cookie('sessionid');
          done();
        });
    });

  });
});
