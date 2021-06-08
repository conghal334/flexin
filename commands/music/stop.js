module.exports = {
  name: "stop",
  aliases: [""],

  run: async(client, message) => {
    const channel = message.member.voice.channel;
    if (!channel) return message.channel.send('Bạn phải tham gia kênh âm thoại!');
    let queue = message.client.queue.get(message.guild.id)
    if(!queue) return message.channel.send({
        embed: {
            description: 'Không có gì đang phát để dừng!',
            color: 'BLACK'
        }
    })
    message.react('✅')
    queue.songs = []
    queue.connection.dispatcher.end('Đã dừng!')
}}