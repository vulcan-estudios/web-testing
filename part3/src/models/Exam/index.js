const _ = require('underscore');
const Backbone = require('backbone');
const Questions = require('../../collections/Questions');

const Model = Backbone.Model.extend({

  defaults: {
    id: null,
    name: '',
    questions: null
  },

  isCorrect: function () {

    const questions = this.get('questions');

    if (questions instanceof Questions) {
      return questions.every(function (question) {
        return question.get('correct');
      });
    }

    return null;
  }
});

module.exports = Model;
