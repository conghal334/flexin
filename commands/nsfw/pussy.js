const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
  name: "pussy",
  aliases: ["lon", "pussi", "puss"],
  description: "Ngắm loèn/âm đạo",
  run: async (client, message, args) => {
  const image = await nsfw.pussy();
  const embed = new Discord.MessageEmbed()
    .setTitle(`Ảnh Lồn`)
    .setColor("GREEN")
    .setImage(image);
    message.channel.send(embed);
  }
}  