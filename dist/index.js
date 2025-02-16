"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const dotenv = require("dotenv");
dotenv.config(); // Load environment variables
const client = new discord_js_1.Client({
    intents: [
        discord_js_1.GatewayIntentBits.Guilds,
        discord_js_1.GatewayIntentBits.GuildMessages,
        discord_js_1.GatewayIntentBits.MessageContent,
    ],
});
client.once('ready', () => {
    console.log(`✅ Logged in as ${client.user?.tag}!`);
});
client.on('messageCreate', (message) => {
    if (message.content === '!ping') {
        message.reply('Pong! 🏓');
    }
});
client.login(process.env.DISCORD_TOKEN);
// add basic express app in order to keep the bot alive
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Bot is alive!');
});
app.listen(3000, () => {
    console.log('Keep-alive server running...');
});
