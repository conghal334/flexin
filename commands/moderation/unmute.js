const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "unmute",
  aliases: ['bocam'],
  description: "Unmute 1 Người Dùng!",
  usage: "Unmute <Mention User>",
  run: async (client, message, args) => {
    //Start
    message.delete();

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);

    if (!Member) return message.channel.send(`Hãy Mention Một User!`);

    let Role = message.guild.roles.cache.find(role => role.name === "Muted").id;

    if (!Role)
      return message.channel.send(
        `Không Có Mute Role Hoặc Nó Không Bị Mute!`
      );

    if (!Member.roles.cache.has(Role)) {
      return message.channel.send(`Thành Viên Đang Được Unmute!`);
    }

    let Embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Đã Unmute Thnahf Viên!`)
      .addField(`Moderator`, `${message.author.tag} (${message.author.id}`)
      .addField(`Đã Unmuter`, `${Member.user.tag} (${Member.user.id})`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    if (Role && Member.roles.cache.has(Role)) {
      Member.roles.remove([Role]);
      return message.channel.send(Embed);
    } else {
      return message.channel.send(`Lỗi, Thử Lại!`);
    }

    //End
  }
};