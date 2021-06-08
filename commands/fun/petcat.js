module.exports = {
    name: "petpat",
    aliases: ["pat"],
    category: "Fun",
    usage: "Petpat | <User>",
    description: "Petpat người dùng",
    run: async (client, message, args) => {
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        try {
            return message.channel.send(new (require("discord.js")).MessageAttachment(encodeURI(`https://api.monkedev.com/canvas/petpet?imgUrl=${Member.user.displayAvatarURL({ format: "png" })}`), "Petpat.gif"));
        } catch (_) {
            console.log(_);
            return message.channel.send("Ko thể tạo Petpat hoặc có gì đó lỗi!");
        }
    }
};