const discord = require('discord.js');

 module.exports = {
   name: "dm",
   aliases: ["message"],
   usage: "<prefix>dm/message <mention> <tin nhắn>",
   run: async (client, message, args) => {
     let Content = args.join(" ");

    if (!Content) return
    let user = message.mentions.users.first();
    if(!user) return message.channel.send('Hãy mention một tài khoản để nhắn riêng!')
    let dm = args.slice(1).join(" ")
    if(!dm) return message.channel.send("Không thể gửi tin nhắn trống không://")

    try {

      await user.send(dm)
    } catch (error) {
      return message.channel.send("Tài khoản này đã tắt nhắn tin riêng, nên đéo gửi được")
    }

    message.channel.send("Gửi Thành Công")
    message.delete();


  }
 }