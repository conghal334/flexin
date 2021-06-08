const Afk = require('../../database/models/afkSchema.js');
const mongoose = require('mongoose')

module.exports = {
  name: 'afk',
  aliases: [""],
  description: "Dùng để AFK, khi ai đó ping bạn thì bot sẽ báo rằng tài khoản này đã AFK",
  run: async (client, message, args) => {
    let Content = args.join(" ");
    let reason = args.join(" ");
    if (!reason) reason = "Không có";
    let afkProfile = await Afk.findOne({ userID: message.author.id });
    message.channel.send(`Bạn đã AFK với lí do: ${reason}`)

    if (!afkProfile) {
        afkProfile = await new Afk({
            _id: mongoose.Types.ObjectId(),
            userID: message.author.id,
            reason: reason,
        })
        await afkProfile.save();

    } else return message.channel.send('Bạn đã AFK từ trước rồi.');


  }
}