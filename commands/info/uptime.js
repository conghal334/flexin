const ms = require("parse-ms");
const discord = require("discord.js");
const config = require("../../config.json");
const db = require("quick.db")

module.exports = {
  name: "uptime",
  aliases: [""],
  usage: "<prefix>uptime",
  description: "Hiển thị thời gian đã onile của BOT",
  run: async (client, message, args) => {
    let prefix = await db.fetch(`prefix_${message.guild.id}`)
   if(prefix == null) {
    prefix =  config.PREFIX
  }
    let Content = args.join(" ");
    let time = ms(client.uptime)

    if (!Content) return
    message.channel.send('Bot đã trực tuyến được ${time.days} ngày, ${time.hours} tiếng, ${time.minutes} phút, ${time.second} giây')

  }
}