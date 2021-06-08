const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "say",
  aliases: [""],
  usage: "<prefix>say <sometext>",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const sayEmbed = new MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
        .setDescription(args.join(" "))
        .setTimestamp()
        .setColor("RANDOM")

    message.channel.send(sayEmbed)
    message.delete()
  },
};