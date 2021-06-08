const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const random = require("something-random-on-discord").Random
const { npms } = require("../../npm.json");

module.exports = {
  name: "npm",
  aliases: ["NPM", "getnpm"],
  description: "Thông tin về npm!",
  usage: "<prefix>npm",
  category: "info",
  run: async (client, message, args) => {
    message.delete();
    let data = await random.getNPM(npms);
    message.channel.send(data);
  }
};  