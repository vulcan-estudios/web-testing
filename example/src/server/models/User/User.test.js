import User from './index';

describe('Models', function () {
  describe('User', function () {

    describe('isEmailGmail()', function () {

      it('Gmail mail', function () {
        const user = new User({ name: 'Name', email: 'name@gmail.com' });
        const actual = user.isEmailGmail();
        const expected = true;
        expect(actual).to.equal(expected);
      });

      it('Outlook mail', function () {
        const user = new User({ name: 'Name', email: 'name@outlook.com' });
        const actual = user.isEmailGmail();
        const expected = false;
        expect(actual).to.equal(expected);
      });
    });

    describe('isPwdStrong()', function () {

      it('Strong password', function () {
        const user = new User({ name: 'Name', pwd: '1a2s4da784gs4dg5fd' });
        const actual = user.isPwdStrong();
        const expected = true;
        expect(actual).to.equal(expected);
      });

      it('Weak password', function () {
        const user = new User({ name: 'Name', pwd: 'isweakpass' });
        const actual = user.isPwdStrong();
        const expected = false;
        expect(actual).to.equal(expected);
      });
    });

  });
});
