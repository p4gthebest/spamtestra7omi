const Discord = require('discord.js');
const client = new Discord.Client();


client.on("ready", () => {
let channel =     client.channels.get("509316968193458176")
setInterval(function() {
channel.send(`**Road To 100 Credit**`);
}, 25)
})


client.login(process.env.BOT_TOKEN);
