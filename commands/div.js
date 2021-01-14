const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  
  message.channel.send(`Estou sendo divulgada para (${client.users.size}) Membros `)
  
    var div = new Discord.RichEmbed()

    .setTitle(' Mayzinha ')
    .setDescription('Olá, me chamo Kahhzinha, sou um bot focado em anúncios e divulgação, estou aqui para por seu servidor no topo.')
    .addField(' Poderia me adicionar em seu servidor?', `**[Convite](https://discord.com/oauth2/authorize?client_id=799362184218935316&scope=bot&permissions=8)**`)
    .addField(' Minhas informações:', `Para divulgar em seu servidor ultilze \`k.anunciar\`, após dar esse comando você espera que a mensagem chegarar para os membros. `)
    .setTimestamp()
    .setColor("RANDOM")
    .setImage(`https://i.pinimg.com/originals/f3/e3/06/f3e30630e8de317f2ae325ce38aa7d39.gif`)

    client.users.forEach(message => {
        message.send(div)
        
       })
     }