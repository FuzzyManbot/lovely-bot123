const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

client.on('message', message => {
    if (message.content === 'Son') {
    	message.reply('yes daddy?');
  	}
});

client.on('message', message => {
    if (message.content === 'did you do your homework?') {
    	message.reply('yes i did daddy dont spank me');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
