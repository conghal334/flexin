const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");
const db = require('quick.db')

module.exports = {
  name: "mute",
  aliases: ['cam'],
  description: "Mute 1 Tài Khoản!",
  usage: "Mute <Mention User> | <Lí Do>",
  run: async (client, message, args) => {
    //Start
    message.delete();

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);

    if (!Member) return message.channel.send(`Please Mention Một User!`);

    let Role = message.guild.roles.cache.find(role => role.name === "Muted").id;

    if (!Role)
      return message.channel.send(
        `Hãy Tạo Muted Role | Role Name : Muted`
      );

    if (Member.roles.cache.has(Role)) {
      return message.channel.send(`Chuản Bị Mute!`);
    }

    let Reason = args.slice(1).join(" ");

    let Embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Đã Mute!`)
      .addField(`Moderator`, `${message.author.tag} (${message.author.id}`)
      .addField(`Đã Mute Thằng`, `${Member.user.tag} (${Member.user.id})`)
      .addField(`Reason`, `${Reason || "Không Có Lí Do!"}`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    if (Role && !Member.roles.cache.has(Role)) {
      Member.roles.add([Role]);
      return message.channel.send(Embed);
    } else {
      return message.channel.send(`Có Gì Đấy Sai Sai Bạn Ạ, Thử Lại!`);
    }

    //End
  }
};
