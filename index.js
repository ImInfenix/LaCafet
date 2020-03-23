const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NjkxNTgwOTYxNzMyNjg5OTMw.XnjTqg.QFWF_vo3H3peBTn3HewAK7F0x5Y'

bot.on('ready', () => {
  console.log('La Cafet, prête pour vous servir !');
});

const painChocImgURL = 'https://cdn.discordapp.com/attachments/689045425654988832/691575282263392356/9k.png';
const cafeImgURL = 'https://cdn.discordapp.com/attachments/689045425654988832/691575227477655632/Z.png';
const cocaImgURL = 'https://cdn.discordapp.com/attachments/691583463090028607/691672063303483392/maxresdefault.jpg';
const jambonBeurreImgURL = 'https://cdn.discordapp.com/attachments/691583463090028607/691673410010611742/th.png';

bot.on('message', message => {

    if(message.author.bot) return;

    if (message.content.includes('café')) {
      message.channel.send('Et un café pour ' + message.member.nickname +' !');
      message.channel.send({files: [cafeImgURL]});
    }

    if (message.content.includes('pain au chocolat')) {
      message.channel.send('Et un pain au chocolat pour ' + message.member.nickname +' !');
      message.channel.send({files: [painChocImgURL]});
    }

    if(message.content.includes('chocolatine')) {
      message.channel.send('ON DIT PAIN AU CHOCOLAT CONNARD !!!');
    }

    if (message.content.includes('coca')) {
      message.channel.send('Et un coca pour ' + message.member.nickname +' !');
      message.channel.send({files: [cocaImgURL]});
    }

    if(message.content.includes('jambon beurre')) {
      message.channel.send('Et un jambon beurre pour ' + message.member.nickname +' !');
      message.channel.send({files: [jambonBeurreImgURL]});
    }

    if(message.content.includes('commander'))
    {
      message.channel.send('========================================\n' +
                          'Voici les différentes choses que vous pouvez commander : \n' +
                          '\t- Café\n' +
                          '\t- Coca\n' +
                          '\t- Sandwich Jambon Beurre\n' +
                          '\t- Pain au chocolat\n' +
                          '========================================');
    }

});

console.log("Logging !");
bot.login(token);
