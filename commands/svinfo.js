const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (client, message, args, prefix) => {
    let online = message.guild.members.filter(a => a.presence.status == "online").size;
   
    let ocupado = message.guild.members.filter(a => a.presence.status == "dnd").size;
   
    let ausente = message.guild.members.filter(a => a.presence.status == "idle").size;
   
    let offline = message.guild.members.filter(a => a.presence.status == "offline").size;
   
    let totalmembros = message.guild.memberCount;

 
    let serverembed = new Discord.RichEmbed()
  
  .setTitle("Informação do servidor")
  .setColor("0ED4DA")
  .setThumbnail(message.guild.iconURL)
  .addField("Criador", `<@${message.guild.owner.id}>`, true)
  .addField("Criado em:", moment(message.guild.createdAt).format('LLLL'), true)
  .addField(`Total de membros:`, `${totalmembros}`, true)
  .addField(`Onlines:`, `${online}`, true)
  .addField(`Ocupados:`, `${ocupado}`, true)
  .addField(`Ausentes:`, `${ausente}`, true)
  .addField(`Offline:`, `${offline}`, true)

  return message.channel.send(serverembed);
}