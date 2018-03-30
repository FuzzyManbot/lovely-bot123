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
    if (message.content === 'announcement-for-30.03.2018-22-20') {
    	message.reply(' Told me to say this: Fuzzy will be taking me to bed for some time. I will be offline during this period! Either Fuzzy is just fixing some bugs or either hes adding some super super super cool stuff! to me!');
  	}
});

  

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
