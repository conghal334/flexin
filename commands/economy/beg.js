const { Client, Message, MessageEmbed } = require('discord.js');
const cooldown = new Set();
module.exports = {
    name: "beg",
    aliases: [""],
    description: "Đi xin tiền",
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {

      if(cooldown.has(message.author.id)) {
        message.reply(`Bạn phải đợi 20 giây để tiếp tục!`)
      } else {

        const muni = Math.floor(Math.random() * 3000000) + 1000000;
        const persons = [
            `**Hùng**`,
            `**Con phò ngủ với bạn hôm trước**`,
            `**Lyan**`,
            `**Nga Ngu**`,
            `**Elon Musk**`,
            `**Tiền bay vào mặt bạn**`,
            `**Ngân hàng**`,
            `**Công**`,
            `**Nancy**`,
            `**Eimi**`,
            `**Mẹ mày**`,
            `**Ngôi sao Hàn Quốc**`,
            `**Chủ Game Roblox**`,
            `**Noob**`,
            `**Gmail bạn**`,
            `**Hacker Nga Ngố**`,
            `**Trình chặn quảng cáo**`,
            `**Miscorsoft Edge**`,
            `**Bitcoin**`,
            `**Kênh Youtube**`,
            `**Bộ phim xem tối qua**`,
            `**Quần Sịp Hùng**`,
            `**IIAME.MP4**`,
            `**The noob that have skin**`,
            `**Người yêu bạn**`,
            `**Kylie Jenner**`,
            `**Kanye West**`,
            `**Cristiano Ronaldo**`,
            `**Tyler Perry**`,
            `**Neymar**`,
            `**Howard Stern**`
       ]
       const breh = [
           `: hãy tận hưởng **${muni}** VNĐ`,
           `: ăn hôi hay đấy em, hôi của **${muni}** VNĐ.`,
           `: ok hãy lấy **${muni}** VNĐ.`,
           `: oh ok đó, **${muni}** VNĐ của mày.`,
           `: khong ai quan tấm đến bạn, bạn nhận được **${muni}** VNĐ.`,
           `: ăn xin chuyên nghiệp giúp bạn có **${muni}** VNĐ.`,
           `: o oo oo o **${muni}** VNĐ.`,
           `: đó là cách mày nhận tiền à? :/ ok lấy **${muni}** VNĐ của mày này.`,
           `: tại sao **${muni}** VNĐ đó cho mày?.`,
           `: nice, nhận lấy **${muni}** VNĐ này.`
       ]
       const ok = [
        `: bạn không giỏi ăn xin như vậy không có xu`,
        `: xin lỗi anh bạn, tôi đã dùng tất cả tiền của mình để quyên góp cho lyan :/`,
        `: xin chào, tôi đến từ IIAME.MP4 và bạn có tên của chúng tôi`,
        `: đéo`,
        `: có vẻ như đéo ai thích bạn nên tôi cũng đéo :D`,
        `: xin lỗi nhưng tôi đang muốn mua cái đầu của ${message.author.username} nên tôi không thể cho tiền.`
       ]
       var o = Math.floor(Math.random() * ok.length);
    const okk = ok[o]
       var breh1 = Math.floor(Math.random() * breh.length);
       var persons1 = Math.floor(Math.random() * persons.length);
       var bruh = breh[breh1]
       var person = persons[persons1]
       var num = Math.floor(Math.random() * 2) +0;
    if(num != 1) {
      client.add(message.author.id, muni, message)    
      message.reply(`${person}${bruh}`)
    } else if (num != 0){
      message.reply(`${person}${okk}`)
    }
      cooldown.add(message.author.id)
      setTimeout(() => {
        cooldown.delete(message.author.id)
      }, 20000)
      }
    }
}