const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
  name: "ass",
  aliases: ["dit"],
  description: "Ngắm mông/đít",
  run: async (client, message, args) => {
  const image = await nsfw.ass();
  const embed = new Discord.MessageEmbed()
    .setTitle(`Ảnh Mông`)
    .setColor("GREEN")
    .setImage(image);
    message.channel.send(embed);
  }
}  