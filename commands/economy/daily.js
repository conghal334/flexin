const { Client, Message, MessageEmbed } = require('discord.js');
const cooldown = new Map()
module.exports = {
    name: 'daily',
    aliases: [""],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        if(cooldown.has(message.author.id)) {
            message.reply(`Bạn phải đợi sau 1 ngày`)
        } else {

            const jobs = ["Cầu thủ đá bóng", "Tài xê", "Đầu bếp", "Bác sĩ", "Cosplayer", "Phò vip", "Youtuber"]

            const job = Math.floor(Math.random() * jobs.length);
            const coins = Math.floor(Math.random() * 2000) + 1;
    
            message.channel.send(
                new MessageEmbed()
                .setTitle(`Đã kiếm tiền`)
                .setDescription(`Bạn đã có **${coins}** VNĐ, Quay lại vào ngày mai!`)
            )
            client.add(message.author.id, coins)

            cooldown.add(message.author.id)
            setTimeout(() => {
                cooldown.delete()
            }, 86400000)
        }
    }
}