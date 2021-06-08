const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: "add",
    aliases: [""],
    hidden: true,
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        if(message.author.id !== "677918899471122472") return;
        const member = message.mentions.users.first() || message.member;

        client.add(member.id, parseInt(args[0]));

        message.channel.send("Đã thêm tiền")
    }
}