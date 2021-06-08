const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");
const figlet = require("figlet");
const { promisify } = require("util");
const figletAsync = promisify(figlet);

module.exports = {
  name: "ascii",
  aliases: ["asc"],
  description: "Ascii Art!",
  usage: "Ascii <Text>",
  run: async (client, message, args) => {
    //Start

    message.delete();
    
    let Content = args.join(" ");

    if (!Content) return message.channel.send(`Hãy Viết Cái Gì Đó!`);

    let Result = await figletAsync(Content);

    let embed = new MessageEmbed()
      .setColor(Color)
      .setDescription("```" + Result + "```")
      .setTimestamp();

    if (Content.length > 20)
      return message.channel.send(`Hãy làm ngắn hơn! | Giới Hạn : 20`);

    message.channel.send(embed);

    message.delete();

    //End
  }
};