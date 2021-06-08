const { MessageEmbed } = require("discord.js");
const math = require("mathjs");
const Color = `RANDOM`;
module.exports = {
  name: "math",
  aliases: [""],
  category: "Fun",
  run: async (client, message, args) => {

    try {
      if (!args[0]) return message.channel.send("Hãy đưa ra một phương trình!");
      const embed = new MessageEmbed()
        .setColor(`${Color}`)
        .setTitle(`Kết Quả`)
        .setDescription(math.evaluate(args.join(" ")))
        .setTimestamp();
      message.channel.send(embed);
    } catch (error) {
      message.channel.send(`Hãy đưa tôi phương trình đúng | Thử lại!`).then(() => console.log(error));
    }
  }
};