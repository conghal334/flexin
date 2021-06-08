const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
  name: "lewd",
  aliases: ["l", "dam"],
  description: "Ngắm ảnh dâm đãng",
  run: async (client, message, args) => {
  const image = await nsfw.lewd();
  const embed = new Discord.MessageEmbed()
    .setTitle(`Ảnh Dâm Đãng`)
    .setColor("GREEN")
    .setImage(image);
    message.channel.send(embed);
  }
}  