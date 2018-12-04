const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new TweetSchema object
const GuildSchema = new Schema({
  guildname: {
    type: String,
    required: "You must have a Guild Name"
  },
  guildmaster: [
    {
      type: Schema.Types.ObjectId,
      ref: "user"
    },
    {
      type:Schema.Types.Username,
      ref:"user"
    },
  ],
  members:{
      type: Schema.Types.ObjectId,
      ref: "user"
  },
  quests: {
    type: Schema.Types.ObjectId,
    ref: "quest"
  },
  encounters: {
    type: Schema.Types.ObjectId,
    ref: "encounter"
  },
  bosses: {
      type: Schema.Types.ObjectId,
      ref: "boss"
  },
  shop: {
    type: Schema.Types.ObjectId,
    ref: "shop"
  }
});

// This creates our model from the above schema, using Mongoose's model method
var Guild = mongoose.model('Guild', GuildSchema);

// Export the Tweet model
module.exports = Guild;