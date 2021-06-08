const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
  name: "kitsune",
  aliases: ["kn"],
  description: "Ngắm kitsune",
  run: async (client, message, args) => {
  const image = await nsfw.kitsune();
  const embed = new Discord.MessageEmbed()
    .setTitle(`Ảnh Kitsune`)
    .setColor("GREEN")
    .setImage(image);
    message.channel.send(embed);
  }
}  