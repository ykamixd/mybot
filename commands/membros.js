const Discord = require("discord.js");

exports.run = (client, message, args) => {

    let sicon = message.guild.iconURL;
    let online = message.guilds.members.size.filter(a => a.presence.status == "online").size;
    let ocupado = message.guilds.members.size.filte(a => a.presence.status == "dnd").size;
    let ausente = message.guilds.members.size.filte(a => a.presence.status == "idle").size;
    let offline = message.guilds.members.size.filter(a => a.presence.status == "offline").size;


    const embed = new Discord.RichEmbed()

    .setTitle(' ')
    .addField('Onlines:', `${online}`)
    .addField('Ocupados:', `${ocupado}`)
    .addField('Ausentes:', `${ausente}`)
    .addField('Offline:', `${offline}`)

message.channel.send(embed)

}