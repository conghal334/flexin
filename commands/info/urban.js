const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const client = new Discord.Client()
const fetch = require('node-fetch')
const querystring = require('querystring')

module.exports = {
  name: "urban",
  aliases: [""],
  description: "<prefix>urban <từ cần tìm>",
  run: async (client, message, args) => {

      const searchString = querystring.stringify({ term: args.slice(0).join(" ") });

        if (!args.slice(0).join(" ")) return message.channel.send(new MessageEmbed()
            .setColor("BLUE")
            .setDescription(`Hãy đưa ra từ bạn muốn!`)
        )

        const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${searchString}`).then(response => response.json())

        try {
            const [answer] = list

            const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str)

            const embed = new Discord.MessageEmbed()
                .setColor("BLUE")
                .setTitle(answer.word)
                .setURL(answer.permalink)
                .addFields(
                    { name: 'Định Nghĩa', value: trim(answer.definition, 1024) },
                    { name: 'Ví Dụ', value: trim(answer.example, 1024) },
                    { name: 'Đánh Giá', value: `${answer.thumbs_up} 👍. ${answer.thumbs_down} 👎.` },
                )
            message.channel.send(embed)
        } catch (error) {
            console.log(error)
            return message.channel.send(new Discord.MessageEmbed()
                .setColor("BLUE")
                .setDescription(`Không tìm thấy kết quả cho **${args.slice(1).join(" ")}**`)
            )
        }
	}		
};