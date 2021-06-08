const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
  name: "pgif",
  aliases: ["porngif", "pg", "porng"],
  description: "Ngắm Pỏn GIF",
  run: async (client, message, args) => {
  const image = await nsfw.pgif();
  const embed = new Discord.MessageEmbed()
    .setTitle(`Sex Gif`)
    .setColor("GREEN")
    .setImage(image);
    message.channel.send(embed);
  }
}  