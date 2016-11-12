const Exam = require('./index');
const Questions = require('../../collections/Questions');

describe('Models', function () {
  describe('Exam', function () {
    describe('isCorrect()', function () {

      it('The exam is correct', function () {
        const questions = new Questions([
          {
            id: '101',
            text: 'Bla bla bla 1',
            correct: true
          }, {
            id: '102',
            text: 'Bla bla bla 2',
            correct: true
          }, {
            id: '103',
            text: 'Bla bla bla 3',
            correct: true
          }
        ]);
        const model = new Exam({
          id: '001',
          name: 'First Test',
          questions: questions
        });
        const actual = model.isCorrect();
        expect(actual).to.be.true;
      });

      it('The exam is incorrect', function () {
        const questions = new Questions([
          {
            id: '101',
            text: 'Bla bla bla 1',
            correct: true
          }, {
            id: '102',
            text: 'Bla bla bla 2',
            correct: false
          }, {
            id: '103',
            text: 'Bla bla bla 3',
            correct: true
          }
        ]);
        const model = new Exam({
          id: '001',
          name: 'First Test',
          questions: questions
        });
        const actual = model.isCorrect();
        expect(actual).to.be.false;
      });

      it('The exam does not have questions', function () {
        const model = new Exam({
          id: '001',
          name: 'First Test'
        });
        const actual = model.isCorrect();
        expect(actual).to.be.null;
      });

    });
  });
});
