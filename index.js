const Discord = require('discord.js');
const config = require('./config.json');
const bot = new Discord.Client();
const token = config.discord_bot_token;

bot.on('ready', () => {
  console.log('La Cafet, prête pour vous servir !');
});

const painChocImgURL = 'https://cdn.discordapp.com/attachments/689045425654988832/691575282263392356/9k.png';
const cafeImgURL = 'https://cdn.discordapp.com/attachments/689045425654988832/691575227477655632/Z.png';
const cocaImgURL = 'https://cdn.discordapp.com/attachments/691583463090028607/691672063303483392/maxresdefault.jpg';
const jambonBeurreImgURL = 'https://cdn.discordapp.com/attachments/691583463090028607/691673410010611742/th.png';
const chocolatChaudImgURL = 'https://cdn.discordapp.com/attachments/691583463090028607/692033319885340682/th.png';

bot.on('message', message => {

    if(message.author.bot) return;

    if(message.channel.name === 'la-cafet')
    {

      var name = message.member.nickname;
      if(!name || name === 'undefined')
        name = message.author.username;

      if (message.content.includes('café')) {
        message.channel.send('Et un café pour ' + name +' !');
        message.channel.send({files: [cafeImgURL]});
        console.log('Et un café pour ' + name +' !');
      }

      if (message.content.includes('pain au chocolat')) {
        message.channel.send('Et un pain au chocolat pour ' + name +' !');
        message.channel.send({files: [painChocImgURL]});
        console.log('Et un pain au chocolat pour ' + name +' !');
      }

      if(message.content.includes('chocolatine')) {
        message.channel.send('ON DIT PAIN AU CHOCOLAT !!!');
        console.log(name + ' pense qu\'on dit chocolatine...');
      }

      if (message.content.includes('coca')) {
        message.channel.send('Et un coca pour ' + name +' !');
        message.channel.send({files: [cocaImgURL]});
        console.log('Et un coca pour ' + name +' !');
      }

      if(message.content.includes('jambon beurre')) {
        message.channel.send('Et un jambon beurre pour ' + name +' !');
        message.channel.send({files: [jambonBeurreImgURL]});
        console.log('Et un jambon beurre pour ' + name +' !');
      }

      if(message.content.includes('chocolat chaud')) {
        message.channel.send('Et un chocolat chaud pour ' + name +' !');
        message.channel.send({files: [chocolatChaudImgURL]});
        console.log('Et un chocolat chaud pour ' + name +' !');
      }

      if(message.content.includes('commander'))
      {
        message.channel.send('========================================\n' +
                            'Voici les différentes choses que vous pouvez commander : \n' +
                            '\t- Café\n' +
                            '\t- Coca\n' +
                            '\t- Sandwich Jambon Beurre\n' +
                            '\t- Pain au chocolat\n' +
                            '\t- Chocolat chaud\n' +
                            '========================================');
        console.log('Demande de la liste des commandes par ' + name);
      }

  }

});

console.log("Logging !");
bot.login(token);
