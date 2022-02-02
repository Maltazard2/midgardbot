const { MessageActionRow, MessageButton } = require('discord.js');

const prefix = process.env.PREFIX;

//& Modelos
const userModel = require('../../models/userSchema');
const blSchema = require('../../models/blSchema');
//& Modelos

module.exports = async (client, Discord, message) => {
    
    if (message.channel.type === 'dm') {

        let sv = client.guilds.cache.get('777620055344545842')
        let channel = sv.channels.cache.get('874943743185285150')
  
        if(message.content.length >= 1000) return channel.send('Mensaje demasiado largo, enviado al dm por: '+message.author)
    
        const embed = new Discord.MessageEmbed()
        .setThumbnail(`https://media2.giphy.com/media/3sbiWejYVIGuX1thyq/giphy.gif`)
        .setAuthor('MaltaBot', client.user.avatarURL())
        .setTitle('📢 | Mensaje directo')
        .addField('Autor: ', `<a:flech:931432469935312937> ${message.author}`)
        .addField('Mensaje: ', message.content ? message.content: 'Ningún mensaje registrado')
        .setColor('RANDOM')
        .setTimestamp(new Date())
        .setFooter(`Id: ${message.author.id}`, `${message.author.displayAvatarURL()}`)
        
        channel.send({ embeds: [embed] });
    
    }
    
    let sv = client.guilds.cache.get('851924635930329098')
    let channel
    let idcanal = message.channel.id
  
    const em = new Discord.MessageEmbed()
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .setAuthor('MaltaBot', client.user.avatarURL())
      .setTitle('📢 | Mensaje Enviado')
      .addField('Canal: ', `<a:flech:931432469935312937> <#${idcanal}>`)
      .addField('Autor: ', `<a:flech:931432469935312937> ${message.author}`)
      .addField('Mensaje: ', message.content ? message.content : 'Ningún mensaje registrado')
      .setColor('RANDOM')
      .setTimestamp(new Date())
      .setFooter(`Id: ${message.author.id}`, `${message.author.displayAvatarURL()}`)
  
    if(idcanal === '880290686107275304')
    {
        channel = sv.channels.cache.get('880267684950999050')
  
        if(message.content.length >= 1000) return channel.send('Mensaje demasiado largo, enviado en alto cargo por: '+message.author)
  
        channel.send({ embeds: [em] });
    
    } else if(idcanal === '880292291443556383')
    {
        channel = sv.channels.cache.get('880280405993996339')
    
    if(message.content.length >= 1000) return channel.send('Mensaje demasiado largo, enviado en élite por: '+message.author)
        
        channel.send({ embeds: [em] });
    
    } else if(idcanal === '840161683732693033')
    {
        channel = sv.channels.cache.get('880280308732272640')
    
        if(message.content.length >= 1000) return channel.send('Mensaje demasiado largo, enviado en staff por: '+message.author)
    
        channel.send({ embeds: [em] });
    
    } else if(idcanal === '923716261542781018')
    {
        channel = sv.channels.cache.get('933917185695428628')
    
        if(message.content.length >= 1000) return channel.send('Mensaje demasiado largo, enviado en supervisores por: '+message.author)
    
        channel.send({ embeds: [em] });
  
    } else if(idcanal === '909722451745837106')
    {
        channel = sv.channels.cache.get('880280346208395305')
    
        if(message.content.length >= 1000) return channel.send('Mensaje demasiado largo, enviado en admin por: '+message.author)
    
        channel.send({ embeds: [em] });
    
    } else if(idcanal === '870195067338506271')
    {
        channel = sv.channels.cache.get('880280535304372234')
    
        if(message.content.length >= 1000) return channel.send('Mensaje demasiado largo, enviado en chat general por: '+message.author)
        
        channel.send({ embeds: [em] });
    
    } else
    {
        var canalrestringidos = [
          '880280265216389140','880267684950999050',
          '880280405993996339', '880280308732272640',
          '880280346208395305', '880280369126051861',
          '880280535304372234', '880280557051858974',
          '933903109305028688', '933917185695428628'
        ]
  
        if(!canalrestringidos.some(id => idcanal == id))
        {
          channel = sv.channels.cache.get('880280265216389140')
      
          if(message.content.length>=1000) return channel.send(`Mensaje demasiado largo, enviado en <#${idcanal}> por: `+message.author)
      
          em.addField('Servidor: ', `<a:flech:931432469935312937> ${message.guild.name}`)
      
          channel.send({ embeds: [em] });
  
        } else {
          return
        }
    
    }
    
    if (message.author.bot) return;

    if (message.content === 'Hola' || message.content === 'hola' || message.content === 'Holas' || message.content === 'holas'){
          
        message.channel.send('Hola '+message.author.username+', cómo va tu día?')
  
    }
    if (message.content === 'ola' || message.content === 'Ola' || message.content === 'olas' || message.content === 'Olas'){
  
        message.channel.send('del mar 🌊')
  
    }
    if (message.content === 'Buen día' || message.content === 'buen día' || message.content === 'Buen dia' || message.content === 'buen dia'){
          
        message.channel.send('Buen día precios@ ❤');
          
    }
    if (message.content === 'Buenos días' || message.content === 'buenos días' || message.content === 'Buenos dias' || message.content === 'buenos dias'){
          
        message.channel.send('Buenos días precios@ ❤');
      
    }
    if (message.content === 'Buenas tardes' || message.content === 'buenas tardes'){
          
        message.channel.send('Buenas tardes precios@ ❤');
          
    }
    if (message.content === 'Buenas noches' || message.content === 'buenas noches'){
          
        message.channel.send('Buenas noches precios@ ❤');
          
    }
    if (message.content === 'Buenas' || message.content === 'Wenas' || message.content === 'buenas' || message.content === 'wenas'){
            
        message.channel.send('Las tienes <a:perreom:930719549131735040>');
  
    }
    if (message.content === 'wlc' || message.content === 'Wlc' || message.content === 'welcome' || message.content === 'Welcome'){
          
        message.react(`<a:pasito:877116925291946094>`)
        message.react(`<a:cerveza:880635824021065738>`)
          
    }
  
    let img = '753435606410985573'
  
    const bSi = new MessageButton()
        .setCustomId("accept")
        .setLabel("SI")
        .setStyle("SUCCESS")
  
    const bNo = new MessageButton()
        .setCustomId("deny")
        .setLabel("NO")
        .setStyle("DANGER")
    
    if (message.content === 'malta' || message.content === 'Malta' || message.content === 'MALTA' || message.content === 'MAlta' || message.content === 'maltazar' || message.content === 'Maltazar' || message.content === 'MALTAZAR' || message.content === 'MAltazar' || message.content === 'maltazard' || message.content === 'Maltazard' || message.content === 'MALTAZARD' || message.content === 'MAltazard')
    {
    
        message.channel.send({
            content: message.author.toString() + "¿Deseas contactar a Malta?",
            components: [
  
              new MessageActionRow().addComponents([bSi,bNo])

            ]
        }).then(async m => {
            
            let filter = int => int.isButton() && int.user.id == message.author.id //Agregamos el filtro para que solo permita que el miembro mencionado interactue con los botones.
             
            const collector = m.createMessageComponentCollector({ filter, max: 1, maxUsers: 1, maxComponents: 1, time: 300000 /* Tiempo para que el miembro interatue con los botones */ });
            
            collector.on("collect", async int => {
                
              int.deferUpdate();
                
              if (int.customId === "accept") {
                  
                m.edit({
                  content: `<@${img}> Te buscan por aquí <:yonofui:931433119859503194>`,
                  components: []
                });
         
              } else if (int.customId === "deny") {
                  
                m.edit({
                  content: "Gracias, si necesitas algo, no dudes en contactarme. <:tierno:931433334960160799>",
                  components: []
                });
                
              }
            });
        
            collector.on("end", (collected, reason) => {
                
              if(collected.size < 1) return m.edit({
                content: "**¡No confirmaste a tiempo!** <:enojado:931434000751394867>",
                components: []
              });

              console.log('Razón del término de colección de Malta: '+reason)
                
            });
              
        });
    }
    
    /*let reven = new RegExp(`^<@!?${'710588969557164113'}>( |)$`);
    
    if (message.content.match(reven))
    {
    
        message.channel.send(`𝑬𝒍 𝒖́𝒍𝒕𝒊𝒎𝒐 𝒇𝒊𝒆𝒍 𝒒𝒖𝒆 𝒒𝒖𝒆𝒅𝒂 𝒆𝒏 𝒆𝒔𝒕𝒆 𝒎𝒖𝒏𝒅𝒐 <a:FuegoRojo:882761255381790750>`)
    
    }*/
    
    /*let mencionado = message.guild.members.resolve(message.mentions.users.first())

    if(mencionado)
    {

        if (mencionado.id === '753435606410985573'){
        
            message.channel.send(`¿Qué necesitas de mi dueño? <a:ositovino:880306728867078165>`)
    
        } else if (mencionado.id === '683501310527668228'){

            message.channel.send('Tan al pendiente estás que tienes que hacerme ping? <a:ayajasisi:890684634369777724>')
            
        }

    }*/

    let malta = new RegExp(`^<@!?${'753435606410985573'}>( |)$`)

    if (message.content.match(malta))
    {
    
        message.channel.send(`¿Qué necesitas de mi dueño? <a:ositovino:880306728867078165>`)
    
    }

    let insp = new RegExp(`^<@!?${'683501310527668228'}>( |)$`)

    if (message.content.match(insp))
    {
    
        message.channel.send(`Tan al pendiente estás que tienes que hacerme ping? <a:ayajasisi:890684634369777724>`)
    
    }
  
    let ian = new RegExp(`^<@!?${'603344396351438889'}>( |)$`);
    
    if (message.content.match(ian))
    {
          
        message.channel.send(`<a:megaphone:932192877449191424> Alo? Tierra llamando al **argentino con más flow** <a:darkcrown2:886466286773739530>, Ian en camino bebé <a:bmirusboyrunfast:880411644893724672>`)
    
    }
  
    let ana = new RegExp(`^<@!?${'883633609498570762'}>( |)$`);
    
    if (message.content.match(ana))
    {
            
        message.channel.send(`<:emoji_233:890722279074451506> Días,tardes,noches,madrugadas <:mmsi:925934342016995379> porque Buena está la persona que me acaba de mencionar <a:Zuii:890684724673150996> <a:Ytodomedavuelta:890721775699259422>`)
    
    }
  
    let scarlett = new RegExp(`^<@!?${'754792358104793158'}>( |)$`);
    
    if (message.content.match(scarlett))
    {
            
        message.channel.send(`Que necesidad de etiquetar <:nojao:891551822387486721>`)
    
    }
  
    let nia = new RegExp(`^<@!?${'743960732542042203'}>( |)$`);
    
    if (message.content.match(nia))
    {
          
        message.channel.send(`¿¡𝑸𝒖𝒆 𝒏𝒆𝒄𝒆𝒔𝒊𝒅𝒂𝒅 𝒅𝒆 𝒑𝒊𝒏𝒈𝒆𝒂𝒂𝒂𝒂𝒓!? <:gatoNojao:930403164266565642>`)
    
    }
    
    if (message.content === 'piropo' || message.content === 'Piropo')
    {
    
        var piropo = [
            'El amor será ciego, pero hay que ver lo mucho que alegras la vista.','Con esos ojos mirándome, ya no me hace falta la luz del sol.',
            'Por la luna daría un beso, daría todo por el sol, pero por la luz de tu mirada, doy mi vida y corazón.','Si yo fuera un avión y tú un aeropuerto, me la pasaría aterrizando por tu hermoso cuerpo.',
            'Me gusta el café, pero prefiero tener-té.','No eres google, pero tienes todo lo que yo busco.',
            'Mis ganas de ti no se quitan, se acumulan.','Cuando te multen por exceso de belleza, yo pagaré tu fianza.',
            'Si cada gota de agua sobre tu cuerpo es un beso, entonces quiero convertirme en aguacero.','Estás como para invitarte a dormir, y no dormir.',
            'Si tu cuerpo fuera cárcel y tus brazos cadenas, ese sería el lugar perfecto para cumplir condena.','Qué bonitos ojos tienes, tan redondos como el sol, se parecen a los ceros que me pone el profesor.',
            'Eres como la chancha de mi mamá, te veo venir y se me acelera el corazón.','Si lo bonito fuera pecado, tú no tendrías el perdón de Dios.',
            'Ni en clase de matemáticas me perdía tanto como en tu mirada.','Quisiera olvidarte, pero sin el olvi.',
            'Se te ha caído el papel que te envuelve, bombón.','Me gustas más que dormir hasta tarde.',
            '¿Me haces un favor? Sal de mis sueños y entra en mi realidad.','Ni en el mejor libro de recetas se encuentra semejante bombón.',
            '¿Están lloviendo estrellas o solo tú caíste del cielo?','Mi amor, quién fuera cemento para sostener ese monumento.',
            'Si tuviera que regalarte algo, te regalaría un espejo, porque después de este mundo, lo más bonito es tu reflejo.','No me gusta atarme, pero por ti, yo me encadeno.',
            'Eres tan dulce que solo con mirarte engordo.','Si los besos transmiten gérmenes, yo contigo sí empiezo una epidemia.',
            '¿De que panadería te escapaste bizcochito?','Y Dios dijo: «Hágase lo más hermoso del universo» y nació la hermosura que está leyendo esto.',
            'Quien fuera mago para echarte un polvo y desaparecer.','Quisiera ser hamburguesa y que me llenes de mayonesa.',
            'Tienes la sonrisa que quiero darle a mis hijos.','Dios te guarde y me dé la llave.',
            'Ningún «Escribiendo…» me pone tan feliz como el tuyo.','Tú eres Coca Cola y yo un hielito, ¡no me toques que me derrito!',
            '¿Tienes algo que hacer? Podemos hacer turismo por mi cuarto.','Eres como el chocolate, te me antojas a cada ratito.',
            'Perdí mi número de teléfono, ¿me das el tuyo?','Tu amor me ha contagiado, como un virus imposible de curar.',
            'Acabo de perder tres besos bajo tu camiseta, ¿me ayudas a buscarlos?','Que bonito sería despertarme a mitad de noche y verte ahí, a mi lado.',
            'Si solo con ver tu nombre me haces suspirar, imagínate cuando te veo.','Quisiera ser pensamiento y estar dentro de ti, y así saber el momento en que te acuerdas de mi.',
            'Te quiero, pero no sé en qué posición, ¿me ayudas a elegir?','¿Crees en el amor a primera vista o tengo que darme otra vuelta y volver a pasar?',
            '¿Quién te crees para gustarme tanto?','La distancia y el tiempo no saben la falta que le haces a mi corazón.',
            'Eres la canción que hace sonar mi guitarra.','No pretendo decir algo bonito, lo que te digo es muy sincero: el cariño que siento es infinito y mi amor por ti es verdadero.',
            'Si ser bella fuese delito, te condenarían de por vida.','Si Cristóbal Colón te viese, diría; «Santa María, pero qué Pinta tiene esa Niña».',
            'Quisiera ser hormiguita para subir por tu balcón y decirte al oído; guapa, bonita, bombón.','Cómo me gustaría ser tu secador de pelo… para que todos los días me agarres del mango.',
            'A lo mejor mi hogar no es un palacio, pero me gustaría que tú fueras mi princesa.','La belleza de una rosa no tiene comparación con la dulzura de tu rostros y la hermosura de tu corazón.',
            'Aprovecha que estoy en rebajas guapa y te dejo dos besos por el precio de uno.','¿Estás preparada para subir a la Luna? Porque tengo el cohete preparado.',
            'Si un día olvido lo hermosa que eres, ayúdame a recordarlo con la luz de tu sonrisa y el sabor de tus labios.','Tú con tantas curvas y yo sin frenos.',
            'No es el whisky ni la cerveza, eres tú quien se me ha subido a la cabeza.','Me encanta la soltería, pero por ti me lo pensaría.'
        ]
    
        let rpiropo = piropo[Math.floor(Math.random()*piropo.length)]
    
        const embed = new Discord.MessageEmbed()
          .setColor('RANDOM')
          .setDescription(rpiropo)
        message.channel.send({ embeds: [embed] })
  
    }
    
    
    if (message.content === 'chiste' || message.content === 'Chiste')
    {
    
        var chiste = [
            '- ¿Tienes WiFi?\n- Sí\n- ¿Y cuál es la clave?\n- Tener dinero y pagarlo.',
            'En una entrevista de trabajo:\n- ¿Nivel de inglés?\n- Alto\n- Bien. Traduzca *mirar*.\n- Look.\n- Perfecto. Úselo en una frase.\n- *Luke*, yo soy tu padre.\n- Contratado.',
            '¿Cuál es el café más peligroso del mundo?\nEl ex-preso',
            '- Mamá, mamá, los spaghetti se están pegando.\n- Déjalos que se maten',
            '- Soy Rosa.\n- Ah, perdóname, es que soy daltónico.',
            '- Oye, ¿cuál es tu plato favorito y por qué?\n- Pues el hondo, porque cabe más comida…',
            '¿Qué pasa si tiras un pato al agua?.\nNada.',
            '- Ayer llamé a la policía porque unos ladrones robaron en mi casa y se llevaron hasta los vasos.\n- ¿Y los detuvo?\n-Sí, sí, los de tubo también.',
            '¿Cómo te llamas?\n- Lancelot.\n- Pues atrápalot…',
            '- Papá, ¿qué está más lejos, Córdoba o la Luna?.\n - Pero vamos a ver, ¿tú ves desde aquí Córdoba?',
            'Mi ordenador me gana al ajedrez, pero yo le gano boxeando.',
            'General: Soldado, ice la bandera\n Soldado: Pues le quedó muy bonita',
            '- A las 10 te pito y bajas.\n- ¿Te has comprado un coche?\n- No, un pito.',
            '¿Cuál es el coche favorito de un fotógrafo?\nEl Ford Focus',
            'Oye, ¿cuánto te costó esa terapia que hiciste para dejar de pensar en comida todo el rato?\n- Pimientos euros.',
            'Pero mira que te he dicho diez mil millones de veces que no exageres…',
            '¿Te gusta el rock progresivo?\n- Cada vez más.',
            '- Buf, me ha caído mal el estofado.\n- ¡Pues no le hables, hombre!',
            '- A mí me gustaría vivir en una isla desierta.\n- A mí también.',
            'Errar es humano, pero lo es todavía más echarle las culpas a otro.',
            'Pues sí, el viaje a la India me cambió la vida.\n- ¿Más langosta, señor?\n- Pero ponle curry.',
            'Suena el teléfono:\n- ¿Hola?\n- Hola.\n- ¿Es aquí donde lavan ropa?\n- No.\n- Pues sí que son guarros.',
            'Llaman a la puerta y es un técnico del ayuntamiento.\n- Perdone, pero vamos a proceder al derribo del edificio contiguo.\n- ¿Conmigo?'
        ]
    
        let rchiste = chiste[Math.floor(Math.random()*chiste.length)]
    
        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription(rchiste)
        message.channel.send({ embeds: [embed] })
    
    }

    if (message.content.toLowerCase() === 'mine'){

        function reminder() {
    
            message.reply({embeds: [
    
              new Discord.MessageEmbed()
              .setAuthor(message.author.tag, message.author.displayAvatarURL())
              .setThumbnail('https://c.tenor.com/AMnlFqJnKhwAAAAd/se-va-a-minar-minar.gif')
              .setColor('RANDOM')
              .setDescription('<a:flech:931432469935312937> | Es hora de ir a la mina <a:exclama2:880930071731392512>')
        
            ]})
    
        }

        const embed = new Discord.MessageEmbed()
        .setAuthor('Nekotina', 'https://images-ext-2.discordapp.net/external/vTbUglOfnbYgQ8gotBCEus02Q7Gn467NmguBx51ntu8/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/429457053791158281/01a5bf4c4e4d0521ccee216003abd8dc.png?width=500&height=500')
        .setTitle('<a:tiempogif:931434689481285662> Recordatorio activado para: `*'+message.author.username+'*`')
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setDescription('<a:flech:931432469935312937> Te recordaré dentro de `3 minutos` usar el comando `mine`.')
        .setColor('RANDOM')
        .setTimestamp(new Date())
        .setFooter(message.guild.name, message.guild.iconURL({ dynamic: true }))
        message.channel.send({ embeds: [embed] })

        setTimeout(reminder, 180000);

    }

    if (message.content.toLowerCase() === 'fish'){

        function reminder() {
    
            message.reply({embeds: [
    
              new Discord.MessageEmbed()
              .setAuthor(message.author.tag, message.author.displayAvatarURL())
              .setThumbnail('https://www.gifsanimados.org/data/media/157/pesca-imagen-animada-0057.gif')
              .setColor('RANDOM')
              .setDescription('<a:flech:931432469935312937> | Es hora de ir a la pesca <a:exclama2:880930071731392512>')
        
            ]})
    
        }

        const embed = new Discord.MessageEmbed()
        .setAuthor('Nekotina', 'https://images-ext-2.discordapp.net/external/vTbUglOfnbYgQ8gotBCEus02Q7Gn467NmguBx51ntu8/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/429457053791158281/01a5bf4c4e4d0521ccee216003abd8dc.png?width=500&height=500')
        .setTitle('<a:tiempogif:931434689481285662> Recordatorio activado para: `*'+message.author.username+'*`')
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setDescription('<a:flech:931432469935312937> Te recordaré dentro de `3 minutos` usar el comando `fish`.')
        .setColor('RANDOM')
        .setTimestamp(new Date())
        .setFooter(message.guild.name, message.guild.iconURL({ dynamic: true }))
        message.channel.send({ embeds: [embed] })

        setTimeout(reminder, 180000);

    }
    
    let bot = new RegExp(`^<@!?${'904290001196556369'}>( |)$`);
    
    if (message.content.match(bot))
    {
    
        const embed = new Discord.MessageEmbed()
        .setAuthor(message.author.username+'#'+message.author.discriminator, `${message.author.displayAvatarURL()}`)
        .setDescription('Hola! **'+ message.author.username +'** Mi Prefix es: `_` Puedes ver mis comandos disponibles usando: `_help`. Para enviar un reporte usa: `_report` y para una sugerencia: `_suggestion`.')
        .setColor('RANDOM')
        message.channel.send({ embeds: [embed] })
    
    }

    var mencionbot = message.content.startsWith('<@'+client.user.id+'>') || message.content.startsWith('midgard') || message.content.startsWith('mid') || message.content.startsWith('mg')
    //console.log(mencionbot+' mencion: '+client.user.id)

    if(!message.content.startsWith(prefix) && !mencionbot) return; 
  
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()
    const prueba = message.content.split(' ')

    try {
        
        userbl = await blSchema.findOne({idusuario: message.author.id})

        if(userbl)
        {

            console.log('Usuario en Lista Negra ===> Id: '+ message.author.id + ' Username: ' + message.author.username)
            
            const e = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            .setColor('RED')
            .setDescription('<a:Verify2:931463492677017650> | ¡Estás prohibido de usar estos comandos!\n\n**Razón:**\n`'+userbl.reason+'`\n\nContacta con el equipo de desarrolladores para más información.!')
          
            return message.channel.send({embeds: [e]})

        }

    } catch (error) {

        console.log('Error al buscar (comando) en la Tabla BL: '+ error)

    }

    let cmd = client.commands.get(command) ||
              client.commands.get(prueba[1]) ||
              client.commands.find((a) => a.aliases && a.aliases.includes(command) || a.aliases.includes(prueba[1])); // Obtiene el comando de la colección client.commandos
  
    if(!cmd){

        const e = new Discord.MessageEmbed()
          .setAuthor(message.author.tag, message.author.displayAvatarURL())
          .setColor('RED')
          .setDescription(`<a:Verify2:931463492677017650> | Este comando no existe!`)
        
        return message.channel.send({embeds: [e]})

    } else{

        cmd.execute(client, message, args, Discord)
    
        //* Registro de Usuarios

        console.log('========================= REGISTRO DE USUARIO =========================');
    
        let userData;

        try {

            userData = await userModel.findOne({idusuario: message.author.id})

            if(!userData){

                let user = await userModel.create({

                    idusuario: message.author.id,
                    username: message.author.username,
    
                })
    
                user.save();
                console.log('Usuario Registrado ===> Id: '+ message.author.id + ' Username: ' + message.author.username)

            } else {

                //<-- UPDATE EXPERIENCIA/NIVELES -->
            
                console.log('========================= UPDATE EXPERIENCIA DE USUARIO =========================');
   
                let curLevel = Math.floor(0.1 * Math.sqrt(userData.exp + 1));

                if(curLevel > userData.nivel) {

                    let update = await userModel.findOneAndUpdate({idusuario: message.author.id},
                        {

                            exp: userData.exp + 1,
                            nivel: curLevel,
                            banco: userData.banco + (curLevel*1000),
                            total: userData.dinero + userData.banco + (curLevel*1000)

                        })

                    update.save()

                    console.log('Usuario: '+message.channel.id+' ha subido al nivel: '+curLevel)
      
                }

                if(userData.vip === true) {

                    let update = await userModel.findOneAndUpdate({idusuario: message.author.id},
                        {
    
                            exp: userData.exp + 2
                            
                        })
    
                    update.save()

                } else if (userData.vip === false){

                    let update = await userModel.findOneAndUpdate({idusuario: message.author.id},
                        {
    
                            exp: userData.exp + 1
    
                        })
    
                    update.save()

                }

            }
   
        } catch (error) {

            console.log('Error al Registrar Usuario: '+ error)
    
        }
  
        console.log('========================= REGISTRO DE USUARIO =========================');
   
        //* Registro de Usuarios

    }
    
}