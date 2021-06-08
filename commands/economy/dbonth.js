const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'double-or-nothing',
    aliases : ["don", "d", "bet"],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        if(!args[0]) return message.channel.send('Hãy thêm số tiền bạn muốn cược')

        if(isNaN(args[0])) return message.reply("Sử dụng giá trị số")

        const amountToBet = parseInt(args[0])

        if(await client.bal(message.author.id) < amountToBet) return message.reply("Bạn không có đủ tiền")

        function random() {
            const num = Math.floor(Math.random() * 2);
            return num === 1;
        };

        if(random() === true) {
            const winAmount = amountToBet * 2;
            message.channel.send(`Bạn đã thắng ${winAmount}VNĐ, chúc mừng bạn`)
            client.add(message.author.id, winAmount)
        } else {
            message.channel.send(
                `Bạn đã thua ${amountToBet}VNĐ, em **đen** lắm`
            );
            client.rmv(message.author.id , amountToBet)
        }
    }
}