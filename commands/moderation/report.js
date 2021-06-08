const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "report",
  aliases: [""],
  usage: "<prefix>report <query>",
  run: async (client, message, args) => {
    const owner = client.users.cache.get('677918899471122472');

    const query = args.join(" ");
    if(!query) return message.channel.send('Vui lòng thêm câu hỏi');

    const reportEmbed = new MessageEmbed()
      .setTitle('BUG MỚI')
      .addField('Author', message.guild.toString(), true)
      .addField('Guild', message.guild.name, true)
      .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
      .addField('Báo Cáo', query)
      .setTimestamp();

    owner.send(reportEmbed);
  }
}