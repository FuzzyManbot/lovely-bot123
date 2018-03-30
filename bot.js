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
    if (message.content === 'soon say it please') {
    	message.reply('told me to say this: If you see me go offline then it is because daddy is working on me. Please talk to daddy if theres something wrong his tag is Fuzzy man#4885');
  	}
});

   if (fromID === me && text.includes("-say") ) {
       bot.sendMessage({ to: channel, message: txt.replace('!say ','') });
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
