const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "clear",
  aliases: ["purge", "clearmsgs"],
  description: "Clear Your Messages!",
  usage: "Clear <Message Amount>",
  run: async (client, message, args) => {
    //Start
    message.delete();
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        "Bạn Ko Có QUyền!"
      );

    if (!args[0])
      return message.channel.send(`Hãy Đưa Ra Con Số!`);

    if (isNaN(args[0]))
      return message.channel.send(`Hãy đưau ra một giá trị!`);

    if (args[0] < 2)
      return message.channel.send(
        `You Có Thể Xóa ${args[0]} Bởi Your Self Nó Không Quá Nhiều Tin Nhắn!`
      );

    if (args[0] > 100)
      return message.channel.send(
        `Tôi Không Thể ${args[0]} Vì Giới Hạn Của Discord!`
      );

    let Reason = args.slice(1).join(" ") || "Không Có Lí Do!";

    message.channel.bulkDelete(args[0]).then(Message => {
      let embed = new Discord.MessageEmbed()
        .setColor(Color)
        .setTitle(`Đã xóa!`)
        .addField(`Moderator`, `${message.author.tag} (${message.author.id}`)
        .addField(`Kênh`, `${message.channel.name} (${message.channel.id}`)
        .addField(`Tin Nhắn Xóa`, `${Message.size}`)
        .addField(`Lí Do`, `${Reason}`)
        .setFooter(`Requested by ${message.author.username}`)
        .setTimestamp();
      return message.channel
        .send(embed)
        .then(msg => msg.delete({ timeout: 10000 }));
    });

    //End
  }
};