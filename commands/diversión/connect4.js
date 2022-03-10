const { Connect4 } = require('leaf-utils');

module.exports =  {
    
    name: 'connect4',
    aliases: ['4enraya','cuatroenraya'],
    description: '🎮 Juega 4 En Raya con algún miembro del servidor.',
  
    async execute(client, message, args, Discord) {

        let usuario = message.mentions.users.first() || message.guild.members.resolve(client.users.cache.get(args[0]));

        if(!usuario) return message.reply({embeds: [
       
            new Discord.MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
            .setColor('RED')
            .setDescription(`<a:Verify2:931463492677017650> | Necesitas mencionar con quién jugar!`)
      
        ]}).catch((e) => console.log('Error al enviar mensaje: '+e))

        await Connect4({
            
            message: message,
            client: client,
            slash_command: false,
            time: 300000,
            opponent: usuario,
            embed: {
                title: 'Connect4',
                color: 'RANDOM'
            },
            challenge: {
                acceptButton: 'Si',
                denyButton: 'No',
            },
            emojis: {
                player1: '🔴',
                player2: '🟢',
            },
            noUser: 'Necesitas mencionar a alguien',
            acceptMessage: '{{opponent}} Has sido desafiado por {{player}}',
            cancelMessage: '{{opponent}} Se rehusa a jugar contigo!',
            endMessage: 'Juego no aceptado a tiempo',
            timeoutMessage: 'Juego detenido por inactividad',
            authorOnly: 'No puedes usar estos botones',

        }).catch((e) => console.log('Error al enviar mensaje: '+e))
    }

}