const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const random = require("something-random-on-discord").Random

module.exports = {
  name: "meme",
  aliases: ["memes"],
  description: "Send A Meme!",
  usage: "Meme",
  category: "fun",
  run: async (client, message, args) => {
    //Start
    message.delete();
    let data = await random.getMeme()
    message.channel.send(data)

    //End
  }
};