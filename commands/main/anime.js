const fetch = require("node-fetch")
const discord = require("discord.js")
const parseMilliseconds = require('parse-ms');

//If you do not know how GraphQL API works then you wont understand. 
var query = `
query ($search: String) { 
Media (search: $search, type: ANIME) { 
 title {
      romaji
      vietnamese
      native
    }
   coverImage {
    large
    color
  }
  nextAiringEpisode {
   timeUntilAiring
    episode
  }
  status
  episodes
  isAdult
  genres
  siteUrl
  description
  bannerImage
  }
}
`
//Through query i am trying to get only required information.

module.exports = {
    name: "animee",
    aliases: ["ani"],
    description: "Nhận thông tin về bộ anime",
    usage: "anime <anime_tên>",
    run: async (client, message, args) => {

      if (!args.length) return message.channel.send(":warning: | Hãy cung cấp tên bộ Anime.")

    let embed = new discord.MessageEmbed()
      .setAuthor("Vui lòng đợi...", client.user.displayAvatarURL())
      .setColor("YELLOW")
    let msg = await message.channel.send(embed)

    fetch("https://graphql.anilist.co", { //Here i will fetch the API and send the query in data along variable

      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query: query,
        variables: { search: args.join(" ") } //in the variable object there is a search key which contains the value of the anime of which we want info
      })
    })
      .then(data => data.json())
      .then(json => {
        json = json.data.Media

        embed.setAuthor(json.title.english || json.title.romaji, json.coverImage.large)
          .setColor(json.coverImage.color || client.settings.color)
          .setDescription(Replacer(json.description).substring(0, 200) + ` [**[Đọc Thêm](${json.siteUrl})**]`)
          .setImage(json.bannerImage)
          .addField("Thể Loại", json.genres.join(", "))
          .addField("Cấm Dưới 18", json.isAdult, true)
          .addField("Tình Trạng", json.status, true)
          .setFooter("Hội Anime")


          if(json.nextAiringEpisode) {
            embed.addField("Tập", (json.nextAiringEpisode.episode - 1) + "/" + (json.episodes || " --"), true)
            let time = parseMilliseconds(json.nextAiringEpisode.timeUntilAiring * 1000)
            embed.addField("Phát Sóng Tiếp", `${time.days} ngày ${time.hours} tiếng ${time.minutes} phút`, true)
          }
          else embed.addField("Tổng Tập Phim",json.episodes, true)
        return msg.edit(embed);
      })
      .catch(err => { //Simply send error message if someting went wrong
        embed.setAuthor("Không thể tìm thấy bộ anime")
        .setColor("RED")
        return msg.edit(embed)
      });
  }

}


//Now this is the function which i created to removed some html tags from description of anime info. i replaced them with some markdown to make it look cool.
function Replacer(string) {
  return string.replace(/<br>/g, "").replace(/<i>/g, "**").replace(/<\/i>/g, "**").replace(/<i\/>/g, "**")
}