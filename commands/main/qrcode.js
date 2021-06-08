const Discord = require('discord.js');


module.exports = {
    name: "qr",
    aliases: ["qrcode"],


     async execute(client, message, args) {
    
        let link = (args[0])
        let qrlink = `http://api.qrserver.com/v1/create-qr-code/?data=${link}&size=200x200`

        if (!link) 
        return message.channel.send(` Hãy cung cấp đường liên kết !`)

        if (require('is-url')(link)) {
            const attachment = new Discord.MessageAttachment(qrlink, 'qrcode.png');

            const embed = new Discord.MessageEmbed()
            .setTitle('Đã tạo mã QR!')
            .attachFiles(attachment)
            .setColor("GREEN")
            .setImage('attachment://qrcode.png')
            .setFooter(`Thực Hiện Bởi ${message.author.tag}`)
            .setTimestamp()

            message.channel.send(embed)

        } else {
            message.channel.send(`Không thể đưa link chứa \`https://\``)
        }

    }
}