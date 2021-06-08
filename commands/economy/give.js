const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'give',
    aliases: [""],
    usage: "Lgive <user> <amount>",
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        const user = message.mentions.users.first();
        if(!user) return message.reply("Bạn phải mention user đã, đéo ví dụ Lgive @hung 1000000")

        const coins = args[1];
        if(!coins) 
            message.reply(
                "Bạn phải thêm số tiền!, ví dụ Lgive @HypsterOP 2000000"
            )

        if(isNaN(coins))
          return message.reply("Số tiền phải là giá trị số!");

        const convertedDonationnnnn = parseInt(coins);
        if((await client.bal(message.author.id)) < convertedDonationnnnn)
        return message.reply("Bạn không có số tiền như thế, Lol");

        // time to remove LOL

        await client.rmv(message.author.id, convertedDonationnnnn);
        await client.add(user.id, convertedDonationnnnn);

        message.channel.send(`${message.author.username} đã đưa cho ${user.username} ${convertedDonationnnnn}VNĐ!`)        
    },
};