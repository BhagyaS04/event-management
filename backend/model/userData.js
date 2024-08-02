
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name : String,
  email : String,
  phoneNumber : String,
  password : String,
  blocked : { type: Boolean, default: false },
  wantMail : { type: Boolean, default: false }

});

const userData = mongoose.model('User', userSchema);
module.exports = userData;