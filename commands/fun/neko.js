const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const random = require("something-random-on-discord").Random

module.exports = {
  name: "neko",
  aliases: ["cat", "mèo", "dog"],
  description: "Gửi ảnh mèo!",
  usage: "<prefix>cat",
  category: "fun",
  run: async (client, message, args) => {
    message.delete();
    let data = await random.getNeko()
    message.channel.send(data)
  }
};