const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
  name: "showban",
  aliases: ["sbn"],
  description: "Hiển thị thành viên đã bị ban!!",
  run: async (client, message, args) => {
    if(!message.member.permissions.has("BAN_MEMBERS")) return;
    
    const fetchBans = message.guild.fetchBans();
    const bannedMembers = (await fetchBans).map((member) => `\`${member.user.tag}\``).join(" ");

    message.channel.send(bannedMembers);
  }
};