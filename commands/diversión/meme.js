const red = require('reddit-fetch');

module.exports =  {
    
    name: 'meme',
    aliases: ['memes'],
    description: '😂 Obtén memes al azar.',
  
    async execute(client, message, args, Discord) {

        red({

            subreddit: 'SpanishMeme',
            sort: 'hot',
            allowNSFW: false,
            allowModPost: false,
            allowCrossPost: false,
            allowVideo: false
            
        }).then(
            
            post => {
                    
                const embed = new Discord.MessageEmbed()
                .setAuthor({ name: `Midgard's Fun`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : client.user.avatarURL({ dynamic: true }) })
                .setTitle(post.title ? post.title : 'Sin título')
                .setImage(post.url)
                .setColor('RANDOM')
                .setTimestamp(new Date())
                .setFooter({ text: `${message.guild.name}`, iconURL: 'https://media.discordapp.net/attachments/880312288593195028/904603928375726120/Midgard_GIF_AVATAR.gif' })
        
                if(!post.url){
                        
                    return message.reply({ allowedMentions: { repliedUser: false}, embeds: [

                        new Discord.MessageEmbed()
                        .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
                        .setColor('RED')
                        .setDescription(`<a:Verify2:931463492677017650> | No encontré memes <:POLQUE:856670987499208775>`)
              
                    ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
                    
                }else{
                        
                    message.reply({ allowedMentions: { repliedUser: false}, embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
                    
                }
    
            }
            
        ).catch(
            
            (e) => message.reply({ allowedMentions: { repliedUser: false}, content: 'Hubo un error: ' + e}).catch((e) => console.log('Error al enviar mensaje: '+e))
            
        )

    }

}