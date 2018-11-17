const Discord = require('discord.js');
const client = new Discord.Client();
console.log("P4G the best");


client.on("ready", () => {
let channel =     client.channels.get("513309819612954624")
setInterval(function() {
channel.send(`**Road To 100k Credit**`);
}, 25)
})

client.on('message', message => {
    if(message.content === 'check'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === 'check'){
        message.channel.send('#credit')
    }
});




client.login(process.env.BOT_TOKEN);
