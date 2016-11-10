const calculator = require('./index');

describe('Calculator', function () {
  describe('Sum', function () {

    it('Sum two positive numbers', function () {
      const actual = calculator.sum(5, 7);
      const expected = 12;
      expect(actual).to.equal(expected);
    });

    it('Sum a positive and a nevative number', function () {
      const actual = calculator.sum(-5, 7);
      const expected = 2;
      expect(actual).to.equal(expected);
    });

    it('Sum without parameters', function () {
      const actual = calculator.sum();
      const expected = 0;
      expect(actual).to.equal(expected);
    });

  });
});
