const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NjkxNTgwOTYxNzMyNjg5OTMw.XniDvQ.GcAh4buPHdDj76pCMqwKzZuroX4'

bot.on('ready', () => {
  console.log('La Cafet, prête pour vous servir !');
});

const painChocImgURL = 'https://cdn.discordapp.com/attachments/689045425654988832/691575282263392356/9k.png';
const cafeImgURL = 'https://cdn.discordapp.com/attachments/689045425654988832/691575227477655632/Z.png';
//const coca


bot.on('message', message => {

    if(message.author.bot) return;

    if (message.content.includes('café')) {
      message.channel.send('Et un café pour ' + message.author.username +' !');
      message.channel.send(cafeImgURL);
    }

    if (message.content.includes('pain au chocolat')) {
      message.channel.send('Et un pain au chocolat pour ' + message.author.username +' !');
      message.channel.send(painChocImgURL);
    }

    if(message.content.includes('chocolatine')) {
      message.channel.send('ON DIT PAIN AU CHOCOLAT CONNARD !!!');
    }

});

bot.login(token);
