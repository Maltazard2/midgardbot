module.exports =  {
    
    name: 'berenjena',
    aliases: ['pito','banana'],
    description: '😈 Descubre cuánto te mide.',
  
    async execute(client, message, args, Discord) {

        let users = message.mentions.users.first()

        if(!users){

            try {
          
                users = await client.users.fetch(args[0])

            } catch (error) {

                users = message.author
          
            }

        }

        if(users.bot) return message.reply({ embeds: [
        
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | **¿En serio quieres ver cuánto me mide?**...Los bots somos poderosos por algo! <a:ositovino:932917500218339379>`)
      
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        const random = Math.floor(Math.random() * 21);
      
        let heard = '';
        let image = '';

        if(random === 20){
          
            heard='😎';
            image='https://c.tenor.com/_C2LQYYZSLYAAAAC/shocked-surprised.gif';
    
        } else if(random < 20 && random > 15){
          
            heard='😲';
            image='https://c.tenor.com/2JAEiE6XJJwAAAAC/eugenio-dervez-eugenio.gif';
    
        } else if(random < 15 && random > 10){
          
            heard='🤨';
            image='https://c.tenor.com/T4_6YgD60VgAAAAd/que-hombre-golosa.gif';
    
        } else if(random < 10 && random > 5){
          
            heard='😬';
            image='https://c.tenor.com/vkliz2XrL0oAAAAC/boca-abierta-mono.gif';
    
        } else if(random < 5 && random > 0){
          
            heard='🤡';
            image='https://c.tenor.com/0qqmmIO-R6AAAAAd/excuse-me-excuse-you.gif';
    
        } else if(random === 0){
          
            heard='🚩';
            image='https://thumbs.gfycat.com/FlusteredUnevenAfricanwildcat-size_restricted.gif';
    
        }

        if(!users || users.id === message.author.id){

            if(message.author.id==='753435606410985573')
            {

                //var rm = ['15','16','17','18','19','20']
                const r = Math.floor(Math.random() * (21 - 15)) + 15;
          
                const embed = new Discord.MessageEmbed()
                .setAuthor({ name: `Midgard's Love`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : client.user.avatarURL({ dynamic: true }) })
                .setTitle(`¿Cuánto te mide? 🍆`)
                .setDescription(`😎 ¡La berenjena de **${message.author.username}** mide **${r}** centímetros! 😎`)
                .setImage(`https://c.tenor.com/2JAEiE6XJJwAAAAC/eugenio-dervez-eugenio.gif`)
                .setColor('RANDOM')
                .setTimestamp(new Date())
                .setFooter({ text: `${message.guild.name}`, iconURL: 'https://media.discordapp.net/attachments/880312288593195028/904603928375726120/Midgard_GIF_AVATAR.gif' })
          
                message.reply({ allowedMentions: { repliedUser: false}, embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))

            } else {

                const embed = new Discord.MessageEmbed()
                .setAuthor({ name: `Midgard's Love`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : client.user.avatarURL({ dynamic: true }) })
                .setTitle(`¿Cuánto te mide? 🍆`)
                .setDescription(`${heard} ¡La berenjena de **${message.author.username}** mide **${random}** centímetros! ${heard}`)
                .setImage(`${image}`)
                .setColor('RANDOM')
                .setTimestamp(new Date())
                .setFooter({ text: `${message.guild.name}`, iconURL: 'https://media.discordapp.net/attachments/880312288593195028/904603928375726120/Midgard_GIF_AVATAR.gif' })
          
                message.reply({ allowedMentions: { repliedUser: false}, embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
        
            }

        } else {

            if(users.id==='753435606410985573')
            {
                
                //var rm = ['15','16','17','18','19','20']
                const r = Math.floor(Math.random() * (21 - 15)) + 15;
          
                const embed = new Discord.MessageEmbed()
                .setAuthor({ name: `Midgard's Love`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : client.user.avatarURL({ dynamic: true }) })
                .setTitle(`¿Cuánto te mide? 🍆`)
                .setDescription(`😎 ¡La berenjena de **${users.username}** mide **${r}** centímetros! 😎`)
                .setImage(`https://c.tenor.com/2JAEiE6XJJwAAAAC/eugenio-dervez-eugenio.gif`)
                .setColor('RANDOM')
                .setTimestamp(new Date())
                .setFooter({ text: `${message.guild.name}`, iconURL: 'https://media.discordapp.net/attachments/880312288593195028/904603928375726120/Midgard_GIF_AVATAR.gif' })
          
                message.reply({ allowedMentions: { repliedUser: false}, embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
        
            } else {

                const embed = new Discord.MessageEmbed()
                .setAuthor({ name: `Midgard's Love`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : client.user.avatarURL({ dynamic: true }) })
                .setTitle(`¿Cuánto te mide? 🍆`)
                .setDescription(`${heard} ¡La berenjena de **${users.username}** mide **${random}** centímetros! ${heard}`)
                .setImage(`${image}`)
                .setColor('RANDOM')
                .setTimestamp(new Date())
                .setFooter({ text: `${message.guild.name}`, iconURL: 'https://media.discordapp.net/attachments/880312288593195028/904603928375726120/Midgard_GIF_AVATAR.gif' })
          
                message.reply({ allowedMentions: { repliedUser: false}, embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
          
            }
      
        }

    }

}