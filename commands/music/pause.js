module.exports = {
  name: "pause",
  aliases: [""],

  run: async(client, message) => {
    const channel = message.member.voice.channel;
    if (!channel) return message.channel.send('Bạn phải ở trong kênh thoại');
    let queue = message.client.queue.get(message.guild.id)
    if(!queue) return message.channel.send({
        embed: {
            description: 'Không có gì đang phát để dừng!'
        }
    })
    if(queue.playing !== false)
    queue.connection.dispatcher.pause()
    message.react('⏸')
    message.channel.send('Đã dừng nhạc!')
  } 
}