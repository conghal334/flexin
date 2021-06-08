const { Client, Message, MessageEmbed } = require('discord.js');
const cooldown = new Map()
module.exports = {
    name: 'work',
    aliases: [""],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        if(cooldown.has(message.author.id)) {
            message.reply(`Đợi sau 1 tiếng`)
        } else {
            
        const jobs = ["Cầu thủ bóng đá", "Tài xế", "Đàu bếp", "Bác sĩ", "Cosplayer", "JAV", "Ngôi sao khiêu dâm"]

        const job = Math.floor(Math.random() * jobs.length);
        const coins = Math.floor(Math.random() * 20000000000) + 100000;

        message.channel.send(
            new MessageEmbed()
            .setTitle(`Đã trả lương`)
            .setDescription(`Bạn làm nghề ${jobs[job]} và kiếm được **${coins}** VNĐ`)
        )
        client.add(message.author.id, coins);

        cooldown.add(message.author.id)
        setTimeout(() => {
            cooldown.delete()
        }, 3600000)
        }
    }
}