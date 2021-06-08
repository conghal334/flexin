const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const random = require("something-random-on-discord").Random

module.exports = {
  name: "advice",
  aliases: ["advices"],
  description: "Một lời khuyên!",
  usage: "Fadvice",
  category: "fun",
  run: async (client, message, args) => {
    let data = await random.getAdvice()
    message.channel.send(data)
  }
}  