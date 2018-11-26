const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new TweetSchema object
const GuildSchema = new Schema({
  content: {
    type: String,
    required: "You must include some content in your note"
  }
});

// This creates our model from the above schema, using Mongoose's model method
var Guild = mongoose.model('Guild', GuildSchema);

// Export the Tweet model
module.exports = Guild;