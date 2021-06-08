const { Client, Message, MessageEmbed, MessageAttachment } = require('discord.js');
const { Canvas } = require("canvacord")
module.exports = {
    name: 'quote',
    aliases: [""],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        let user = message.mentions.users.first();
        if(!user) return message.channel.send("Hãy mention trước đã!")

        let text = args.slice(1).join(" ")
        if(!text) return message.channel.send("Thêm các từ vào!")

        let color = '#F2F2F2'

        const userAvatar = user.displayAvatarURL({ dynamic: false, format: "png" })

        const img = await Canvas.quote({ image: userAvatar, message: text, username: user.username, color: color })

        let attachemnt = new MessageAttachment(img, "quote.png")
        message.channel.send(attachemnt)
    }
}