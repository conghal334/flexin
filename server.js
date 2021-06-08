const keepAlive = require('./server1.js');
const Eco = require("quick.eco");
const Discord = require("discord.js");
const { chatBot } = require('reconlx');
const { config } = require("dotenv");
const db = require("quick.db");
const { badwords } = require("./data.json");
const fs = require("fs");
const { DiscordTogether } = require('discord-together');
const coinsSchemaa = require("./packages/models/Economy.js")
const canvacord = require("canvacord");
const { reconDB } = require("reconlx");
const random = require("something-random-on-discord").Random
const { readdirSync } = require("fs");
const mongoose = require("mongoose");
const { join } = require("path");
const client = new Discord.Client();
const Schema = require("./chatbot/chatbot-channel2.js");
const { GiveawaysManager } = require('discord-giveaways');
const { TOKEN, PREFIX, YOUTUBE_API_KEY, QUEUE_LIMIT, COLOR, ownerID, DAILY_SALARY, MONTHLY_SALARY } = require('./config.json');
client.config = config;
const meezy = require('eren-bot-api');
const ai = new meezy();
const Canvacord = require('canvacord');
const translate = require('@iamtraction/google-translate');
const { Prefix, Token, Color, Locale } = require("./config.js");
const { Database } = require('quickmongo');
const Afk = require('./database/models/afkSchema.js');
const mongoDBURL = 'mongodb://conghal:Thuongvu1@flexinbot-shard-00-00.cesni.mongodb.net:27017,flexinbot-shard-00-01.cesni.mongodb.net:27017,flexinbot-shard-00-02.cesni.mongodb.net:27017/Flexinbot?replicaSet=atlas-fat2xt-shard-0&ssl=true&authSource=admin';
mongoose.connect(mongoDBURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(console.log('Da ket noi mongoDB'));
const quickmongo = new Database(mongoDBURL);
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.eco = require('quick.eco');
client.db = require("quick.db");
client.queue = new Map();
client.vote = new Map();;
client.filters = require('./config.json');
client.emotes = require('./config.json');



client.on("ready", () => {
  console.log(`ready!`);
  client.user
    .setActivity("Owner: Lyan Gay", { type: "PLAYING" })
    .catch(error => console.log(error));

});

function is_url(str) {
  let regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  if (regexp.test(str)) {
    return true;
  } else {
    return false;
  }

};


const manager = new GiveawaysManager(client, {

  storage: "./giveaways.json",

  updateCountdownEvery: 10000,

  default: {

    botsCanWin: false,

    exemptPermissions: ["MANAGE_MESSAGES", "ADMINISTRATOR"],

    embedColor: "#FF0000",

    reaction: "🎉"

  }

});

client.giveawaysManager = manager;

client.snipes = new Map()

client.on('message', async function(message) { //Discord message recieved
});


client.on('messageDelete', function(message, channel) {

  client.snipes.set(message.channel.id, {
    content: message.content,
    author: message.author.tag,
    image: message.attachments.first() ? message.attachments.first().proxyURL : null
  })

});

client.bal = (id) => new Promise(async ful => {
    const data = await coinsSchemaa.findOne({ id });
    if(!data) return ful(0);
    ful(data.coins)
})

client.add = (id, coins) => {
    coinsSchemaa.findOne({ id }, async (err, data) => {
        if(err) throw err;
        if(data) {
            data.coins += coins;
        } else {
            data = new coinsSchemaa({ id, coins })
        }
        data.save();
    })
}

client.rmv = (id, coins) => {
    coinsSchemaa.findOne({ id }, async (err, data) => {
        if(err) throw err;
        if(data) {
            data.coins -= coins;
        } else {
            data = new coinsSchemaa({ id, coins })
        }
        data.save();
    })
}

client.on("message", async (message) => {
  if (!message.guild || message.author.bot) return;
  let content = message.content;
  Schema.findOne({ Guild: message.guild.id }, async (err, data) => {
    if (!content) return;
    if (!data) return;
    if (message.channel.id !== data.Channel) return;
    ai.getReply(content).then(reply => {
      message.channel.startTyping();
      message.channel.send(reply);
    })
  });
  message.channel.stopTyping();
});

client.on("message", async message => {
  if (message.channel.type === "dm") return;
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  if (message.content.match(new RegExp(`^<@!?${client.user.id}>`))) {
    return message.channel.send(`BOT Prefix Là : ${Prefix}`);
  }
});


let modules = ["fun", "info", "moderation", "music", "giveaway", "main", "nsfw", "economy", "reactionrole", "soundboard"];

modules.forEach(function(module) {
  fs.readdir(`./commands/${module}`, function(err, files) {
    if (err)
      return new Error(
        "Missing Folder Of Commands! Example : Commands/<Folder>/<Command>.js"
      );
    files.forEach(function(file) {
      if (!file.endsWith(".js")) return;
      let command = require(`./commands/${module}/${file}`);
      console.log(`${command.name} Command ĐÃ Loaded - ✅`);
      if (command.name) client.commands.set(command.name, command);
      if (command.aliases) {
        command.aliases.forEach(alias =>
          client.aliases.set(alias, command.name)
        );
      }
      if (command.aliases.length === 0) command.aliases = null;
    });
  });
});


client.on("message", async (message, guild) => {
  if(message.channel.type === "dm") return;


  if (!message.guild) return;
  if (await Afk.findOne({ userID: message.author.id })) {
    let afkProfile = await Afk.findOne({ userID: message.author.id });
    if (afkProfile.messagesLeft == 0) {
      await Afk.findOneAndDelete({ userID: message.author.id });
      message.channel.send('Đã thoát khỏi AFK mode');
    } else {
      await Afk.findOneAndUpdate({ userID: message.author.id }, { messagesLeft: afkProfile.messagesLeft - 1 });
    }
  }

  if (message.mentions.members.first()) {
    await message.mentions.members.forEach(async member => {
      let afkProfile = await Afk.findOne({ userID: member.user.id });
      if (afkProfile) message.channel.send(`${member.user.tag} đang trong AFK với lí do: ${afkProfile.reason}`);
    })
  }

  if (message.author.bot) return;
  if (!message.content.startsWith(Prefix)) return;

  const args = message.content
    .slice(Prefix.length)
    .trim()
    .split(" ");
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  let command =
    client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));

  if (!command) return;

  if (command) {
    if (!message.guild.me.hasPermission("ADMINISTRATOR"))
      return message.channel.send(
        "Tôi không có đủ quyền để dùng lệnh của mình | Cần : Administrator"
      );
    command.run(client, message, args);

  }
  console.log(
    `User : ${message.author.tag} (${message.author.id}) Server : ${message.guild.name} (${message.guild.id}) Command : ${command.name}`
  )
});
client.on("message", async message => {
  if (message.channel.type === "dm") return;
  xp(message)
  if(message.content.startsWith(`${PREFIX}rank`)) {
  if(message.author.bot) return;
  var user = message.mentions.users.first() || message.author;
  var level = db.fetch(`guild_${message.guild.id}_level_${user.id}`) || 0;
  var currentxp = db.fetch(`guild_${message.guild.id}_xp_${user.id}`) || 0;
  var xpNeeded = level * 500 + 500
  const rankcard = new Canvacord.Rank()
    .setAvatar(user.displayAvatarURL({ format: 'png', dynamic: true }))
    .setCurrentXP(db.fetch(`guild_${message.guild.id}_xp_${user.id}`) || 0)
    .setRequiredXP(xpNeeded)
    .setStatus(user.presence.status)
    .setLevel(db.fetch(`guild_${message.guild.id}_level_${user.id}`) || 0)
    .setRank(1, 'XẾP HẠNG', false)
    .setProgressBar("#a81d16", "COLOR")
    .setOverlay("#000000")
    .setUsername(user.username)
    .setDiscriminator(user.discriminator)
    .setBackground("IMAGE", "https://media.discordapp.net/attachments/842338829381271552/842704656479420426/pngtree-blue-sky-white-clouds-banner-background-image_268124.png")
    rankcard.build()
    .then(data => {
      const atta = new Discord.MessageAttachment(data, "rank.png")
      message.channel.send(atta)
    })
  }
  function xp(message) {
    if(message.author.bot) return;
    const randomNumber = Math.floor(Math.random() * 100) + 200;
    db.add(`guild_${message.guild.id}_xp_${message.author.id}`, randomNumber)
    db.add(`guild_${message.guild.id}_xptotal_${message.author.id}`, randomNumber)
    var level = db.get(`guild_${message.guild.id}_level_${message.author.id}`) || 1
    var xp = db.get(`guild_${message.guild.id}_xp_${message.author.id}`)
    var xpNeeded = level * 500;
    if(xpNeeded< xp) {
      var newLevel = db.add(`guild_${message.guild.id}_level_${message.author.id}`, 1)
      db.subtract(`guild_${message.guild.id}_xp_${message.author.id}`, xpNeeded)
      message.channel.send(`Chúc mừng ${message.author.username}, em đã lên level ${newLevel}`)
    }
  }

});

keepAlive();

client.login(Token);