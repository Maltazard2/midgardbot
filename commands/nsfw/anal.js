const NSFW = require('discord-nsfw');
const nsfw3 = new NSFW();

module.exports =  {
    
    name: 'anal',
    aliases: [],
    description: '🔞 Comandos NSFW.',

    async execute(client, message, args, Discord) { 

        if(!message.channel.nsfw){
          
            return message.reply({embeds: [
  
                new Discord.MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true}) })
                .setThumbnail('https://media.discordapp.net/attachments/936039644959756319/936524707677741086/prohibido.gif?width=318&height=149')
                .setColor('RED')
                .setDescription(`<a:prohibido:936527618466009109> | ¡Oh rayos, no puedes hacer eso aquí pillín <:ojooo:925928526119571457>`)
  
            ]}).catch((e) => console.log('Error al enviar mensaje: '+e))
        
        } else {
      
            let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
            let desc 
            const image = await nsfw3.anal()

            while (!image || image === null || image === undefined) {
                
                image = await nsfw3.anal()

            }
    
            if (!img || img.id === message.author.id || img.user.bot) {
      
                desc = `A **${message.author.username}** le están dando por detroit <:aisaMexicana:925926704097161216>`
          
            } else {
      
                desc = `**${message.author.username}** le está dando a **${img.user.username}** por la retaguardia.`
  
            }
  
            const embed = new Discord.MessageEmbed()
            .setAuthor({ name: `🔞 | Midgard's Hot 🔥`, iconURL: message.guild.iconURL() ? message.guild.iconURL({ dynamic: true }) : client.user.avatarURL({ dynamic: true }) })
            .setDescription(desc)
            .setImage(image ? image : null)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter({ text: `${message.guild.name}`, iconURL: 'https://media.discordapp.net/attachments/880312288593195028/904603928375726120/Midgard_GIF_AVATAR.gif' })
            
            message.reply({ allowedMentions: { repliedUser: false}, embeds: [embed] }).catch((e) => console.log('Error al enviar mensaje: '+e))
      
        } 
      
    }
  
}