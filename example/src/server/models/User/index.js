import mongoose from 'mongoose';
import settings from 'server/settings';

if (!mongoose.connection.readyState) {
  mongoose.connect(settings.mongodb);
}

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  pwd: {
    type: String,
    required: true,
  },
});

UserSchema.methods.isEmailGmail = function () {
  return (/\@gmail\.com/).test(this.email);
};

UserSchema.methods.isPwdStrong = function () {
  const pwd = this.pwd ? String(this.pwd) : '';
  return pwd.length >= 8 && (/[a-zA-Z]/).test(pwd) && (/[0-9]/).test(pwd);
};

export default mongoose.model('users', UserSchema);
