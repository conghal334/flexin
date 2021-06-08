const { tictactoe } = require('reconlx')

module.exports = {
    name: "tictactoe",
    description: "tic tac toe command",
    aliases: ["ttt"],

    run: async (bot, message, args) => {
        const member = message.mentions.members.first()
        if(!member) return message.channel.send('Chọn một người để bạn chơi cũng lần nữa!');

        new tictactoe({
            player_two: member,
            message: message
        })
    }
}