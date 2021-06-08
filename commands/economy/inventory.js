const { Client, Message, MessageEmbed } = require('discord.js');
const inventory = require("../../packages/models/inventory")
module.exports = {
    name: 'inventory',
    aliases: ['inv'],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        inventory.findOne({ User: message.author.id }, async(err, data) => {
            if(!data) return message.channel.send(`Túi đồ trống!`)
            const mappedData = Object.keys(data.Inventory).map((key) => {
                return `${key}(${data.Inventory[key]})`
            }).join("\n\n");
            message.channel.send(
                new MessageEmbed()
                .setTitle(`Túi`)
                .setDescription(mappedData)
                .setColor("RANDOM")
            )
        });
    }
}