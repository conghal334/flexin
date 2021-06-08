    const Discord = require('discord.js');
            const config = require('../../config.json');
            
            module.exports = {
              name: "snake",
              aliases: [""],
             run: async (client, message, args) => {
    const SnakeGame = require('snakecord');

    const snakeGame = new SnakeGame({
    title: '🎀 Rắn săn mồi 🎀',
    color: "#ff3333",
    timestamp: true,
    gameOverTitle: "🎀 Trò chơi kết thúc 🎀"
    })
    snakeGame.newGame(message);
            }
            };
