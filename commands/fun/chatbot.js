const { chatBot } = require('reconlx') 

module.exports = {
    name : 'chat',
    aliases: [""],
    run : async(client, message, args) => {
        chatBot(message, args.join(" "))
    }
}