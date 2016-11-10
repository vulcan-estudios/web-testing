const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  name: String,
  email: String,
  weight: Number,
  height: Number
});

Schema.methods.isEmailGmail = function () {
  const email = this.email;
  const re = (/\@gmail\.com/);
  return !!re.test(email);
};

Schema.methods.getBMI = function () {

  const weight = this.weight;
  const height = this.height;

  if (typeof weight === 'number' && typeof height === 'number') {
    return weight / (height * height);
  }

  return null;
};

const Model = mongoose.model('users', Schema);

module.exports = Model;
