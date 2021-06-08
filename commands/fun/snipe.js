const Discord = require("discord.js")
const config = require("../../config.json")
const db = require("quick.db")

module.exports = {
  name: "snipe",
  aliases: ["ms", "messagesnipe"],
  category: "fun",
  usage: "(prefix)snipe",
  description: "hiển thị tin nhắn đã xóa",
  run:async (client, message, args) => {  
  let prefix = await db.fetch(`prefix_${message.guild.id}`)
   if(prefix == null) {
    prefix =  config.PREFIX
  }
    
    const msg = client.snipes.get(message.channel.id)
    if(!msg) return message.channel.send("Không có tin nhắn đã xóa nào trong kênhl!")
    const embed = new Discord.MessageEmbed()
    .setAuthor(msg.author)
    .setDescription(msg.content)
    if(msg.image)embed.setImage(msg.image)
    
    message.channel.send(embed);
  
  
  }
};