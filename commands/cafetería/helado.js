module.exports =  {
    
    name: 'helado',
    aliases: ['nieve','helados'],
    description: '🍨',
  
    async execute(client, message, args, Discord) {

        var helado = [

            'https://i.imgur.com/zqhAuaw.gif',
            'https://i.imgur.com/bC58pl7.gif',
            'https://i.imgur.com/pyBFiKh.gif',
            'https://i.imgur.com/Avsa7AL.gif',
            'https://i.imgur.com/sT5rdYK.gif',
            'https://i.imgur.com/MklqUsz.gif',
            'https://i.imgur.com/h8OOvny.gif',
            'https://i.imgur.com/GVbnqsv.gif',
            'https://i.imgur.com/jYGmRDl.gif',
            'https://i.imgur.com/4hdFwbn.gif',
            'https://i.imgur.com/pDesozj.gif',
            'https://i.imgur.com/gTqkT9j.gif',
            'https://i.imgur.com/WJ7URCH.gif',
            'https://i.imgur.com/FPaJQRu.gif',
            'https://i.imgur.com/NQE1XYH.gif',
            'https://i.imgur.com/6ZgKKkL.gif',
            'https://i.imgur.com/35IEsA8.gif',
            'https://i.imgur.com/leHdalA.gif',
            'https://i.imgur.com/PHEMupc.gif',
            'https://i.imgur.com/ndFFjyV.gif',
        
        ]

        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
        let ramdonhelado = helado[Math.floor(Math.random()*helado.length)]

        while (!ramdonhelado || ramdonhelado === null || ramdonhelado === '' || ramdonhelado === undefined) {
            
            ramdonhelado = helado[Math.floor(Math.random()*helado.length)]

        }
        
        if (!img || img.id === message.author.id) {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Cafe`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${message.author.username}** está comiendo un refrescante helado.`)
            .setImage(ramdonhelado)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: 'https://media.discordapp.net/attachments/880312288593195028/904603928375726120/Midgard_GIF_AVATAR.gif' })
            
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
    
        } else if (img.user.bot) {

            return message.reply({ allowedMentions: { repliedUser: false}, embeds: [
          
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | Hace mucho frío! <:nogarsias:932172183453712415>`)
          
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        } else {
    
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `Midgard's Cafe`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : client.user.avatarURL({ dynamic: true }) })
            .setDescription(`**${img.user.username}**, ${message.author.username} te invitó un poquito de helado.`)
            .setImage(ramdonhelado)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: 'https://media.discordapp.net/attachments/880312288593195028/904603928375726120/Midgard_GIF_AVATAR.gif' })
            
            message.channel.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))

        }

    }

}