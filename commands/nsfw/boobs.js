const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
  name: "boobs",
  aliases: ["vu", "bbs", "bb"],
  description: "Ngắm vú",
  run: async (client, message, args) => {
  const image = await nsfw.boobs();
  const embed = new Discord.MessageEmbed()
    .setTitle(`Ảnh Vú`)
    .setColor("GREEN")
    .setImage(image);
    message.channel.send(embed);
  }
}  