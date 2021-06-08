const discord = require('discord.js');
const fetch = require('node-fetch');
const config = require('../../config.json');

module.exports = {
  name: "ytt",
  aliases: [""],
  description: "Xem video trên youtube",
  run: async(client, message, args) => {
    let channel = message.member.voice.channel;
    if(!channel) return message.reply("Bạn cần tham gia kênh thoại")

    fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "755600276941176913",
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${config.TOKEN}`,
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
        .then(invite =>{
            if(!invite.code) return message.reply(":x: Không thể bắt đầu minigame")
            message.channel.send(`Click vào link hoặc nút màu xanh để bắt đầu:\n> https://discord.com/invite/${invite.code}`)
        })

  }
}