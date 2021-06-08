const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
  name: "hentai",
  aliases: ["h", "hent"],
  description: "Ngắm Ảnh Hentai",
  run: async (client, message, args) => {
  const image = await nsfw.hentai();
  const embed = new Discord.MessageEmbed()
    .setTitle(`Ảnh Hentai`)
    .setColor("GREEN")
    .setImage(image);
    message.channel.send(embed);
  }
}  