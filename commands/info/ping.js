const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "ping",
  aliases: ['test'],
  description: "Pong!",
  usage: "Ping",
  run: async (client, message, args) => {
    //Start
    const Emoji = '<:imp4_truahe:822321388190302209>';
    message.delete();

    const embed = new MessageEmbed()
      .setColor(Color)
      .setDescription(Emoji + ` Pong - ${client.ws.ping}`)     
      .setFooter(`Requested By ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};
