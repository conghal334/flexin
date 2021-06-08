module.exports = {
  name: "resume",
  aliases: ["rm"],

  run: async(client, message) => {
    const channel = message.member.voice.channel;
    if (!channel) return message.channel.send('Bạn phải tham gia kênh âm thoại!');
    let queue = message.client.queue.get(message.guild.id)
    if(!queue) return message.channel.send({
        embed: {
            description: 'Không có gì đang phát để dừng!'
        }
    })
    if(queue.playing !== false)
    queue.connection.dispatcher.resume()
    message.react('▶')
    message.channel.send('Đã tiếp tục nhạc!')
}}