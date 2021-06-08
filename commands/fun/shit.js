const Meme = require("memer-api")
const memer = new Meme();
const { Client, Message, MessageEmbed, MessageAttachment } = require('discord.js');
const Discord = require("discord.js");

module.exports = {
    name: 'shit',
    aliases: [""],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
      const text = args.join(' ')
      if(!text) return message.channel.send('Hãy thêm từ');
      memer.shit(text).then(image => {
    //now you have a "BUFFER", for Discord create an attachment
      const attachment = new Discord.MessageAttachment(image, "shit.png");
      message.channel.send(attachment)
      //<Channel>.send(attachment) 
})
    }
};