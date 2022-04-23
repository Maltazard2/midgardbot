const serverSchema = require('../../models/serverSchema');

module.exports = async (client, Discord, guild) => {

    let owner = client.users.cache.get('753435606410985573')
    let sv = client.guilds.cache.get('777620055344545842')
    let channel = sv.channels.cache.get('874943743185285150')
    let canalmbs = client.channels.cache.get('957231545763110984')
    let logschannel = client.channels.cache.get('965156885558878319')

    let ownerserver = await guild.fetchOwner().catch((e) => console.log('Error al obtener owner: '+e))
    let buscarserver, premium, nservers
    let amount = 2
    let canalmbp = client.channels.cache.get('965157413349130250')
    ownerserver = client.users.cache.get(ownerserver.id)

    try {

        nservers = client.guilds.cache.size

        console.log('Número de servidores: ' + nservers)

        if(nservers <= 100){

            premium = true

        } else{

            premium = false

        }

        buscarserver = await serverSchema.findOne({idserver: guild.id})

        if(!buscarserver){

            console.log('========================= REGISTRO DE SERVIDOR =========================');
            
            let setserver = await serverSchema.create({
    
                idserver: guild.id,
                servername: guild.name,
                ownerid: ownerserver.id,
                ownername: ownerserver.tag,
                premium: premium,
        
            })
        
            setserver.save();
                    
            console.log('Servidor registrado ===> Servidor: '+ guild.name)
       
            console.log('========================= REGISTRO DE SERVIDOR =========================');
    
        } else {
    
            console.log('========================= ACTUALIZACIÓN DE SERVIDOR =========================');

            let update = await serverSchema.findOneAndUpdate({idserver: guild.id},
                {

                    idserver: guild.id,
                    servername: guild.name,
                    ownerid: ownerserver.id,
                    ownername: ownerserver.tag,
                    premium: premium,

                })

            update.save()

            console.log('Servidor actualizado ===> Servidor: '+ guild.name)

            console.log('========================= ACTUALIZACIÓN DE SERVIDOR =========================');

        }

    } catch (error) {

        console.log('Error al Registrar Servidor: '+ guild.id + ' - ' + error)
       
    }

    try {
            
        let datos = []
        let c = 1
        
        client.guilds.cache.forEach(async (s)=>{
            
            let bx = await serverSchema.findOne({idserver: s.id, premium: true})

            if(bx){
                
                datos.push('**' + c + '.** Nombre : `' + s.name + '` - Id : `' + s.id + '`')
                c = c + 1

            }
        
        })

        setTimeout(async () => {

            const embedmbp = new Discord.MessageEmbed()
            .setThumbnail('https://i.imgur.com/Uq0IPAU.gif')
            .setAuthor({ name: 'MidgardBot', iconURL: client.user.avatarURL({ dynamic: true}) })
            .setTitle('💎  Lista de servidores Premium  💎')
            .setDescription('\n\n> ' + datos.join('\n> \n> '))
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `Nací para crecer`, iconURL: client.user.avatarURL({ dynamic: true}) })
             
            try {
                
                for (let i = 0; i < Math.ceil(amount / 99); i++){ 
                  
                    const msgs = await canalmbp.messages.fetch({
                    
                        limit: Math.round(amount / Math.ceil(amount / 99)),
                  
                    });
                  
                    await canalmbp.bulkDelete(
                    
                        msgs.filter((m) => m.deletable)
                  
                    ); 
                    
                } 

            } catch (error) {
                
                console.log('Error al eliminar mensajes en MBPremiums: ' + error)
                logschannel.send({ content: 'Error al eliminar mensajes en MBPremiums: ' + error })
        
            }

            canalmbp.send({ embeds: [embedmbp] }).catch((e) => console.log('Error al enviar mensaje: '+e))
            canalmbp.send('https://images-ext-2.discordapp.net/external/9iPHKFXXnKKSQpcFazlW79dr1zbbtdo7QT7-xxtfDY4/%3Fwidth%3D600%26height%3D86/https/media.discordapp.net/attachments/897951731462316073/915663567213199390/bar-1.gif?width=450&height=65').catch((e) => console.log('Error al enviar mensaje: '+e))
            
        }, 10000)
        
    } catch (error) {
        
        console.log('Ocurrió un error al buscar la lista de premium: '+ error)

        const e = new Discord.MessageEmbed()
        .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
        .setColor('RED')
        .setDescription(`<a:Verify2:931463492677017650> | Ocurrió un error inesperado, por favor intenta de nuevo!\n> Error: `+error)
        .setTimestamp()

        try {
                
            for (let i = 0; i < Math.ceil(amount / 99); i++){ 
              
                const msgs = await canalmbp.messages.fetch({
                
                    limit: Math.round(amount / Math.ceil(amount / 99)),
              
                });
              
                await canalmbp.bulkDelete(
                
                    msgs.filter((m) => m.deletable)
              
                ); 
                
            } 

        } catch (error) {
            
            console.log('Error al enviar mensajes' + error)
            logschannel.send({ content: 'Error al enviar mensajes: ' + error })
    
        }

        canalmbp.send({ embeds: [e] }).catch((e) => console.log('Error al enviar mensaje: '+e))
        return canalmbp.send('https://images-ext-2.discordapp.net/external/9iPHKFXXnKKSQpcFazlW79dr1zbbtdo7QT7-xxtfDY4/%3Fwidth%3D600%26height%3D86/https/media.discordapp.net/attachments/897951731462316073/915663567213199390/bar-1.gif?width=450&height=65').catch((e) => console.log('Error al enviar mensaje: '+e))
        
    }

    const embed = new Discord.MessageEmbed()
    .setAuthor({ name: 'MaltaBot', iconURL: client.user.avatarURL() })
    .setThumbnail(guild.iconURL() ? guild.iconURL({ dynamic: true }) : 'https://i.imgur.com/0xgcf1W.gif')
    .setTitle(`¡Server nuevo! <:abby:931432327354155038>`)
    .setDescription('<:shylove:931432905421520927> Me he unido al servidor: \n\n> Nombre: '+guild.name+'\n> \n> Id: '+guild.id+'\n> \n> Fecha: Hoy\n> \n> Owner: <@' + (ownerserver ? ownerserver.id : 'Fallo al obtener owner') + '>')
    .setColor('RANDOM')
    .setTimestamp(new Date())
    .setFooter({ text: guild.name, iconURL: (guild.bannerURL() ? guild.bannerURL({ dynamic: true, size: 4096 }).replace('webp','png') : null) })

    const embedmbs = new Discord.MessageEmbed()
    .setThumbnail('https://i.imgur.com/Uq0IPAU.gif')
    .setAuthor({ name: 'MidgardBot', iconURL: client.user.avatarURL({ dynamic: true}) })
    .setTitle('🚧  Lista actual de servidores  🚧')
    .setDescription('***Desarrollador : ↴***\n\n```Fui creado y programado única y exclusivamente por 💻Maltazard💻#2608```\n\n***Patrocinadores : ↴***\n\n```Vivo gracias a la manutención exclusiva de ✦ᴹᴳ| 𝑳𝒂 𝑰𝒏𝒔𝒑𝒆𝒄𝒕𝒐𝒓𝒂™#0001```\n\n***Usuarios : ↴***\n\n```Mis comandos son utilizados por '+client.users.cache.size+' usuarios.```\n\n***Servidores : ↴***\n\n```Actualmente estoy en '+client.guilds.cache.size+' servers.```\n\n')
    .addField('\u200B','\u200B')
    .addField('Nombre : ↴ ','``` - ' + client.guilds.cache.map(r => r.name).join(". \n - ")+'.```',true)
    .addField('Id : ↴ ','``` - ' + client.guilds.cache.map(r => r.id).join(". \n - ")+'.```',true)
    .setColor('RANDOM')
    .setTimestamp(new Date())
    .setFooter({ text: `Nací para crecer`, iconURL: client.user.avatarURL({ dynamic: true}) })
         
    try {
                
        for (let i = 0; i < Math.ceil(amount / 99); i++){ 
          
            const msgs = await canalmbs.messages.fetch({
            
                limit: Math.round(amount / Math.ceil(amount / 99)),
          
            });
          
            await canalmbs.bulkDelete(
            
                msgs.filter((m) => m.deletable)
          
            ); 
            
        } 

    } catch (error) {
        
        console.log('Error al eliminar mensajes en MBServers: ' + error)
        logschannel.send({ content: 'Error al eliminar mensajes en MBServers: ' + error })

    }

    canalmbs.send({ embeds: [embedmbs] }).catch((e) => console.log('Error al enviar mensaje: '+e))
    canalmbs.send('https://images-ext-2.discordapp.net/external/9iPHKFXXnKKSQpcFazlW79dr1zbbtdo7QT7-xxtfDY4/%3Fwidth%3D600%26height%3D86/https/media.discordapp.net/attachments/897951731462316073/915663567213199390/bar-1.gif?width=450&height=65').catch((e) => console.log('Error al enviar mensaje: '+e))
        
    try {

        channel.send({embeds: [embed]}).catch((e) => console.log('Error al enviar mensaje: '+e))
        owner.send({embeds:[embed]}).catch(err => console.log('Error al enviar SERVER NUEVO: '+guild.name+' - '+guild.id+' al dm del owner: - Error: '+err))

    } catch (error) {
        
        console.log('No se envío dm al owner: '+error)
    }

    client.user.setPresence({
          
        status: 'online', 
        activities: [{ 
           
            name: client.guilds.cache.size + ' server' + (client.guilds.cache.size === 1 ? '' : 's')+' | '+ client.users.cache.size + ' usuarios', 
            type: 'WATCHING',
            
        }],
        
    })

}