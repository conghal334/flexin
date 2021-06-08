const { MessageEmbed } = require("discord.js")
const { COLOR } = require("../../config.json");

module.exports = {
  name: "jump",
  aliases: [""],
  description: "Nhày tới bạn muốn",
  run: async (client, message, args) => {
    
     let embed = new MessageEmbed()
.setColor(COLOR);

    const { channel } = message.member.voice;
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      embed.setAuthor("Bạn phải ở trong kênh âm thoại :/")
      return message.channel.send(embed);
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      embed.setAuthor("Không có gì phát để có thể nhảy bài")
      return message.channel.send(embed);
    }
     if(!args[0]) {
      embed.setAuthor(`Hãy đưa ra thứ tự bài`)
      return message.channel.send(embed)
    }
    
      if(isNaN(args[0])) {
      embed.setAuthor("Hãy dùng giá trị số")
      return message.channel.send(embed)
    }
    
    
  if(serverQueue.songs.length < parseInt(args[0])) {
    embed.setAuthor("Không thể tìm thấy trong hàng chờ")
    return message.channel.send(embed)  
  }
    serverQueue.songs.splice(Math.floor(parseInt(args[0]) - 1), 1)
    serverQueue.connection.dispatcher.end()
    
    embed.setDescription(`Đã nhảy tới bài số - ${args[0]}`)
    message.channel.send(embed)
    
  }
}