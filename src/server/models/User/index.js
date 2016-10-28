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

export default mongoose.model('users', UserSchema);
