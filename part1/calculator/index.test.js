const chai = require('chai');
const calculator = require('./index');

const expect = chai.expect;

describe('Calculator', function () {

  describe('sum()', function () {

    it('Suma valores positivos', function () {
      const actual = calculator.sum(5, 7);
      const expected = 12;
      expect(actual).to.equal(expected);
    });

    it('Suma ceros', function () {
      const actual = calculator.sum(0, 0);
      const expected = 0;
      expect(actual).to.equal(expected);
    });

    it('Suma valores negativos y positivos', function () {
      const actual = calculator.sum(5, -7);
      const expected = -2;
      expect(actual).to.equal(expected);
    });

    it('Suma valores negativos', function () {
      const actual = calculator.sum(-5, -7);
      const expected = -12;
      expect(actual).to.equal(expected);
    });

    it('Recibe un solo párametro', function () {
      const actual = calculator.sum(5);
      const expected = 5;
      expect(actual).to.equal(expected);
    });

    it('No recibe parámetros', function () {
      const actual = calculator.sum();
      const expected = 0;
      expect(actual).to.equal(expected);
    });

    it('Llegan parámetros diferentes a números', function () {
      const actual = calculator.sum(true, {});
      const expected = 0;
      expect(actual).to.equal(expected);
    });

  });

});
