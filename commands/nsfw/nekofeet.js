const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
  name: "nekofeet",
  aliases: ["catfeet", "nekof", "catfoot", "nf"],
  description: "Ngắm chân mèo",
  run: async (client, message, args) => {
  const image = await nsfw.nekofeet();
  const embed = new Discord.MessageEmbed()
    .setTitle(`Ảnh Chân Mèo`)
    .setColor("GREEN")
    .setImage(image);
    message.channel.send(embed);
  }
}  