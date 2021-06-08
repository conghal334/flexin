const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "ban",
  aliases: ['letban'],
  description: "Ban 1 Member!",
  usage: "Ban <Mention Member>",
  run: async (client, message, args) => {
    //Start
    message.delete();
    if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.channel.send(
        `Mày không có quyền để  sử dụng lệnh này!`
      );

    let Member = message.mentions.users.first();

    if (!Member)
      return message.channel.send(
        `Hãy ping một thằng muốn ban!`
      );

    if (!message.guild.members.cache.get(Member.id))
      return message.channel.send(`Sai, Hãy Ping 1 Đúng Member!`);

    if (Member.id === message.author.id)
      return message.channel.send(`Lmao, đi tự ban bản thân!`);

    if (Member.id === client.user.id)
      return message.channel.send(`Please Don't Ban Me ;-;`);

    if (Member.id === message.guild.owner.user.id)
      return message.channel.send(`Bạn Không thể ban OWNER!`);

    let Reason = args.slice(1).join(" ");

    let User = message.guild.member(Member);

    if (!User.bannable) return message.channel.send(`Tao không ban được nó!`);

    try {
      console.log(`Đã pay khỏi server!`);
      setTimeout(function() {
        User.ban({ reason: `${Reason || "Không Cung Cấp Lí Do!"}` });
      }, 2000);
      let embed = new Discord.MessageEmbed()
        .setColor(Color)
        .setTitle(`Thằng Này Đã Pay Rất Xa!`)
        .addField(`Moderator`, `${message.author.tag} (${message.author.id}`)
        .addField(`Đã Ban`, `${Member.tag} (${Member.id})`)
        .addField(`Reason`, `${Reason || "Không Cung Cấp Lí Do!"}`)
        .setFooter(`Requested by ${message.author.username}`)
        .setTimestamp();
      if (User && Member.bot === false)
        Member.send(
          `Mày đã bị ban bởi **${message.guild.name}** For ${Reason ||
            "Không Cung Cấp Lí Do!"}`
        );
      message.channel.send(embed);
      console.log(
        `User: ${Member.tag} (${Member.id}) Nhận ban bởi ${
          message.guild.name
        } For ${Reason || "Không Cung Cấp Lí Do!"}`
      );
    } catch (error) {
      return message.channel
        .send(
          `Tôi không thể ban vì role nó cao hơn tôi!!`
        )
        .then(() => console.log(error));
    }

    //End
  }
};
