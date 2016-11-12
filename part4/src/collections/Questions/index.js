const _ = require('underscore');
const Backbone = require('backbone');
const Question = require('../../models/Question');

const Collection = Backbone.Collection.extend({
  model: Question
});

module.exports = Collection;
