const Discord = require('discord.js');
const client = new Discord.Client();


client.on('message', message => {
    if(message.content === 'check'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === '#daily'){
        message.channel.send('#credit')
    }
});



client.on("ready", () => {
let channel =     client.channels.get("513309819612954624")
setInterval(function() {
channel.send(`**Road To 100 Credit**`);
})
});




client.login(process.env.BOT_TOKEN);
