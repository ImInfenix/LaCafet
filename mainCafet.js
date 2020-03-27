const Discord = require('discord.js');
const config = require('./config.json');
const bot = new Discord.Client();
const token = config.discord_bot_token;

bot.on('ready', () => {
  console.log('La Cafet, prête pour vous servir !');
});

var produits = {
  'Café' : 'https://cdn.discordapp.com/attachments/689045425654988832/691575227477655632/Z.png',
  'Chocolat chaud' : 'https://cdn.discordapp.com/attachments/691583463090028607/692033319885340682/th.png',
  'Coca' : 'https://cdn.discordapp.com/attachments/691583463090028607/691672063303483392/maxresdefault.jpg',
  'Croissant' : 'https://cdn.discordapp.com/attachments/692281267533905943/692297893725601802/th.png',
  'Jambon beurre' : 'https://cdn.discordapp.com/attachments/691583463090028607/691673410010611742/th.png',
  'Pain au chocolat' : 'https://cdn.discordapp.com/attachments/689045425654988832/691575282263392356/9k.png'
}

bot.on('message', message => {

    if(message.author.bot) return;

    if(message.channel.name === 'la-cafet')
    {

      let name = message.member.nickname;
      if(!name)
        name = message.author.username;

      let messageLow = message.content.toLowerCase();
      let channel = message.channel;

      for(let key in produits) {
        let value = produits[key];

        if (messageLow.includes(key.toLowerCase())) {
          channel.send('Et un ' + key.toLowerCase() + ' pour ' + name +' !');
          channel.send({files: [value]});
          console.log('Et un ' + key.toLowerCase() + ' pour ' + name +' !');
        }
      }

      if(messageLow.includes('chocolatine')) {
        channel.send('ON DIT PAIN AU CHOCOLAT !!!');
        console.log(name + ' pense qu\'on dit chocolatine...');
      }

      if(messageLow.includes('commander'))
      {
        let listeProduits = '========================================\nVoici les différentes choses que vous pouvez commander : \n';
        for(let key in produits)
          listeProduits += '\t- ' + key + '\n';
        listeProduits += '========================================';
        channel.send(listeProduits);
        console.log('Demande de la liste des commandes par ' + name);
      }

  }

});

function printDate() {
  console.log(new Date().toLocaleString("fr-FR", {timeZone: "Europe/Paris"}));
}

//setTimeout(function(){setInterval(printDate, 60 * 1000); printDate(); }, delay * 1000);
var dateAtLaunch = new Date();
var delay = 60 - dateAtLaunch.getSeconds();
setTimeout(function(){
  let delayMinutes = 60 - dateAtLaunch.getMinutes() - 1;
  if(delayMinutes < 0) delayMinutes = 0;
  setTimeout(function(){
    setInterval(printDate, 60 * 60 * 1000);
    printDate();
  }, delayMinutes * 60 * 1000);
  console.log('Premier appel dans ' + delayMinutes + 'minutes');
}, delay * 1000);

console.log("Logging...");
bot.login(token);
