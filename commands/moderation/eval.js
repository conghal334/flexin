const Discord = require('discord.js'),
      { post } = require('node-superfetch');


module.exports = {
  name: "eval",
  aliases: [""],
  usage: "Chỉ Nhà Phát Triển",
  run: async (client, message, args, includes) => {
    if (message.author.id !== "677918899471122472") return;

    const embed = new Discord.MessageEmbed()
    .addField("Input", "```js\n" + args.join(" ") + "```");

    try {
      const code = args.join(" ");
      if (!code) return message.channel.send("Thêm cả code vào nữa");
      let evaled;
      if (code.includes('BÍ MẬT') || code.includes('TOKEN') || code.includes("process.env")) {

      evaled = "Nà ní, mày định làm gì với TOKEN, mình chịu";
      
    } else {
      evaled = eval(code);

    }

    if (typeof evaled !== "string") evaled = require("util").inspect(evaled, {depth: 0});

    let output = clean(evaled);
    if (output.length > 1024) {
      const {body} = await post ("https://www.hastebin.com/documents").send(output);
      embed.addField("Output", `https://hastebin.com/${body.key}.js`).setColor(0x7289DA);

    } else {
      embed.addField("Output", "```js\n" + output + "```").setColor(0x7289DA)
    }

    message.channel.send(embed);
  } catch (error) {
    let err = clean(error);
    if (err.length > 1024) {
      const {body} = await post ("https://www.hastebin.com/documents").send(err);
      embed.addField("Output", `https://hastebin.com/${body.key}.js`).setColor(0x7289DA);

    } else {
      embed.addField("Output", "```js\n" + err + "```").setColor(0x7289DA);
    }

    message.channel.send(embed)
  }
}}

function clean(string) {
  if (typeof text === "string") {
    return string.replace(/`/g, "`" + String.fromCharCode(8203))
    replace(/@/g + String.fromCharCode(8203))
  } else {
    return string;
  }
}

