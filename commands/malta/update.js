const { Permissions } = require('discord.js');

module.exports =  {
    
    name: 'update',
    aliases: [],
    description: '💻 Actualización de Evento Ready - Activity.',
  
    async execute(client, message, args, Discord) {

        let permiso = message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR);
    
        if(!permiso) return message.channel.send('`Error` `|` No tienes Permisos para usar este comando.');
    
        message.channel.sendTyping()
    
        setTimeout(() => {
          
  
            client.user.setActivity({
                
                name: client.guilds.cache.size + ' server' + (client.guilds.cache.size === 1 ? '' : 's')+' | '+ client.users.cache.size + ' usuarios', 
                type:'WATCHING'
            
            })

            console.log('Estado cambiado con éxito - Update succefull')
  
            message.reply(`Ahh!!! Te la creíste wey <:gaaa:925926944254611487>`);
           
        }, 10000);
    
        let rolVIP = '949107691912065054'

        var colores = [
        
            'RED',
            'YELLOW',
            'GREEN',
            'PURPLE',
            'PINK',
            'AQUA',
            'BLUE',
            'GOLD',
            'GREY',
            'ORANGE'

        ]

        let ramdoncolor = colores[Math.floor(Math.random()*colores.length)]

        var rol = message.guild.roles.cache.find(x => x.id === rolVIP)
        
        if(rol){

            setTimeout( () => {

                rol.edit({

                    color: ramdoncolor
    
                })

            }, 10000)

        }

        message.react('✅');

    }

}