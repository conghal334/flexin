const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
  name: "thigh",
  aliases: ["dui"],
  description: "Ngắm đùi",
  run: async (client, message, args) => {
  const image = await nsfw.thigh();
  const embed = new Discord.MessageEmbed()
    .setTitle(`Ảnh Đùi`)
    .setColor("GREEN")
    .setImage(image);
    message.channel.send(embed);
  }
}  