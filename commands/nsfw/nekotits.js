const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
  name: "nekotits",
  aliases: ["nekoboobs", "catbbs", "catbb", "nekobbs", "nekobb"],
  description: "Ngắm vú mèo",
  run: async (client, message, args) => {
  const image = await nsfw.nekotits();
  const embed = new Discord.MessageEmbed()
    .setTitle(`Ảnh Vú Mèo`)
    .setColor("GREEN")
    .setImage(image);
    message.channel.send(embed);
  }
}  