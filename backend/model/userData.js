const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  phoneNumber: { type: String },
  password: { type: String }
});

const userData = mongoose.model('User', userSchema);
module.exports = userData;
