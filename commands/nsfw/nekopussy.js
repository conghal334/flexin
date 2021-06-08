const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
  name: "nekopussy",
  aliases: ["np", "catpussy", "nekopuss", "lonmeo"],
  description: "Ngắm lồn mèo",
  run: async (client, message, args) => {
  const image = await nsfw.nekopussy();
  const embed = new Discord.MessageEmbed()
    .setTitle(`Ảnh L*n Mèo`)
    .setColor("GREEN")
    .setImage(image);
    message.channel.send(embed);
  }
}  