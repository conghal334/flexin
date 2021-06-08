const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "nowplaying",
  aliases: ["np"],
  run: async(client, message) => {
    const channel = message.member.voice.channel;
    if (!channel) return message.channel.send('Bạn phải tham gia kênh âm thoại!');
    let queue = message.client.queue.get(message.guild.id)
    if(!queue) return message.channel.send({
        embed:{
            title: 'Không có gì đang phát lúc này!'
        }
    })
    message.channel.send({
        embed:{
            title: 'Đang phát',
            description: queue.songs[0].title + ' Requested bởi: ' + '<@' + queue.songs[0].requester + '>',
            color: 'YELLOW',
            thumbnail: queue.songs[0].thumbnail
        }
    })
}}