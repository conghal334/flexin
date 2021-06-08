const { MessageEmbed } = require("discord.js")
const config = require("../../config.js")
const db = require("quick.db")

module.exports = {
    name: "invite",
    aliases: ["int"],
    category: "info",
    description: "Mời bot vào server của bạn",
    usage: "[invite]",
    run: async (client, message, args) => {
    let prefix = await db.fetch(`prefix_${message.guild.id}`)
    if(prefix == null) {
    prefix =  config.Prefix
  }
    
    var permissions = 37080128;
    
    let invite = new MessageEmbed()
    .setTitle(`Invite-Lời Mời ${client.user.username}`)
    .setDescription(`Hãy Mời Tôi Hôm Nay-Invite me today! \n\n [Press This Link - Liên Kết](https://discord.com/api/oauth2/authorize?client_id=816144138687873051&permissions=8&scope=bot)`)
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=816144138687873051&permissions=8&scope=bot`)
    .setColor("#fffdd0")
    .setFooter("Invite-Mời!!","https://github.com/navaneethkm004/my-images/blob/main/giphy.gif?raw=true")
    return message.channel.send(invite);
  },
}