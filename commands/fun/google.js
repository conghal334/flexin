const Discord = require("discord.js");
const request = require("node-superfetch");

module.exports = {
  name: "google",
  aliases: ["gg"],
  usage: "google <câu hỏi>",
  description: "Tìm kiếm web qua google",
  run: async (client, message, args) => {
    let googleKey = "AIzaSyASpRmXDqnRjycqdQSuO-CdeBDvAKA7vmc";
    let csx = "036f8eed9645f0b3c";
    let query = args.join(" ");
    let result;

    if (!query) return message.channel.send("Hãy thêm câu hỏi.");
    href = await search(query);
    if (!href) return message.channel.send("Không rõ tìm kiếm:///");

    const embed = new Discord.MessageEmbed()
    .setTitle(href.title)
    .setDescription(href.snippet)
    .setImage(href.pagemap ? href.pagemap.cse_thumbnail[0].src : null)
    .setURL(href.link)
    .setColor(0x7289DA)
    .setFooter("Tài trợ bởi Công và Google")

    return message.channel.send(embed);

    async function search(query) {
      const { body } = await request.get("https://www.googleapis.com/customsearch/v1").query({
        key: googleKey, cx: csx, safe: "off", q: query
      });

      if (!body.items) return null;
      return body.items[0];
    }
  }
}