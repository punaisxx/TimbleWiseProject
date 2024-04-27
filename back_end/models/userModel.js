const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String
  });

module.exports = mongoose.model('user_data',userSchema);