module.exports =  {
    
    name: 'benzema',
    aliases: ['karim'],
    description: '⚽ Comando VIP',
  
    async execute(client, message, args, Discord) { 
 
        var ben = [

            'https://i.imgur.com/0RWuqCR.gif',
            'https://i.imgur.com/JFZqm41.gif',
            'https://i.imgur.com/tdN76Ln.gif',
            'https://i.imgur.com/HVbtcEC.gif',
            'https://i.imgur.com/F6G67jM.gif',
            'https://i.imgur.com/r7qXg1c.gif',
            'https://i.imgur.com/bIBPa7U.gif',
            'https://i.imgur.com/Lkoq8yc.gif',
          
        ]  

        let ramdonb = ben[Math.floor(Math.random()*ben.length)]

        while (!ramdonb || ramdonb === null || ramdonb === '' || ramdonb === undefined) {

            ramdonb = ben[Math.floor(Math.random()*ben.length)]
            
        }
        
        const embed = new Discord.MessageEmbed()
        .setAuthor({ name: `Midgard's VIP`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : client.user.avatarURL({ dynamic: true }) })
        .setTitle('🇫🇷 | Karim Benzema 9')
        .setImage(ramdonb)
        .setColor('RANDOM')
        .setTimestamp(new Date())
        .setFooter({ text: `${message.guild.name}`, iconURL: 'https://media.discordapp.net/attachments/880312288593195028/904603928375726120/Midgard_GIF_AVATAR.gif' })

        message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
        
    }

}