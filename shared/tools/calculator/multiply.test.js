import { multiply } from './index';

describe('Calculator', function () {
  describe('Multiply', function () {

    it('No parameters', function () {
      const actual = multiply();
      const expected = 0;
      expect(actual).to.equal(expected);
    });

    it('One parameter', function () {
      const actual = multiply(5);
      const expected = 0;
      expect(actual).to.equal(expected);
    });

    it('Two parameters', function () {
      const actual = multiply(7, 4);
      const expected = 28;
      expect(actual).to.equal(expected);
    });

    it('One negative value', function () {
      const actual = multiply(2, -8);
      const expected = -16;
      expect(actual).to.equal(expected);
    });

    it('Negative values', function () {
      const actual = multiply(-9, -2);
      const expected = 18;
      expect(actual).to.equal(expected);
    });

  });
});
