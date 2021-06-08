module.exports = {
  name: "skip",
  aliases: ["s"],
  run: async(client, message) => {
    const channel = message.member.voice.channel;
    if (!channel) return message.channel.send('Bạn phải tham gia kênh âm thoại!');
    let queue = message.client.queue.get(message.guild.id)
    if(!queue){ return message.channel.send({
        embed: {
            description: 'Không có gì đang phát! hãy dùng `Fplay <URL hoặc tên bài>`',
            color: 'BLACK'
        }
    })
}
    if(queue.songs.length !== 0) {
        message.react('✅')
        queue.connection.dispatcher.end('Okie đã skip!')
    }
}}