const Discord = require('discord.js');

module.exports = {
    name: "simjoin",
    aliases: [""],
    description: "simulates a join!",

    run: async (bot, message, args) => {
        if(message.author.id != "677918899471122472") return;
        bot.emit('guildMemberAdd', message.member);
    },
}