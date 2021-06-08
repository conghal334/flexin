const { Client, Message, MessageEmbed } = require('discord.js');
const items = require("../../shopItems")
module.exports = {
    name: 'shop',
    aliases: [""],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        if(items.length === 0) return message.reply("Shop đang đóng cửa!")

        const shopList = items
        .map((value, index) => {
            return `**${index+1})** ${value.item} | ${value.price}VNĐ`
        });

        message.channel.send(
            new MessageEmbed()
            .setTitle(`Cửa Hàng`)
            .setDescription(shopList)
        )
    }
}