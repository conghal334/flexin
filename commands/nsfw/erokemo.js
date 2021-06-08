const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
  name: "erokemo",
  aliases: [""],
  description: "Ngắm Gái Lai Cáo",
  run: async (client, message, args) => {
  const image = await nsfw.erokemo();
  const embed = new Discord.MessageEmbed()
    .setTitle(`Ảnh Erokemo`)
    .setColor("GREEN")
    .setImage(image);
    message.channel.send(embed);
  }
}  