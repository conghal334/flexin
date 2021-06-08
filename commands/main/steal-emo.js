const { Util, Client, MessageEmbed, Message } = require('discord.js');

module.exports = {
  name: "steal-emoji",
  aliases: ["st-emoji"],
  description: "Trộm emoji=))",
  run: async (client, message, args) => {
    if (!args.length) return message.reply("Hãy nhập emoji bạn muốn stole =))");

    for (const rawEmoji of args) {
      const parsedEmoji = Util.parseEmoji(rawEmoji);

      if (parsedEmoji.id) {
        const extension = parsedEmoji.animated ? ".gif" : ".png";
        const url = `https://cdn.discordapp.com/emojis/${parsedEmoji.id + extension}`;
        message.guild.emojis
        .create(url, parsedEmoji.name)
        .then((emoji) => message.channel.send(`Đã thêm: \`${emoji.url}\``));
      }
    }
  }
};