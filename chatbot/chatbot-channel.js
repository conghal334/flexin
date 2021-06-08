const { Schema, model} = require("mongoose");

module.exports = model('chatbot-lyan', new Schema({
  GuildID: String,
  ChannelID: String,
  })
);