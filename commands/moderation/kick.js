const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "kick",
  aliases: ['cut'],
  description: "Kick A Member!",
  usage: "Kick <Mention Member>",
  run: async (client, message, args) => {
    //Start
    message.delete();
    if (!message.member.hasPermission("KICK_MEMBERS"))
      return message.channel.send(
        `Bạn Không Có Quyền!`
      );

    let Member = message.mentions.users.first();

    if (!Member)
      return message.channel.send(
        `Hãy mention một member đã chọn!`
      );

    if (!message.guild.members.cache.get(Member.id))
      return message.channel.send(`Please Mention A Valid Member!`);

    if (Member.id === message.author.id)
      return message.channel.send(`Kick Bản Thân Ko Đc Đâu!`);

    if (Member.id === client.user.id)
      return message.channel.send(`Please Don't Kick Me ;-;`);

    if (Member.id === message.guild.owner.user.id)
      return message.channel.send(`Bạn Không Thể Kick Owner!`);

    let Reason = args.slice(1).join(" ");

    let User = message.guild.member(Member);

    if (!User.kickable)
      return message.channel.send(`Tôi Không Kick Đc Nó!`);

    try {
      console.log(`Thằng Này Chuẩn bị PAY!`);

      setTimeout(function() {
        User.kick({ reason: `${Reason || "Không Có Lí Do!"}` });
      }, 2000);
      let embed = new Discord.MessageEmbed()
        .setColor(Color)
        .setTitle(`Member Đã Bị Kick!`)
        .addField(`Moderator`, `${message.author.tag} (${message.author.id}`)
        .addField(`Đã Kickr`, `${Member.tag} (${Member.id})`)
        .addField(`Reason`, `${Reason || "Không Có Lí Do!"}`)
        .setFooter(`Requested by ${message.author.username}`)
        .setTimestamp();
      if (User && Member.bot === false)
        Member.send(
          `Bạn Đã Bị Kick Bởi **${message.guild.name}** For ${Reason ||
            "Không Có Lí Do!"}`
        );
      message.channel.send(embed);
      console.log(
        `User: ${Member.tag} (${Member.id}) Ăn Kick Bởi ${
          message.guild.name
        } For ${Reason || "Không Có Lí Do!"}`
      );
    } catch (error) {
      return message.channel
        .send(
          `Tôi Không Thể Kick Vì Role Nó Cao Hơn Tôi!`
        )
        .then(() => console.log(error));
    }

    //End
  }
};
