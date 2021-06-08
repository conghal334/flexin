const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Prefix } = require("../../config.js");

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Help Command!",
  usage: "Help | <Tên lệnh>",
  run: async(client, message, args) => {
    
    message.delete();
    
    let embed = new MessageEmbed()
    .setColor(Color)
    .setTitle(`${client.user.username} CÁC LỆNH!`)
    .setDescription(`Dùng ${Prefix}Help <Command Name> Để Biết Thêm THông Tin!` + "\n\n**Main**\n`Say, Qr code,  AFK, Discord DOC(djs), Confession, Steal-emoji`" + "\n\n" + "**Soundboard**\n`Ahshit, Bruh, Claphand, Coffindance, End, Error, Gasgas, Lyan, Nani, Oof, Run, Sadviolin, Startup, Tranducbo, Wow, Fart, Yamete, FBI`" + "\n\n" +
    "**Fun**\n`Advice, Math, Tweet, Petpat, Coinflip, Hangman, Howgay, Snipe, Hack, Meme, Joke, Advice, Fact, Roblox, Neko, Shit, Fakenews,  Hitler, Simp, Rate, Minecraft, Quote, Dicksize, Ship, Ascii, Translate, Randomnumber`" + "\n\n" + "**Moderation**\n`Clear, Verify, Mute, Unmute, Tempmute, Kick, Ban, Unban, DM, Google Tempban, Warn, Đánh X-O, Warnings, ResetWarns, Report`" + "\n\n"+ "**Economy**\n`Add, Bal, Beg, Blackjack, Buy, Daily, Bet, Inventory, Leaderboard, Remove, Shop, Work`" + "\n\n" + 
    "**Thông Tin**\n`Avatar, Set-Language(Chọn Ngôn Ngữ Chính), Google Image, Urban, Uptime, Showban, Help, Weather, NPM, Userinfo,  Ping, ServerInfo, Corona, Urban, Suggest, Stats, Invite, Invitelist`" + "\n\n"  + "**Âm nhạc**\n`Drop, Jump, loop, Nowplaying, Pause, Queue, Resume, Skip, Stop, Volume, Youtube-Together, Betrayal(game), Fishing(game), Poker(game)`" + "\n\n" +
    "**Rank-System**\n`Rank`" + "\n\n" + "**NSFW**\n`4K, Anal, Ass, Boobs, Erokemo, Gonewild, Hentai, Hentaiass, Hentaimidriff, Hentaithigh, Kitsune, Lewd, Porngif, Pussy, Thigh, Nekofeet, Nekopussy, Nekotits, Solo, Wallpaper`" + "\n\n" + "**Giveaway**\n`Start, Reroll, End`")
    .setFooter(`Hỏi Bởi ${message.author.username}`)
    .setTimestamp();
    
    if (!args.length) return message.channel.send(embed);

    let cmd =
      client.commands.get(args[0].toLowerCase()) ||
      client.commands.get(client.aliases.get(args[0].toLowerCase()));

    let embed2 = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Thông tin lệnh ${cmd.name}!`)
      .addField(`Thay thế:`, cmd.aliases || "Không có!")
      .addField(`Cách dùng:`, cmd.usage || "Không có cách dùng")
      .addField(`Thông tin:`, cmd.description || "Không Có Thông Tin!")
      .setTimestamp();

    if (cmd) {
      return message.channel.send(embed2);
    } else {
      return message.channel.send(embed);
    }
  }
};
