const db = require("quick.db")
const Discord = require('discord.js')

module.exports = {
  name: "resetwarns",
  aliases: ["rwarns"],
  usage: "rwarns <@user>",
  description: "Đặt lại số cảnh cáo về 0",
  run: async (client, message, args) => {
    message.delete();
    
    
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("Bạn không có quyền để thực hiện")
    }
    
    const user = message.mentions.members.first()
    
    if(!user) {
    return message.channel.send("Hãy chọn một tài khoản để làm")
    }
    
    if(message.mentions.users.first().bot) {
      return message.channel.send("Bot không bị cảnh cáo")
    }
    
    if(message.author.id === user.id) {
      return message.channel.send("Bạn không được phép đặt lại số cảnh cáo của mình")
    }
    
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
    
    if(warnings === null) {
      return message.channel.send(`${message.mentions.users.first().username} không có cảnh cáo nào`)
    }
    
    db.delete(`warnings_${message.guild.id}_${user.id}`)
    user.send(`Tất cả cảnh cáo của bạn đã đặt lại bởi ${message.author.username} từ ${message.guild.name}`)
    await message.channel.send(`Đặt lại tất cả cảnh cáo ${message.mentions.users.first().username}`)
    
  
    
}
}