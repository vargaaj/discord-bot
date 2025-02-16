import { Client, GatewayIntentBits } from 'discord.js';
import * as dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
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

app.get('/', (req: any, res: { send: (arg0: string) => void }) => {
  res.send('Bot is alive!');
});

app.listen(3000, () => {
  console.log('Keep-alive server running...');
});
