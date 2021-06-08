const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: "bal",
    aliases: [""],
    aliases: ['balance','cash','money','coin','coins'],
    description: 'Kiểm tra ví tiền',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        const member = message.mentions.members.first() || message.member

        const bal = await client.bal(member.id);
        message.channel.send(
            new MessageEmbed()
            .setTitle(`Ví tiền của ${member.user.tag}`)
            .setDescription(`${member} có :  ${bal} VNĐ `)
            .setColor("RANDOM")
        );

    }
}