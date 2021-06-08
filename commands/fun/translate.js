const discord = require("discord.js");
const translate = require('@iamtraction/google-translate');
const config = require("../../config.json")
const db = require("quick.db")

module.exports = {
  name: "translate",
  aliases: ["trans"],
  run: async (client, message, args) => {  
  let prefix = await db.fetch(`prefix_${message.guild.id}`)
   if(prefix == null) {
    prefix =  config.PREFIX
  }
  let Content = args.join(" ");

    if (!Content) return

    const txt = args.slice(1).join(" ")
    const lang = args[0]
    if(!txt) return message.channel.send("Hãy đưa ra từ hoặc một câu để tao dịch cho")
    if(!lang) return message.channel.send("Vui lòng cung cấp ngôn ngữ ISO cho dịch")
    translate(txt, { to: lang }).then(res => {
      const embed = new discord.MessageEmbed()
      .setDescription(res.text)
      .setColor("GREEN")
      .setFooter(`Hỏi Bởi ${message.author.username}`)
      message.channel.send(embed); // OUTPUT: You are amazing!
    }).catch(err => {
      message.channel.send("Hãy đưa ra ngôn ngữ ISO đúng")
    });

  }
}  


