const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");
const db = require('discord.js')

module.exports = {
  name: "warn",
  aliases: [""],
  description: "Cảnh cáo một tài khoản!",
  usage: "warn <Mention User> | <Lý Do>",
  run: async (client, message, args) => {
    //Start
    message.delete();

    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("Bạn phải có quyền ADMIN để thực hiện!")
    }

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);

    if (!Member) return message.channel.send(`Hãy mention một tài khoản!`);

    let Reason = args.slice(1).join(" ");

    client.db.add(`Warnings_${message.guild.id}_${Member.user.id}`, 1);

    let Warnings = client.db.get(
      `Warnings_${message.guild.id}_${Member.user.id}`
    );

    let embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Đã Cảnh Cáo!`)
      .addField(`Quản Trị`, `${message.author.tag} (${message.author.id}`)
      .addField(`Đã Cảnh Cáo`, `${Member.user.tag} (${Member.user.id})`)
      .addField(`Số Cảnh Cáo`, Warnings)
      .addField(`Lí Do`, `${Reason || "Không cung cấp lí do!"}`)
      .setFooter(`Đề nghị bởi ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};