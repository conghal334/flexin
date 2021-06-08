const Discord = require('discord.js')
module.exports = {
  name: 'minecraft',
  aliases: [""],
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */

  run: async(client , message , args) => {
  const sentence = args.join("+")
    
    if (!sentence) return message.channel.send('Hãy thêm từ.')
    if (sentence > 22) return message.channel.send("Không nhập quá 22 chữ. OK?")
    let embed = new Discord.MessageEmbed()
      .setTitle('Đã Mở Khóa Thành Thích!')
      .setImage(`https://api.cool-img-api.ml/achievement?text=${sentence}`)
      .setColor('RANDOM')
      .setFooter(' ');
    message.channel.send(embed)
  }
}