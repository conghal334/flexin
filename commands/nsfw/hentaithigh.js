const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
  name: "hentaithigh",
  aliases: ["hentthigh", "hthigh"],
  description: "Ngắm đùi hentai",
  run: async (client, message, args) => {
  const image = await nsfw.hentaithigh();
  const embed = new Discord.MessageEmbed()
    .setTitle(`Ảnh Đùi Hentai`)
    .setColor("GREEN")
    .setImage(image);
    message.channel.send(embed);
  }
}  