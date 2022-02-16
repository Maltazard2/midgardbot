const anime = require('anime-actions')

module.exports =  {
    
    name: 'cuddle',
    aliases: ['acurrucarse','acurrucar'],
    description: '😶 ¡Acurrúcate!.',
  
    async execute(client, message, args, Discord) { 

        let cuddle = anime.cuddle()
        let img = message.guild.members.resolve(message.mentions.users.first() || client.users.cache.get(args[0]));
   
        if (!img || img.id === message.author.id) {

            const embed = new Discord.MessageEmbed()
            .setAuthor(`Midgard's Emotions`,message.guild.iconURL({ dynamic: true }))
            .setDescription(`**${message.author.username}** se está acurrucando conmigo <:GatoSonrojado:925929874445729872>`)
            .setImage(cuddle)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter(`${message.guild.name}`,'https://media.discordapp.net/attachments/880312288593195028/904603928375726120/Midgard_GIF_AVATAR.gif');
        
            message.channel.send({ embeds: [embed] });

        } else if (img.user.bot){
        
            return message.reply({ allowedMentions: { repliedUser: false}, embeds: [
        
                new Discord.MessageEmbed()
                .setAuthor(message.author.tag, message.author.displayAvatarURL())
                .setColor('RED')
                .setDescription(`<a:Verify2:931463492677017650> | ¿Acurrucarme? <:nogarsias:932172183453712415>`)
        
            ]})
        
        } else {

            const embed = new Discord.MessageEmbed()
            .setAuthor(`Midgard's Emotions`,message.guild.iconURL({ dynamic: true }))
            .setDescription(`**${message.author.username}** se acurrucó en **${img.user.username}** <:abby:931432327354155038> `)
            .setImage(cuddle)
            .setColor('RANDOM')
            .setTimestamp(new Date())
            .setFooter(`${message.guild.name}`,'https://media.discordapp.net/attachments/880312288593195028/904603928375726120/Midgard_GIF_AVATAR.gif');
        
            message.channel.send({ embeds: [embed] });

        }

    }

}