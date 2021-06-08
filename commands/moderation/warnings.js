const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "warnings",
  aliases: ['cc'],
  description: "Hiển Thị Warings!",
  usage: "Warnings <Mention User>",
  run: async (client, message, args) => {
    //Start
    message.delete();

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);

    if (!Member) return message.channel.send(`Hãy Đưa Ra Một Mention!`);

    let Warnings = client.db.get(
      `Warnings_${message.guild.id}_${Member.user.id}`
    );

    let embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Số Lần Bị Warn!`)
      .setDescription(`${Member.user.username} Có ${Warnings || "0"} Đã Warn!`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};