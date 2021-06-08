const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const random = require("something-random-on-discord").Random

module.exports = {
  name: "fact",
  aliases: ["facts"],
  description: "Một sự thật bất ngờ!",
  usage: "<prefix>fact",
  category: "fun",
  run: async (client, message, args) => {
    message.delete();
    let data = await random.getFact();
    message.channel.send(data);
  } 
};   