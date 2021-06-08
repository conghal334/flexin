const discord = require('discord.js');

module.exports = {
  name: "ship",
  aliases: [""],
  usage: "ship <user>",
  description: "Kiểm tra bạn bên kia yêu bạn như thế nào",
  run: async (client, message, args) => {
    message.delete();
    let user = message.mentions.users.first()

    let RN = Math.floor(Math.random() * 100) + 1

    if (!user) return message.channel.send("Hãy mention ai đó");
    if (user === message.author) return message.channel.send("Bạn yêu bản thân mà, không phải nói bạn cũng biết");

    const UnloveEmbed = new discord.MessageEmbed()
    .setTitle("Bạn không được duyên cho lắm")
    .setThumbnail('https://media.discordapp.net/attachments/834053202596855828/837515116857524236/1250px-Broken_heart.png?width=530&height=434')
    .setDescription(` ${message.author} fall in luv ${user} với ${RN}%`)
    .setColor("GREEN")

    const LoveEmbed = new discord.MessageEmbed()
    .setTitle('Hai bạn đang đến với hạnh phúc')
    .setThumbnail('https://media.discordapp.net/attachments/834053202596855828/837515913338814474/1200px-Heart_corazC3B3n.png?width=434&height=434')
    .setDescription(` ${message.author} fall in luv & ${user} với ${RN}%`)
    .setColor("RED")

    if(RN > 50) {
      message.channel.send(LoveEmbed)
    } else {
      message.channel.send(UnloveEmbed)
    }


  }
}