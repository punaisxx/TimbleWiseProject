const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: String,
		name: String,
		description: String,
		catagory: String,
		price: Number,
		quantity: Number,
		image: String,
		quantity_sold: Number,
  });

module.exports = mongoose.model('product_data',userSchema);