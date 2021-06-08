const { Client, Message, MessageEmbed } = require("discord.js");
const axios = require("axios");
module.exports = {
  name: "djs",
  aliases: ["docs"],
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const query = args.join(" ");
    if (!query) return message.reply("Hãy thêm câu hỏi!");
    const url = `https://djsdocs.sorta.moe/v2/embed?src=stable&q=${encodeURIComponent(
      query
    )}`;

    axios.get(url).then(({ data }) => {
      if (data) {
        message.channel.send({ embed: data });
      }
    });
  },
};