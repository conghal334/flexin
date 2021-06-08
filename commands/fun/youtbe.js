const Meme = require("memer-api")
const memer = new Meme();
const { Client, Message, MessageEmbed, MessageAttachment } = require('discord.js');

module.exports = {
    name: 'comment',
    aliases: [""],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        const user1 = message.mentions.users.first();

        const avatar = user1.displayAvatarURL({ dynamic: false })

        const text = args.slice(1).join(" ")

        if (!text) return message.reply(`PLs mention.`);

        const username = user1.username;

        memer.youtube(avatar, username, text).then(image => {
            const attachment = new MessageAttachment(image, "youtube.png")
            message.channel.send(attachment)
        })
    }
}