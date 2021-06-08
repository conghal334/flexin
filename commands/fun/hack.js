const { MessageEmbed } = require("discord.js");
const ms = require("ms")
 
module.exports = {
    name: "hack",
    aliases: [""],
    description: "Hack một tài khoản Discord (Ngiêm túc)",
    category: "Fun",
    run: async(client, message, args) => {
      message.delete();
 
        var passwords = [
            "randompass",
            "tv464346",
            "adgrgsd352",
            "sdf4524",
            "Thất bại",
            "ukbg8nmeuh",
            "hfmea7nce7",
            "98pys94cxy",
            "28fpx5pre4",
            "wckm7r4r3t",
            "dfckwf2z7t",
            "dk4tbtv8jd",
            "mszxd78t69",
            "jcknhc8fyz",
            "m7dpwketyj",
            "fva4mbb328",
            "yhdcfav7m9",
            "fbsup65mw7",
            "7cp3tkmkuk",
            "tuupy5um42",
            "c66u2h9qyp",
            "saj2ufze3n",
            "ty7afyxc6e",
            "kwf7t5x2yu",
            "vkvpm738uj",
            "6vzkzafjxg",
            "kzdwh2f3rs",
            "9quyxe88mf",
            "3u42h2shyf",
            "rqp9brn3cp",
            "e45juaum9h",
            "8vf8hx7bsz",
            "hpyah5u6e3",
            "3ebbjycmdg",
            "qwq8vkf7wt",
            "ctsmdx564g",
            "xvkpgk38yq",
            "2gpfhrsmx5",
            "62k6rnguhu",
            "wzpm34d94c",
            "d8se5t5mw4",
            "rddbsvz6fj",
            "rc6pztvepa",
            "4fj29usvg4",
            "ey7y7efepz",
            "8cy586gk8c",
            "hmat2ys2cy",
            "jjqx57ddpt",
            "9xqffkgxb3",
            "49p44qsb4c",
            "tk2ew7j26g",
            "yt564nrsgr",
            "wh6aazp8sg",
            "ktansj6tg2",
            "3pd88myvdw",
            "7mjj62cux4",
            "d24c3cusdc",
            "67kkdvcgs5",
            "9cg5p2nrhv",
            "2sjuknes9r",
            "bykzmhp6xm",
            "zjbu4pve48",
            "ecd3fze7qz",
            "xw9v9shn37",
            "gdcsx4r6gm",
            "ydf3qdqm24"
        ]
        const password = passwords[Math.floor(Math.random() * passwords.length )];
 
        var emails = [
            "ilike002bot@yahoo.com",
            "83hsaadadad@npm.js",
            "pornhubprenium@duconmemay",
            "duchoa_phan87@gmail.com",
            "quanglam90@gmail.com",
            "phuclam_mai@gmail.com",
            "hoaithanh.phan@hotmail.com",
            "lacphuc48@yahoo.com",
            "thuhoai.nguyen@hotmail.com",
            "xuanhien.vu88@yahoo.com",
            "toanthang.ngo@gmail.com",
            "hoahiep_duong@gmail.com",
            "nhatthuong_ngo@gmail.com",
            "quangtrieu_dang@gmail.com",
            "huuhiep68@gmail.com",
            "totam_phung@hotmail.com",
            "thanhkien_tran73@yahoo.com",
            "huychieu.truong52@yahoo.com",
            "trunganh_tang@hotmail.com",
            "thuynga.lam@yahoo.com",
            "huutu_dang4@yahoo.com",
            "anhchi69@hotmail.com",
            "ngocly.tang43@hotmail.com",
            "vanphi.ha@hotmail.com",
            "ngochue.duong@yahoo.com",
            "duchanh.duong1@gmail.com",
            "phuonglinh_do23@gmail.com",
            "thaiduong_truong@yahoo.com",
            "xuanquy95@hotmail.com",
            "thienlac_dao@hotmail.com",
            "kimtuyen11@hotmail.com",
            "maikhanh.vu@hotmail.com",
            "viethuong_bui@yahoo.com",
            "nhuquan10@hotmail.com",
            "manhcuong_dao@hotmail.com",
            "thuthuan_lam16@hotmail.com",
            "duyhung_ha65@hotmail.com",
            "viettan_nguyen@hotmail.com",
            "minhhien.dao48@hotmail.com",
            "khaica84@yahoo.com",
            "phuonglan.tang@yahoo.com",
            "dinhngan_ho@hotmail.com",
            "lienchi.mai53@hotmail.com",
            "thanhthanh_vu65@hotmail.com",
            "quykhanh_bui72@gmail.com",
            "linhgiang.ngo@hotmail.com",
            "_69@hotmail.com",
            "tiffany_thompson73@yahoo.com",
            "brando42@hotmail.com",
            "julie_marquardt@gmail.com",
            "herta_krajcik@gmail.com"
        ]
        const email = emails[Math.floor(Math.random() * emails.length )];
 
        var nitros = [
            "https://discord.gift/ksxUskdGzBVrEPxz",
            "https://discord.gift/rZfpAa6tHHVzh8xp",
            "https://discord.gift/zgw53tjrkWfgHULj",
            "https://discord.gift/DMWJzgB8M83JwxtX",
            "https://discord.gift/kgSZFXqgsT5mHUvS",
            "https://discord.gift/BMKSHESKgMVs6beh",
            "https://discord.gift/JmXtxtUXwLtnf9A4",
            "https://discord.gift/YsXvHXfjerud3cDe",
            "https://discord.gift/ezup7UAux7m9p9Sg",
            "https://discord.gift/sFZUJDYpQA63kDTp",
            "https://discord.gift/Dgjy8FrrufmStGp5",
            "https://discord.gift/7skrEQcNZDYMY4np",
            "https://discord.gift/Sv3Ag772B6RZWftK",
            "https://discord.gift/zBc6zYyFxdSVyGdQ",
            "https://discord.gift/U8wmAVV7FhwrfZYC",
            "https://discord.gift/RvJRUfbNMxD5pn8C",
            "https://discord.gift/3WjhxgStuMvp8Mwp",
            "https://discord.gift/DbGmJz3aja96NF6R",
            "https://discord.gift/jNpRgSDu78mk9CBV",
            "https://discord.gift/QG4tCZ7W86MZhzyz",
            "https://discord.gift/6V3cmrR4fmJKC36m",
            "https://discord.gift/YBpFLH5sSp89qaP8",
            "https://discord.gift/jU2KvbdswyANmHLS",
            "https://discord.gift/FF9BnSEQ2L4U3ACz",
            "https://discord.gift/KzJkMCdD544e6L6H",
            "https://discord.gift/myjJdaMrYW482Quz",
            "https://discord.gift/XTPU9xwGU6r8TUE9",
            "https://discord.gift/nUqguV7VYE8BAfqV",
            "https://discord.gift/mFSd98MjGSSehk8N",
            "https://discord.gift/gvZ98rYdj4TydJB5",
            "https://discord.gift/wxymSPVZN3MaFcFg",
            "https://discord.gift/gZHscuGPejCKRG6x",
            "https://discord.gift/mCKWmGcG5xf2zuGh",
            "https://discord.gift/qDvX9Fw7bs4EBuZS",
            "https://discord.gift/nT3J77qvuUU9wzzM",
            "https://discord.gift/HsYeVCWAw9QxSMEH",
            "https://discord.gift/VXfJR3tax7jPByTB",
            "https://discord.gift/whPWnspyn2gujPn6",
            "https://discord.gift/R8GHy9CLw7L3Pgne",
            "https://discord.gift/hQpa9yaqTnyPwkSD",
            "https://discord.gift/X7HYLhjU4ft3KRP7",
            "https://discord.gift/wC4yvX96vKrt9r6u",
            "https://discord.gift/e9XWhwt6B948my4d",
            "https://discord.gift/zbMrCmPd3X92zxCD",
            "https://discord.gift/tBwP95QgTvuaRay9",
            "https://discord.gift/828RTPDt9YAayJFh"
        ]
        const nitro = nitros[Math.floor(Math.random() * nitros.length )];
        let nitro2 = "<a:nitroboost:840630758669942812>"
        let loading = "<a:loading:840636152122048552>"
        let done = "<a:black_verfied:841304824141053952>"
      
 
        let hack = message.mentions.users.first() || message.guild.members.cache.random().user;
        let twofa = Math.floor(Math.random(111111)*999999)
 
        let msg = await message.channel.send(`Bắt đầu hack ${hack}...`)
        msg.channel.startTyping()
        var time = "3s"
        setTimeout(function(){
           msg.edit(`${loading} Thông tin tài khoản:
    Email: ** ${email} **
    Password: ** ${password} **
           `)
        }, ms(time))
        var time1 = "6s"
        setTimeout(function(){
            msg.edit(`${loading} Đã tạo mã 2FA: **${twofa}**`)
        }, ms(time1))
        var time2 = "9s"
        setTimeout(function(){
            msg.edit(`${loading} Đăng nhập thành công`)
        }, ms(time2))
        var time3 = "13s"
        setTimeout(function(){
            msg.edit(`${nitro2} Đã hack Nitro: ** ${nitro} **`)
        }, ms(time3))
        var time4 = "15s"
        setTimeout(function(){
            msg.edit(`${nitro2} Đã trộm nitro`)
        }, ms(time4))
        var time5 = "18s"
        setTimeout(function(){
            msg.edit(`${loading} Đã hack màn hình thiết bị`)
            msg.channel.stopTyping()
        }, ms(time5))
        var time6 = "21s"
        setTimeout(function(){
            msg.edit(`${done} Hack tài khoản thành công`)
        }, ms(time6))
    }
}