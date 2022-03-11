const clientN = require('nekos.life');
const neko = new clientN();

module.exports =  {
    
    name: 'slap',
    aliases: ['bofetada','abofetear'],
    description: '😰 Tira una bofetada a alguien.',
  
    async execute(client, message, args, Discord) { 
    
        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
        
        if (!img || img.id===message.author.id) {
    
            return message.reply({embeds: [
            
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | ¿Te quieres autolesionar? <:procesando:932177969017925632>`)
          
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        } else if (img.user.bot){
          
            return message.reply({ allowedMentions: { repliedUser: false}, embeds: [
          
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | ¡Qué lindo eres pegándole a un bot! <:procesando:932177969017925632>`)
          
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
          
        } else {
    
            neko.sfw.slap().then(neko => {
    
                const embed = new Discord.MessageEmbed()
                .setAuthor({ name: `Midgard's Love 💞`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : client.user.avatarURL({ dynamic: true }) })
                .setDescription(`**${message.author.username}** abofeteó a **${img.user.username}**.`)
                .setImage(neko.url)
                .setColor('RANDOM')
                .setTimestamp(new Date())
                .setFooter({ text: `${message.guild.name}`, iconURL: 'https://media.discordapp.net/attachments/880312288593195028/904603928375726120/Midgard_GIF_AVATAR.gif' })

                message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
    
            }).catch((e) => message.reply('Error al obtener el comando: '+e))
            
        }

    }

}