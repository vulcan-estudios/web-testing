const expect = require('chai').expect;
const User = require('./index');

describe('Models', function () {
  describe('User', function () {

    describe('isEmailGmail()', function () {

      it('The email is gmail', function () {
        const model = new User({
          name: 'María',
          email: 'maria@gmail.com'
        });
        const actual = model.isEmailGmail();
        expect(actual).to.be.true;
      });

      it('The email is NOT gmail', function () {
        const model = new User({
          name: 'María',
          email: 'maria@outlook.com'
        });
        const actual = model.isEmailGmail();
        expect(actual).to.be.false;
      });

      it('Email is not defined', function () {
        const model = new User({
          name: 'María'
        });
        const actual = model.isEmailGmail();
        expect(actual).to.be.false;
      });

      it('Email is not a valid email', function () {
        const model = new User({
          name: 'María',
          email: 'jhfdgnajnfjndf'
        });
        const actual = model.isEmailGmail();
        expect(actual).to.be.false;
      });

      it('Email is not a string', function () {
        const model = new User({
          name: 'María',
          email: 1000
        });
        const actual = model.isEmailGmail();
        expect(actual).to.be.false;
      });

    });

    describe('getBMI()', function () {

      it('Get a normal BMI (part1)', function () {
        const model = new User({
          weight: 62,
          height: 1.71
        });
        const actual = model.getBMI();
        expect(actual).to.be.a('number', 21.20);
      });

      it('Get a normal BMI (part2)', function () {
        const model = new User({
          weight: 70,
          height: 1.8
        });
        const actual = model.getBMI();
        expect(actual).to.be.a('number', 21.60);
      });

      it('User does not have enough data (part1)', function () {
        const model = new User({
          weight: 70
        });
        const actual = model.getBMI();
        expect(actual).to.be.null;
      });

      it('User does not have enough data (part2)', function () {
        const model = new User({
          height: 1.71
        });
        const actual = model.getBMI();
        expect(actual).to.be.null;
      });

      it('User does not have enough data (part3)', function () {
        const model = new User({});
        const actual = model.getBMI();
        expect(actual).to.be.null;
      });

    });

  });
});
