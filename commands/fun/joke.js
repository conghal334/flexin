const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const random = require("something-random-on-discord").Random

module.exports = {
  name: "joke",
  aliases: ["jokes"],
  description: "Một trò đùa!",
  usage: "Fjoke",
  category: "fun",
  run: async (client, message, args) => {
    message.delete();
    let data = await random.getJoke()
    message.channel.send(data)
  }
};  