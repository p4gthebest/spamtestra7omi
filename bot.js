const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("513309819612954624")
setInterval(function() {
channel.send(`**Road To 100 Credit**`);
}, 25)
})


client.on("ready", () => {
let channel =     client.channels.get("513309819612954624")
setInterval(function() {
channel.send(`#credit`);
}, 25)
})

client.on("ready", () => {
let channel =     client.channels.get("513309819612954624")
setInterval(function() {
channel.send(`#daily`);
}, 25)
})

client.login(process.env.BOT_TOKEN);
