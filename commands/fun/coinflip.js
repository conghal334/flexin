const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "coinflip",
  aliases: ["toss", "flip"],
  description: "Lật xu!",
  usage: "Coinflip",
  run: async (client, message, args) => {
    //Start
    message.delete();
    const coins = ["Mặt Trên", "Mặt Dưới", "Hòa"];

    let result = Math.floor(Math.random() * coins.length);

    const embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Mặt xu là`)
      .setDescription(coins[result])
      .setFooter(`Được lật bởi ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};