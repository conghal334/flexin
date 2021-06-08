const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
  name: "solo",
  aliases: ["sl", "1vs1", "1v1", "11"],
  description: "Ngắm cặp đôi phang nhau",
  run: async (client, message, args) => {
  const image = await nsfw.solo();
  const embed = new Discord.MessageEmbed()
    .setTitle(`Ảnh Phang Nhau`)
    .setColor("GREEN")
    .setImage(image);
    message.channel.send(embed);
  }
}  