const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new TweetSchema object
const BossSchema = new Schema({
  bossName: {
    type: String,
    required: "You must include a name"
  },
  area: {
    type: String,
  },
  reward: {
    type: Number,
  },
  assigned: {
    type: Schema.Types.ObjectId,
    ref: "user"
  }
});

// This creates our model from the above schema, using Mongoose's model method
var Boss = mongoose.model('Boss', BossSchema);

// Export the Tweet model
module.exports = Boss;