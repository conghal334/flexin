const { MessageEmbed } = require("discord.js")
const { COLOR } = require("../../config.json");

module.exports = {
  name: "loop",
  aliases: [""],
  description: "Loop Your Queue and have fun",
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
      embed.setAuthor("Không có bài gì để phát vòng lặp")
      return message.channel.send(embed);
    }
    
    //OOOOF
    serverQueue.loop = !serverQueue.loop;
    
    
    embed.setDescription(`Lạp lại đã **${serverQueue.loop ? "Bật" : "Tắt"}**`)
    embed.setThumbnail(client.user.displayAvatarURL())
    message.channel.send(embed);
  }
    
    
    
  
};