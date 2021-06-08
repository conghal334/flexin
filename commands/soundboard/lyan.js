const Discord = require('discord.js');
const path = require('path');
const checkifalreadyplaying = new Discord.Collection();
module.exports = {
  name: "lyan",
  aliases: [""],

  run: async (client, message, args) => {
	const channel = message.member.voice.channel;
	if(!channel) return message.channel.send('Hãy kết nối tới kênh thoại để dùng soudboard');
	channel.join().then(async connection => {
		const dispatcher = connection.play(path.join(__dirname + '/audio/lyan.mp3'));
		const e = await message.react('🎙️');
		dispatcher.on('speaking', speaking => {
			if(!speaking) {
        channel.leave();
        e.remove()
            }
		});
	}).catch(err => console.log(err));
}};