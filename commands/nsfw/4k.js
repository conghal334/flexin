const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
  name: "4k",
  aliases: ["bonk", "fourk"],
  description: "Ngắm ảnh cực nét",
  run: async (client, message, args) => {
  const image = await nsfw.fourk();
  const embed = new Discord.MessageEmbed()
    .setTitle(`Ảnh Sắc Nét 4K`)
    .setColor("GREEN")
    .setImage(image);
    message.channel.send(embed);
  }
}  