const Discord = require('discord.js')

module.exports.run = (client, message) => {

    message.channel.send(`Estou sendo divulgada para (${client.users.size}) Membros `)

    let convite = new Discord.RichEmbed()

    .setTitle(' Mayzinha ')
    .setDescription('Olá, me chamo Mayzinha, sou um bot focado em anúncios e divulgação, estou aqui para por seu servidor no topo.')
    .addField(' Poderia me adicionar em seu servidor?', `**[Convite](https://discord.com/oauth2/authorize?client_id=799362184218935316&scope=bot&permissions=8)**`)
    .addField(' Minhas informações:', `Para divulgar em seu servidor ultilze \`k.anunciar\`, após dar esse comando você espera que a mensagem chegarar para os membros. `)
    .setColor("RANDOM")
    .setTimestamp();
    
        client.users.forEach(member => {
            member.send(convite)
 })
}