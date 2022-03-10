module.exports =  {
    
    name: 'roll',
    aliases: [],
    description: '🔢 Saca un número al azar.',
  
    async execute(client, message, args, Discord) {

        if(!args[0])
        {

            var num = Math.floor(Math.random() * 101)

            const embed = new Discord.MessageEmbed() 
            .setAuthor({ name: `Midgard's Fun`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : client.user.avatarURL({ dynamic: true }) })
            .setDescription(`🔢 **${message.author.username}** ha tirado un roll de (**100**) y ha obtenido un **${num}**`)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: 'https://media.discordapp.net/attachments/880312288593195028/904603928375726120/Midgard_GIF_AVATAR.gif' })
            
            message.reply({ allowedMentions: { repliedUser: false}, embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))

        } else {

            if(isNaN(args[0])) return message.reply({ embeds: [

                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | Ingresa un número válido!`)
      
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

            var num = Math.floor(Math.random() * args[0])

            const embed = new Discord.MessageEmbed() 
            .setAuthor({ name: `Midgard's Fun`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : client.user.avatarURL({ dynamic: true }) })
            .setDescription(`🔢 **${message.author.username}** ha tirado un roll de (**${args[0]}**) y ha obtenido un **${num}**`)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: 'https://media.discordapp.net/attachments/880312288593195028/904603928375726120/Midgard_GIF_AVATAR.gif' })
            
            message.reply({ allowedMentions: { repliedUser: false}, embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))

        }

    }

}