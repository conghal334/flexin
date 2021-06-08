const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
  name: "hentaiass",
  aliases: ["hentass", "hass"],
  description: "Ngắm mông/đít hentai",
  run: async (client, message, args) => {
  const image = await nsfw.hentaiass();
  const embed = new Discord.MessageEmbed()
    .setTitle(`Ảnh Mông Hentai`)
    .setColor("GREEN")
    .setImage(image);
    message.channel.send(embed);
  }
}  