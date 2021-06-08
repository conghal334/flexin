const { Client, Message, MessageEmbed } = require("discord.js");
const Schema = require('../../chatbot/chatbot-channel2.js');

module.exports = {
  name: "set-channel",
  aliases: [""],
  run: async (client, message, args) => {
    if(!message.member.permissions.has('ADMINISTRATOR')) return;
    const channel = message.mentions.channels.first() || message.channel;
    Schema.findOne({ Guild: message.guild.id }, async(err, data) => {
      if(data) data.delete();
      new Schema({
        Guild: message.guild.id,
        Channel: channel.id,
      }).save();
      message.channel.send(`Đã lưu kênh chat-bot ${channel}`);
    });
  },
}