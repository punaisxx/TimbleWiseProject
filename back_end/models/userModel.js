const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    address: String,
    phone_number: String,
    username: String,
    password: String,
    status: String,
    transactions: [Object],
    cart: [Object]
  });

module.exports = mongoose.model('user_data',userSchema);