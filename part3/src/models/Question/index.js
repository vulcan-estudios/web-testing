const _ = require('underscore');
const Backbone = require('backbone');

const Model = Backbone.Model.extend({
  defaults: {
    id: null,
    text: '',
    correct: false
  }
});

module.exports = Model;
