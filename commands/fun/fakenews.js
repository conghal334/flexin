const Meme = require("memer-api")
const memer = new Meme();
const { Client, Message, MessageEmbed, MessageAttachment } = require('discord.js');
const Discord = require("discord.js");

module.exports = {
    name: 'fakenews',
    aliases: ["fake"],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
      const user1 = message.mentions.members.first()
      if(!user1) return message.channel.send("Bạn phải mention một ng nào đó");
      const avatar = user1.user.displayAvatarURL({ dynamic: false })

      memer.fakenews(avatar).then(image => {
    //now you have a "BUFFER", for Discord create an attachment
      const attachment = new Discord.MessageAttachment(image, "fakenews.png");
      message.channel.send(attachment)
      //<Channel>.send(attachment)
})
    }
};