const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
  name: "gonewild",
  aliases: [""],
  description: "Ngắm sex tự nhiên",
  run: async (client, message, args) => {
  const image = await nsfw.gonewild();
  const embed = new Discord.MessageEmbed()
    .setTitle(`Ảnh Sex Nguyên Zin`)
    .setColor("GREEN")
    .setImage(image);
    message.channel.send(embed);
  }
}  