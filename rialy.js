const Discord = require('discord.js');
const client = new Discord.Client();
const İşaret = require('./işaret.json');
const { Client, MessageEmbed } = require('discord.js')

var prefix = İşaret.prefix

client.on('ready', () => {
  console.log(`${client.user.tag} resmi discord botu başarıyla girdi!!`);
  client.user.setActivity('RialyNetwork', { type: 'PLAYING' })
  .then(presence => console.log(`Durum ==> ${presence.activities[0].name} oldu.`))
  .catch(console.error);
});

client.commands= new Discord.Collection();

client.on('message', message => {
  if(message.content.toLowerCase() === '!rialynetwork') {
    const kanal = new MessageEmbed()

    .setTitle('RialyNetwork')
    .addField('Keyifli Minecraft Sunucusu!')
    .setAuthor('RialyNetwork Minecraft Sunucusu')
    .setColor('RANDOM')
    .setThumbnail('https://cdn.discordapp.com/attachments/1023211353978196098/1023985977590558720/channels4_profile.png')
    message.channel.send(kanal);
  }
})

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'ip') {
    msg.channel.send('Sunucumuz şuan açılmamıştır.');
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === prefix + 'rialynetwork') {
    const sohbet = new MessageEmbed()

    .setTitle('RialyNetwork')
    .setDescription('Keyifli Minecraft Sunucusu')
    .setAuthor('RialyNetwork Resmi Discord Botu')
    .setColor("RANDOM")
    .setThumbnail('https://cdn.discordapp.com/attachments/1023211353978196098/1023985977590558720/channels4_profile.png')
    .addField(':hearts: RialyNetwork size söz vererek her zaman adaletli olacaktır!');
    message.channel.send(sohbet);
  }
});

client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith('!kick')) {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bunu yapmak için yetkin yok!')
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .kick()
          .then(() => {
          const log = message.guild.channels.cache.find(channel => channel.name === 'kicklenenler')
           log.send(`${user.tag} kişisi sunucudan kicklenmiştir`);
          })
          .catch(err => {
            message.channel.send('Bunu yapamam.');
            console.error(err);
          });
      } else {
        message.channel.send("Bahsettiğin kişi RialyNetwork sunucusunda bulunmuyor");
      }
    } else {
      message.channel.send("Atılacak kişiyi yazmadın!");
    }
  }
});

client.on('message', message => {
  if (!message.guild) return;
if (message.content.startsWith('!ban')) {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bunu yapmak için yeterli yetkin yok!')
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .ban()
          .then(() => {
          const log = message.guild.channels.cache.find(channel => channel.name === 'banlananlar')
           log.send(`${user.tag} kişisi banlanmıştır.`);
          })
          .catch(err => {
            message.channel.send('Bunu yapamam.');
            console.error(err);
          });
      } else {
        message.channel.send("Bahsettiğin kişi RialyNetwork sunucusunda bulunmuyor");
      }
    } else {
      message.channel.send("Yasaklanacak kişiyi yazmadın.");
    }
  }
});

client.on("message", message => {
  if (message.content.startsWith('!rolver')) {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bunu yapmak için yeterli yetkin yok!')
    let role = message.mentions.roles.first();
    let member = message.mentions.members.first();
    message.channel.send("Yetkiyi başarıyla verdim!")
    member.roles.add(role)
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa oçlar') {
    msg.delete()
    msg.author.send('O kelime burada yasaklı!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa mallar') {
    msg.delete()
    msg.author.send('O kelime burada yasaklı!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa annizi skm') {
    msg.delete()
    msg.author.send('O kelime burada yasaklı!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa annenizi sikeyim') {
    msg.delete()
    msg.author.send('O kelime burada yasaklı!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'yarrak') {
    msg.delete()
    msg.author.send('O kelime burada yasaklı!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa babanızı skym') {
    msg.delete()
    msg.author.send('O kelime burada yasaklı!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa babanızı sikeyim') {
    msg.delete()
    msg.author.send('O kelime burada yasaklı!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa şerefsizler') {
    msg.delete()
    msg.author.send('O kelime burada yasaklı!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa gerizekalılar') {
    msg.delete()
    msg.author.send('O kelime burada yasaklı!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'mal') {
    msg.delete()
    msg.author.send('O kelime burada yasaklı!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'salak') {
    msg.delete()
    msg.author.send('O kelime burada yasaklı!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'oç') {
    msg.delete()
    msg.author.send('O kelime burada yasaklı!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'şerefsiz') {
    msg.delete()
    msg.author.send('O kelime burada yasaklı!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === '') {
    msg.delete()
    msg.author.send('O kelime burada yasaklı!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === '31') {
    msg.delete()
    msg.author.send('O kelime burada yasaklı!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === '69') {
    msg.delete()
    msg.author.send('O kelime burada yasaklı!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'amina koyayim') {
    msg.delete()
    msg.author.send('O kelime burada yasaklı!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'bacini sikeyim') {
    msg.delete()
    msg.author.send('O kelime burada yasaklı!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'gelecekten geçmişini sikeyim') {
    msg.delete()
    msg.author.send('O kelime burada yasaklı!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'piç') {
    msg.delete()
    msg.author.send('O kelime burada yasaklı!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'orospu çocuklar') {
    msg.delete()
    msg.author.send('O kelime burada yasaklı!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'orospu çocukları') {
    msg.delete()
    msg.author.send('O kelime burada yasaklı!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'seni sikerim biliyor musun?') {
    msg.delete()
    msg.author.send('O kelime burada yasaklı!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'velet') {
    msg.delete()
    msg.author.send('O kelime burada yasaklı!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'orospu çocuğu') {
    msg.delete()
    msg.author.send('O kelime burada yasaklı!');
  }
});

client.login('MTAyMzYxNDYzMTE2NTU3OTI5NA.G8VhQa.YsHbFBXqap-MMYIGnryeBDNGllHNmtE0umBW5c');
