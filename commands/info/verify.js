const db = require('quick.db')

module.exports = {
    name : 'verify',
    aliases: [""],
    run : async(client, message, args) => {
      if (message.channel.id !== "834442503788560407") {
        return;

      }

      await message.delete();
      await message.member.roles.add("807423718174752789");

      await message.member.roles.remove("834443754894000148");
      return;


    }
}    