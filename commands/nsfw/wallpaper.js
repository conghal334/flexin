const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
  name: "wallpaper",
  aliases: ["pwp", "pornwallper"],
  description: "HÌnh nền Anime, v.v..",
  run: async (client, message, args) => {
  const image = await nsfw.wallpaper();
  const embed = new Discord.MessageEmbed()
    .setTitle(`Ảnh Nền`)
    .setColor("GREEN")
    .setImage(image);
    message.channel.send(embed);
  }
}  