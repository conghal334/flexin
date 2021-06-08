const { Client, Message, MessageEmbed } = require('discord.js');
const inventory = require('../../packages/models/inventory.js');
const items = require("../../shopItems.js")
module.exports = {
    name: 'buy',
    aliases: [""],
    description: "Mua đồ trong cửa hàng",
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        if(!args[0]) return message.reply(`Mày muốn mua lồn gì`)
        const itemToBuy = args[0].toLowerCase()

        const validItem = !!items.find((val) => val.item.toLowerCase() === itemToBuy);
        if(!validItem) return message.reply(`Item đó không hề tồn tại`);

        const itemPrice = items.find((val) => (val.item.toLowerCase()) === itemToBuy).price;

        const userBalance = await client.bal(message.author.id);
        if(userBalance < itemPrice) return message.reply(`Mày có ${userBalance}VNĐ, giá của ITEM là ${itemPrice}VNĐ!`)

        const params = {
            User: message.author.id
        }
        inventory.findOne(params, async(err, data) => {
            if(data) {
                const hasItem = Object.keys(data.Inventory).includes(itemToBuy);
                if(!hasItem) {
                    data.Inventory[itemToBuy] = 1;
                } else {
                    data.Inventory[itemToBuy]++
                }
                // console.log(data)
                await inventory.findOneAndUpdate(params, data);
            } else {
                new inventory({
                    User: message.author.id,
                    Inventory: {
                        [itemToBuy]: 1
                    }
                }).save();
            }
            message.reply(`Bạn đã mua ${itemToBuy}`);
            client.rmv(message.author.id, itemPrice);
        })
    }
}