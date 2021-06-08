const Meme = require("memer-api")
const memer = new Meme();
const { Client, Message, MessageEmbed, MessageAttachment } = require('discord.js');
const { Color } = require("../../config.js");

module.exports = {
    name: "confession",
    category: "Fun",
    aliases: ["say-embed", "cfs"],
    description: "Resends a message as an Embed",
    run: async (client, message, args, user, text, prefix) => {
      message.delete();
      if(!args[0])
        return message.channel.send(new MessageEmbed()
            .setTitle("Bạn chưa cung cấp tiêu đề, hoặc một thông tin")
            .setDescription("Usage: \`Fcfs <tiêu đề> ++ <thông tin>\`")
        );
      let userargs = args.join(" ").split("++");
      let title = userargs[0];
      let desc = userargs.slice(1).join(" ")
      message.channel.send(new MessageEmbed()
        .setTitle(title ? title : "")
        .setDescription(desc ? desc : "")
        .setFooter(`Confession tạo bởi ${message.author.username}`)
        .setTimestamp()
        .setColor(Color)
      )
}
}