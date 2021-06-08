const discord = require("discord.js")
const { NovelCovid } = require("novelcovid");
const track = new NovelCovid();

module.exports = {
  name: "corona",
  aliases: ["covid"],
  category: "info",
  description: "Chi Tiết Về Corona",
  usage: "corona all or corona <country>",
  aliases: ['covid'],
  run: async (client, message, args) => {
    
    if(!args.length) {
      return message.channel.send("Hãy Đưa Tên Của Một Nước")
    }
    
    if(args.join(" ") === "all") {
      let corona = await track.all() //it will give global cases
      
      let embed = new discord.MessageEmbed()
      .setTitle("Corana-Các Thông Tin")
      .setColor("#ff2050")
      .setDescription("Có Thể Vẫn Sai Vài Con Số Nhỏ.")
      .addField("Tổng Số Ca Nhiễm", corona.cases, true)
      .addField("Tổng Số Ca Tử Vong", corona.deaths, true)
      .addField("Tổng Số Bình Phục", corona.recovered, true)
      .addField("Các Ca Hôm Nay", corona.todayCases, true)
      .addField("Các Ca Tử Vong Hôm Nay", corona.todayDeaths, true)
      .addField("Các Ca Đang Dương Tính", corona.active, true);
      
      return message.channel.send(embed)
      
      
      
    } else {
      let corona = await track.countries(args.join(" ")) //change it to countries
      
      let embed = new discord.MessageEmbed()
      .setTitle(`${corona.country}`)
      .setColor("#ff2050")
      .setDescription("Có Thể Có Sai Số Với Lượng Nhỏ.")
      .addField("Tổng Số Ca Nhiễm", corona.cases, true)
      .addField("Tổng Số Ca Tử Vong", corona.deaths, true)
      .addField("Tổng Số Ca Bình Phục", corona.recovered, true)
      .addField("Số Ca Hôm Nay", corona.todayCases, true)
      .addField("Số Ca Tử Vong Hôm Nay", corona.todayDeaths, true)
      .addField("Số Ca Đang Dương Tính", corona.active, true);
      
      return message.channel.send(embed)
      
      
    }
    
    
  }
}