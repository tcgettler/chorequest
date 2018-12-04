const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new TweetSchema object
const ShopSchema = new Schema({
  itemName: {
    type: String,
    required: "You must include a name"
  },
  cost: {
    type: Number,
  },
});

// This creates our model from the above schema, using Mongoose's model method
var Shop = mongoose.model('Shop', ShopSchema);

// Export the Tweet model
module.exports = Shop;