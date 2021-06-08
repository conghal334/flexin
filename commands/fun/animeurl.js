const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const random = require("something-random-on-discord").Random


module.exports = {
  name: "anime",
  aliases: ["animeurl", "simp"],
  description: "Một em waifu sẽ làm gì đó với bạn!",
  usage: "<prefix>simp",
  category: "fun",
  run: async (client, message, args) => {
    var data_array = ["pat", "hug", "waifu", "cry", "kiss", "slap", "smug", "punch"];
    const randomac = data_array[Math.floor(Math.random() * data_array.length)]; 
  let data = await random.getAnimeImgURL(`${randomac}`);
  message.channel.send(data);
  }
};    