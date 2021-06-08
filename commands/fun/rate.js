const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "rate",
  aliases: ["rateme"],
  description: "Bot sẽ đánh giá thứ gì đó của Bạn!",
  usage: "Rate <Text>",
  category: "fun",
  run: async (client, message, args) => {
    //Start
    message.delete();
    let Content = args.join(" ");

    if (!Content)
      return message.channel.send(`Hãy đưa tôi thứ gì đó để đánh giá!`);

    let embed = new Discord.MessageEmbed()
      .setColor(Color)
      .setTitle(`Tôi đánh giá`)
      .setDescription(`${Math.floor(Math.random() * 11)}/10 Cho ${Content}`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};