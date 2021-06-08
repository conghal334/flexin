const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
  name: "anal",
  aliases: [""],
  description: "Ngắm hậu môn",
  run: async (client, message, args) => {
  const image = await nsfw.anal();
  const embed = new Discord.MessageEmbed()
    .setTitle(`Ảnh Hậu Môn`)
    .setColor("GREEN")
    .setImage(image);
    message.channel.send(embed);
  }
}  