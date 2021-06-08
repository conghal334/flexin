const { MessageEmbed } = require('discord.js');
module.exports = {
    name: "invitelist",
    aliases: [],
    description: "Top 10 người mời trong máy chủ",
    run: async(client, message) => {
       
    if (!message.guild.me.hasPermission("MANAGE_GUILD")) {
        const adm = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Tôi cần quyền "Manage Server" để sử dụng lệnh này.')
        return message.reply(adm)
    }

    if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) {
        const adm = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Tôi cần quyền "Manage Channels" để sử dụng lệnh này.')
        return message.reply(adm)
    }

    message.guild.fetchInvites().then((invites) => {
        const inviteCounter = {}

        invites.forEach((invite => {
            const { uses, inviter } = invite
            const { username, discriminator } = inviter

            const name = `${inviter}`

            inviteCounter[name] = (inviteCounter[name] || 0) + uses
        }))

        let replyText = new MessageEmbed()
            .setTitle(`📩 Thiệp Mời ${message.guild.name}`)
            .setDescription(` \n`)
            .setColor("BLUE")
        const sortedInvites = Object.keys(inviteCounter).sort((a, b) => inviteCounter[b] - inviteCounter[a])

        if (sortedInvites.length > 10) sortedInvites.length = 10
        else if (sortedInvites.length > 10) sortedInvites.length = sortedInvites.length


        for (const invite of sortedInvites) {
            const count = inviteCounter[invite]
            replyText.description += `\n${invite} đã mời được ${count} người.`
        }
        message.reply(replyText)
    })
    }
}