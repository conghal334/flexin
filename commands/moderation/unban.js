const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "unban",
  aliases: ['boban'],
  description: "Unban A Member!",
  usage: "Unban <Member ID>",
  run: async (client, message, args) => {
    //Start
    message.delete();
    if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.channel.send(
        `Bạn không có quyền để thực hiện!`
      );

    if (!args[0])
      return message.channel.send(
        `Hãy Đưa ID Để Unban!`
      );

    if (isNaN(args[0])) return message.channel.send(`Please Give Me Một Valid ID!`);

    if (args[0] === message.author.id)
      return message.channel.send(`Bạn Đã Được Unban!`);

    if (args[0] === message.guild.owner.user.id)
      return message.channel.send(`Server Owner Được Unban!`);

    if (args[0] === client.user.id)
      return message.channel.send(`Đang Unban Unban!`);

    let FetchBan = await message.guild.fetchBans();

    let Member;
    Member =
      FetchBan.find(
        b => b.user.username.toLowerCase() === args[0].toLocaleLowerCase()
      ) ||
      FetchBan.get(args[0]) ||
      FetchBan.find(
        bm => bm.user.tag.toLowerCase() === args[0].toLocaleLowerCase()
      );

    if (!Member)
      return message.channel.send(
        "ID Này Chưa Từng Bị Ban!"
      );

    let Reason = args.slice(1).join(" ") || "Không Có Lí Do!";

    try {
      message.guild.members.unban(Member.user.id, Reason);
    } catch (error) {
      return message.channel.send(
        `Tôi Không Thể Ban, Có Thể Có Lỗi Code!`
      );
    }

    let embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Đã Unban Member!`)
      .addField(`Moderator`, `${message.author.tag} (${message.author.id}}`)
      .addField(`Đã Unaban`, `${Member.user.tag} (${Member.user.id}`)
      .addField(`Reason`, `${Reason || "Không Có Lí Do!"}`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    return message.channel.send(embed);

    //End
  }
};