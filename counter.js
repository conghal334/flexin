const { db } = require("quick.eco");

function counter(message, client) {
  let channel = message.channel;
  let count = db.fetch(`counter_${message.guild.id}`);
  if (count === null) count = db.set(`counter_${message.guild.id}`, {
    number: 0,
    author: client.user.id
  });
  
  if (!message.author.bot && message.author.id === count.author) {
    message.delete();
    message.reply("Vui lòng đợi tới lượt bạn").then(m => m.delete(3000));
    return;
  }
  if (!message.author.bot && isNaN(message.content)) {
    message.delete();
    message.reply("Tin nhắn trong kênh này phải là giá trị số").then(m => m.delete(3000));
    return;
  }
  if (!message.author.bot && parseInt(message.content) !== count.number + 1) {
    message.delete();
    message.reply(`Số tiếp theo phải là ${count.number + 1}`).then(m => m.delete(3000));
    return;
  }
  count = db.set(`counter_${message.guild.id}`, { number: count.number + 1, author: message.author.id });
  channel.setTopic(`Số tiếp theo phải là ${count.number + 1}.`);
}

module.exports = counter;