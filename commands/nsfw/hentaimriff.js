const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
  name: "hentaimdriff",
  aliases: ["midriff", "hmidriff", "mdf", "midr"],
  description: "Ngắm Hentai quần áo lót",
  run: async (client, message, args) => {
  const image = await nsfw.hmidriff();
  const embed = new Discord.MessageEmbed()
    .setTitle(`Ảnh Hentai Midriff`)
    .setColor("GREEN")
    .setImage(image);
    message.channel.send(embed);
  }
}  