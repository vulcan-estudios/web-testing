import { sum } from './index';

describe('Calculator', function () {
  describe('Sum', function () {

    it('No parameters', function () {
      const actual = sum();
      const expected = 0;
      expect(actual).to.equal(expected);
    });

    it('One parameter', function () {
      const actual = sum(5);
      const expected = 5;
      expect(actual).to.equal(expected);
    });

    it('Two parameters', function () {
      const actual = sum(7, 4);
      const expected = 11;
      expect(actual).to.equal(expected);
    });

    it('One negative value', function () {
      const actual = sum(2, -8);
      const expected = -6;
      expect(actual).to.equal(expected);
    });

    it('Negative values', function () {
      const actual = sum(-9, -1);
      const expected = -10;
      expect(actual).to.equal(expected);
    });

  });
});
