const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "serverinfo",
  aliases: ["serverinformation"],
  description: "Show Server Information!",
  usage: "Serverinfo",
  run: async (client, message, args) => {
       if (message.author.bot || !message.guild) return message.reply("this command for server only")
    var EMBED = new Discord.MessageEmbed()
      .setTitle("Thông Tin Server-Server Info")
      .addField("Tên-Server Name 🎗️", `${message.guild.name}`)
      .addField("ID Server 🆔", `${message.guild.id}`)
      .addField("Chủ Server-Server Owner 👑", `${message.guild.owner}`)
      .addField("Số Thành Viên-Members 👥", `${message.guild.memberCount}`)
      .addField("Số Roles-Roles 🔐", `${message.guild.roles.cache.size}`)
      .addField("Số Kênh-Channels 💬", `  ${message.guild.channels.cache.filter(r => r.type === "text").size} Text
      ${message.guild.channels.cache.filter(r => r.type === "voice").size} Voice`)
      .addField("Vị Trí Server-Server Reigon 🌍", `${message.guild.region}`)
      .addField("Tạo Lúc-Created At 📆 ", `${message.guild.createdAt.toLocaleString()}`)
      .addField("Đã Boosts-Boosts ✨", `${message.guild.premiumSubscriptionCount}`)
      .setColor("BLUE")
      .setFooter(`Hỏi by ${message.author.username}`)
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
    message.channel.send(EMBED)
  }
}