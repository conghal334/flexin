const { MessageEmbed } = require('discord.js')

 

const ms = require('ms');

module.exports = {

    name: "start", 

        description: "Tạo give away",

        accessableby: "Administrator",

        category: "giveaway",

        aliases: ["giveaway-start"],

        usage: '<kênh> <thời gian> <số người thắng>, <quà>',

    run: async (bot, message, args) => {

       if(!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Giveaways")){

        return message.channel.send(':x: Bạn phải có quyền quản lí tin nhắn.');

    }

    // Giveaway channel

    let giveawayChannel = message.mentions.channels.first();

    // If no channel is mentionned

    if(!giveawayChannel){

        return message.channel.send(':x: Mention kênh giveaway!');

    }

    // Giveaway duration

    let giveawayDuration = args[1];

    // If the duration isn't valid

    if(!giveawayDuration || isNaN(ms(giveawayDuration))){

        return message.channel.send(':x: Thêm thời hạn vào iem ơi!');

    }

    // Number of winners

    let giveawayNumberWinners = args[2];

    // If the specified number of winners is not a number

    if(isNaN(giveawayNumberWinners) || (parseInt(giveawayNumberWinners) <= 0)){

        return message.channel.send(':x: Thêm số người thắng vào iem ơi!');

    }

    // Giveaway prize

    let giveawayPrize = args.slice(3).join(' ');

    // If no prize is specified

    if(!giveawayPrize){

        return message.channel.send(':x: Thêm quà vào iem ơi!');

    }

    // Start the giveaway

    bot.giveawaysManager.start(giveawayChannel, {

        // The giveaway duration

        time: ms(giveawayDuration),

        // The giveaway prize

        prize: giveawayPrize,

        // The giveaway winner count

        winnerCount: giveawayNumberWinners,

        // Who hosts this giveaway

        hostedBy: message.author,

        // Messages

        messages: {

            giveaway: "🎉🎉 **GIVEAWAY** 🎉🎉",

            giveawayEnded: "🎉🎉 **GIVEAWAY ĐÃ HẾT** 🎉🎉",

            timeRemaining: "Thời gian còn lại: **{duration}**!",

            inviteToParticipate: "React 🎉 để tham gia!",

            winMessage: "Chúc mừng cháu, {winners}! Bạn thắng **{prize}**!",

            embedFooter: "Giveaways",

            noWinner: "Giveaway đã bị hủy, ko có ai tham gia.",

            hostedBy: "Host bởi: {user}",

            winners: "Winner",

            endedAt: "Đã hết vào lúc",

            units: {

                seconds: "giây",

                minutes: "phút",

                hours: "tiếng",

                days: "ngày",

                pluralS: false // Not needed, because units end with a S so it will automatically removed if the unit value is lower than 2

            }

        }

    });

    message.channel.send(`Giveaway đã bắt đầu trong ${giveawayChannel}!`);

    }

}