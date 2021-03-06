const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new TweetSchema object
const QuestSchema = new Schema({
  questName: {
    type: String,
    required: "You must include a name"
  },
  area: {
    type: String,
  },
  reward: {
    type: Number,
  },
});

// This creates our model from the above schema, using Mongoose's model method
var Quests = mongoose.model('Quest',QuestSchema);

// Export the Tweet model
module.exports = Quests;