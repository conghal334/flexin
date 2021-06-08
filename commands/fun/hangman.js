const { hangman } = require('reconlx')

module.exports = {
    name : 'hangman',
    aliases: [""],
    usage: "<prefix>hangman <#channel> <sercet>",
    description: "Giải đố tìm từ",
    run : async(client, message, args) => {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('Bạn cần có quyền quản lí tin nhắn.')
        const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
        if(!channel) return message.channel.send('Hãy thêm kênh')
        const word = args.slice(1).join(" ")
        if(!word) return  message.channel.send('Hãy thêm từ đoán.')

        const hang = new hangman({
            message: message,
            word: word,
            client: client,
            channelID: channel.id,
        })

        hang.start();
        message.delete();
    }
}