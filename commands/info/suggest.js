const { MessageEmbed } = require("discord.js")


module.exports = {
  name: "suggest",
  usage: "suggest <message>",
  description: "Gửi ý kiến của bạn",
	aliases: ['suggestion'],
  category: "main",
  run: (client, message, args) => {
    
    if(!args.length) {
      return message.channel.send("Hãy Đưa Ra Một Đề Nghị")
    }
    
    let channel = message.guild.channels.cache.find((x) => (x.name === "📪-ý-kiến" || x.name === "🎋-suggestions"))
    
    
    if(!channel) {
      return message.channel.send("Ko Có Channel Tên: 🎋-suggestions")
    }
                                                    
    
    let embed = new MessageEmbed()
    .setAuthor("SUGGESTION: " + message.author.tag, message.author.avatarURL())
    .setThumbnail(message.author.avatarURL())
    .setColor("#ff2050")
    .setDescription(args.join(" "))
    .setTimestamp()
    
    
    channel.send(embed).then(m => {
      m.react("✅")
      m.react("❌")
    })
    

    
    message.channel.send("Đã Gửi Tới Kênh 🎋-suggestions ")
    
  }
}