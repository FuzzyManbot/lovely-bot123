const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "-";
client.on(message, (msg) => {
    if (msg.author.equals(client.user)) return;
    if (msg.channel.type == "dm") return;
    if (!msg.content.startsWith(prefix)) return;

    var message = msg.content.toLowerCase();
    var args = message.substring(prefix.length).split(" ");

if (args[0].endsWith == "announce") {
    var lD = prefix + args[0] + " ";
        var annouce= msg.content.substr(lD.length);

    let embed = new Discord.MessageEmbed()
        .addField('Annoucment', annouce)
        .setColor("GOLD");
msg.channel.send(embed);
}
})

client.login(NDI5MzUzNTY2MzE1MjE2ODk2.DaAqXg.ZdF1lV7hs24XcGOPfYsLdRXLHbk);
