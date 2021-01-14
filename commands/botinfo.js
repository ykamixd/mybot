const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   
let bicon = bot.user.displayAvatarURL;
let botembed = new Discord.RichEmbed()
.setDescription(`Informacões da ${bot.user.username} \n\n\nVersão do **BOT**: 2.0`)
.setColor("0x36393e")
.setThumbnail(bicon)
.addField("📃 Nome do bot", bot.user.username)
.addField("💻 Servidores conectados agora:", bot.guilds.size)
.addField("👑 Criador:", "<@431514250532356118>")
.addField("💈 Prefixo:","k.anunciar")
.addField("👤 Usuários conectados agora:", bot.users.size)
.addField("Meu convite:", `[Invite](https://discord.com/oauth2/authorize?client_id=799362184218935316&scope=bot&permissions=8)`)

return message.channel.send(botembed);

}

module.exports.help = {
  name: "botinfo"
}