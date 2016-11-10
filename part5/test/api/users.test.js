const SERVER = 'http://127.0.0.1:5000';

describe('Users', function () {

  describe('GET /api/users', function () {

    it('Data is normalized', function () {
      return chai.
        request(SERVER).
        get('/api/users').
        then(function (response) {

          expect(response).to.have.status(200);

          const body = response.body;

          expect(body).to.be.an('array');

          body.forEach(function (user) {
            expect(user).to.be.an('object');
            expect(user).to.have.property('id').to.be.a('string');
            expect(user).to.have.property('name').to.be.a('string');
            expect(user).to.have.property('email').to.be.a('string');
            expect(user).to.have.property('age').to.be.a('number');
          });
        });
    });

  });

  describe('GET /api/users/:id', function () {

    it('Get normal user', function () {
      return chai.
        request(SERVER).
        get('/api/users/001').
        then(function (response) {
          expect(response).to.have.status(200);

          const body = response.body;

          expect(body).to.be.an('object');
          expect(body).to.have.property('id').to.be.an('string');
          expect(body).to.have.property('name').to.be.an('string');
          expect(body).to.have.property('email').to.be.an('string');
          expect(body).to.have.property('age').to.be.an('number');
        });
    });

    it('Get user data filtered', function () {
      return chai.
        request(SERVER).
        get('/api/users/001?filter=true').
        then(function (response) {
          expect(response).to.have.status(200);

          const body = response.body;

          expect(body).to.be.an('object');
          expect(body).to.eql({ name: 'Pepe' });
        });
    });

  });

  describe('PUT /api/users/:id', function () {

    it('Update normal user', function () {
      return chai.
        request(SERVER).
        put('/api/users/001').
        send({ name: 'Pepito', age: 150 }).
        then(function (response) {

          expect(response).to.have.status(200);

          const body = response.body;

          expect(body).
            to.be.an('object').
            to.have.property('success', true);
        });
    });

    it('Error updating user data', function () {
      return chai.
        request(SERVER).
        put('/api/users/5147a5sf4a7fsdfg4').
        send({ name: 'Pepito', age: 150 }).
        then(function (response) {
          expect(response).to.have.status(400);
        }).
        catch(function (error) {
          expect(error).to.have.status(400);
        });
    });

  });

});
