const Discord = require('discord.js');
const client = new Discord.Client();


client.on('message', message => {
    if(message.content === 'حيدر'){
        message.channel.send('يوسف')
    }
});

client.on('message', message => {
    if(message.content === 'يوسف'){
        message.channel.send('الو')
    }
});



client.on('message', message => {
    if(message.content === 'الو'){
        message.channel.send('هلا')
    }
});



client.on('message', message => {
    if(message.content === 'هلا'){
        message.channel.send('كيفك')
    }
});




client.on('message', message => {
    if(message.content === 'كيفك'){
        message.channel.send('تمام')
    }
});






client.on('message', message => {
    if(message.content === 'حيدر'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === 'يوسف'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === 'الو'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === 'هلا'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === 'كيفك'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === 'تمام'){
        message.channel.send('#daily')
    }
});






client.on('message', message => {
    if(message.content === '#daily'){
        message.channel.send('#credit')
    }
});


client.on('message', message => {
    if(message.content === '#credit'){
        message.channel.send('حيدر')
    }
});



client.login(process.env.BOT_TOKEN);
