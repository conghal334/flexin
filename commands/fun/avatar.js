const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const config = require("../../config.js");
const db = require("quick.db");
const { Color } = require("../../config.js");

module.exports = {
  name: "avatar",
  aliases: ["pfp"],
  description: "Hiển thị Avatar thành viên!",
  usage: "Avatar | <Mention Member>",
  run: async (client, message, args) => {
    let prefix = await db.fetch(`prefix_${message.guild.id}`)
   if(prefix == null) {
    prefix =  config.Prefix
  }
    message.delete();
    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    let embed = new Discord.MessageEmbed()
      .setColor(Color)
      .addField(
        "Liên Kết",
        `[png](${Member.user.displayAvatarURL({
          format: "png",
          dynamic: true
        })}) | [jpg](${Member.user.displayAvatarURL({
          format: "jpg",
          dynamic: true
        })}) | [webp](${Member.user.displayAvatarURL({
          format: "webp",
          dynamic: true
        })})`
      )
      .setImage(Member.user.displayAvatarURL({ dynamic: true }))
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};