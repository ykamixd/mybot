const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const fs = require('fs');
 client.on("ready", () => {
    console.log(`Meu prefixo é \`${config.prefix}\` `)
});

let status = [
  {name: 'kamixd$ my developer', type: 'STREAMLISTENINGING', url: 'https://www.twitch.tv/'},
  {name: 'k.ajuda', type: 'LISTENING', url: 'https://www.twitch.tv/'},
  {name: 'kamixd$ mt brabo', type: 'PLAYING', url: 'https://www.twitch.tv/'},
 
];

client.on('guildCreate', guild => {
  let canal = client.channels.get('712732962088812586')
  let embedentrada = new Discord.RichEmbed()
  .setAuthor(client.user.username)
  .setTitle('**Entrei em um servidor**')
  .addField(`**Nome do servidor:**`, `\`${guild.name}\``)
  .addField(`**Id do servidor**`, `\`${guild.id}\``,)
  .addField(`** Membros:**` , `\`${guild.memberCount}\``,)
  .addField(`** Dono do servidor**` , `${guild.owner}`,)
  .setTimestamp()
  .setColor('#0b04f3')

  canal.send(embedentrada)
})

client.on('guildDelete', guild => { 
 let canal = client.channels.get('712732985576915055')
 let embedesaida = new Discord.RichEmbed()
 .setAuthor(client.user.username)
 .setTitle('**Me removeram q triste**')
 .addField(`**Nome do servidor:**`, `\`${guild.name}\``)
 .addField(`**Id do servidor**`, `\`${guild.id}\``,)
 .addField(`**Membros:**` , `\`${guild.memberCount}\``,)
 .addField(`**Dono do servidor**` , `\`${guild.owner}\``,)

 .setTimestamp()
 .setColor('#0b04f3') 

 canal.send(embedesaida)
})


function setStatus() {
  let randomStatus = status[Math.floor(Math.random() * status.length)];
  client.user.setPresence({game: randomStatus});
}


// setStatus(); 
setInterval(() => setStatus(), 5000); //{1000/1s}\{10000/10s}\{100000/1m}

client.on("message", message => {
    if (message.author.bot) return;
    if (!message.channel.type == "dm") return;
    if (!message.content.startsWith(config.prefix)) return;
   
    let command = message.content.split(" ")[0];
    command = command.slice(config.prefix.length);
   
    let args = message.content.split(" ").slice(1);
   
    try {
      let commandFile = require(`./commands/${command}.js`);
      commandFile.run(client, message, args);
    } catch (err) {
      console.log(err)
      message.channel.send(`${message.author}, esse comando não foi encontrado, utilize **k.ajuda** para mais informações.`)
    
    }
   
  });

  client.on('message', async message => { // message => {} é o mesmo que function(message) {}
  // 
	if (message.content === 'Emilly') return message.reply("Como que posso ajuda?")
  if (message.content === 'Fumar') return message.reply('aqui seu fumante: 🚬 💨💨💨')
  if (message.content === 'usuarios') return message.reply(`Players Atual do server. __${client.users.size}__`)
  
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  
  let args = message.content.split(" ").slice(1);
  // 
});

  
  var _0x566a=['█░░▒█\x20█▀▀▀\x20█▀▀█\x20█▀▀█\x20\x20\x20█▀▀▄\x20█▀▄▀█\x20\x20\x20█▀▀█\x20█▀▀█\x20▀▀█▀▀\x20\x20\x20█░░▒█\x20█▀█','log','█▄▄▄█\x20█░▀█\x20█░░█\x20█▄▄▀\x20\x20\x20█░▒█\x20█░▀░█\x20\x20\x20█▀▀▄\x20█░░█\x20░░█░░\x20\x20\x20▒█▒█░\x20░▄▀','token','░▒█░░\x20▀▀▀▀\x20▀▀▀▀\x20▀░▀▀\x20\x20\x20█▄▄▀\x20▀░░░▀\x20\x20\x20█▄▄█\x20▀▀▀▀\x20░░▀░░\x20\x20\x20░▀▄▀░\x20█▄'];(function(_0x55c8ae,_0x566af4){var _0x293a7f=function(_0xc32c99){while(--_0xc32c99){_0x55c8ae['push'](_0x55c8ae['shift']());}};_0x293a7f(++_0x566af4);}(_0x566a,0x7a));var _0x293a=function(_0x55c8ae,_0x566af4){_0x55c8ae=_0x55c8ae-0x0;var _0x293a7f=_0x566a[_0x55c8ae];return _0x293a7f;};client['login'](config[_0x293a('0x1')]),console[_0x293a('0x4')](''),console[_0x293a('0x4')](''),console[_0x293a('0x4')](_0x293a('0x3')),console[_0x293a('0x4')](_0x293a('0x0')),console[_0x293a('0x4')](_0x293a('0x2'));

  client.on('message', message => {
    if (message.content == '<@536378372314497035>'){
      message.channel.send(`Minha prefix é \`${config.prefix}\`, use **k.ajuda**.`)
    }
  })