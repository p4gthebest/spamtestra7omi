const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("513309819612954624")
setInterval(function() {
channel.send(`**Road To 100 Credit**`);
})
});

client.on('message', message => {
    if(message.content === 'check the credit'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
     if(message.content === 'check the credit'){
        message.channel.send('#credit')
    }
});




client.login(process.env.BOT_TOKEN);
