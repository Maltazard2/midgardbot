const Discord = require('discord.js');
const autonsfwSchema = require('../../models/autonsfwSchema');
const NSFW = require('discord-nsfw');
const nsfw3 = new NSFW();

module.exports = async (client) => {
  
  client.user.setPresence( 
    {
      status: 'online', 
      activities: [{ 
        
        name: client.guilds.cache.size + ' server' + (client.guilds.cache.size === 1 ? '' : 's')+' | '+ client.users.cache.size + ' usuarios', 
        type: 'WATCHING',
        
      }],
    }
  );  

  console.log('Listo!');

  // * CÓDIGO DE ROL RAINBOW

  let autosend, consulta, serverauto
 
  let rolVIP = '951688457258942494'

  var colores = [
        
    '#000000',
    '#1ABC9C',
    '#11806A',
    '#2ECC71',
    '#1F8B4C',
    '#3498DB',
    '#206694',
    '#9B59B6',
    '#71368A',
    '#E91E63',
    '#AD1457',
    '#F1C40F',
    '#C27C0E',
    '#E67E22',
    '#A84300',
    '#E74C3C',
    '#992D22',
    '#95A5A6',
    '#979C9F',
    '#7F8C8D',
    '#BCC0C0',
    '#34495E',
    '#2C3E50',
    '#FFFF00',
    '#FFFFFF',
    '#5865F2',
    '#99AAB5',
    '#2C2F33',
    '#23272A',
    '#57F287',
    '#FEE75C',
    '#EB459E',
    '#ED4245',
    '#23272A',
    '#e29e9e',
    '#3f0505',
    '#05323f',
    '#9ce790',
    '#624864',
    '#788069',
    '#a9e044',
    '#578b61',
    '#8781ca',
    '#3d6c8d',
    '#580e3f',
    '#8e73aa',
    '#888a5c',
    '#cfbd63',
    '#cf9563',
    '#47574d',
    '#214753',
    '#80aab8',
    '#8480b8',
    '#181729',
    '#291723',
    '#e45676',
    '#7e6873',
    '#354549',
    '#042027',
    '#806968',

  ]

  var serverM = client.guilds.cache.find(s => s.id === '777620055344545842')

  //if(!serverM.member(client.user).permissions.has(Permissions.FLAGS.MANAGE_ROLES)) return;
    
  var rol = serverM.roles.cache.find(x => x.id === rolVIP)

  // let c = 1

  if(rol){
    
    let rolrainbow = setInterval(async () => {

      console.log('========================= ROL RAINBOW =========================');
  
      let color = colores[Math.floor(Math.random()*colores.length)]

      await rol.edit({
    
        color: color
        
      })
      .then(r => console.log('Rol MBVIP editado: '+ color))
      .catch(e => console.log('Error al actualizar color de rol: '+e))
      
      //c === 200 ? clearInterval(rolrainbow) : c = c + 1

      console.log('========================= ROL RAINBOW =========================');
  
    }, 600000)
      
  }
  
  // * CÓDIGO DE AUTONSFW

  // try {

  //   autosend = await autonsfwSchema.find()

  //   let datos = []
    
  //   for(let ls of autosend){

  //     datos.push(ls.idserver)
                
  //   }
    
  //   if(!autosend || datos.length === 0) return
   
  //   for (let index = 0; index < datos.length; index++) {
      
  //     client.guilds.cache.forEach(s => {

  //       if(s.id === datos[index]){

  //         serverauto = s.id

  //       }

  //     })
      
  //   }
     
  //   if(!serverauto) return

  //   var sbanneer = client.guilds.cache.find(s => s.id === serverauto)

  //   try {
      
  //     consulta = await autonsfwSchema.findOne({ idserver: serverauto })
      
  //     if(!consulta) return

  //     var canalauto = consulta.idcanal
      
  //     if(!canalauto) return

  //     var canalverificadonsfw = client.channels.cache.get(canalauto)

  //     if(!canalverificadonsfw.nsfw) return

  //     var tiempo = consulta.intervalo
      
  //     if(!tiempo) return

  //     var modo = consulta.modo
      
  //     if(modo === false) return
     
  //     tiempo = tiempo * 60000

  //     try {

  //       setInterval(async () => {
          
  //         const image = await nsfw3.pgif();
                
  //         const embed = new Discord.MessageEmbed()
  //         .setAuthor({ name: `🔞 | Midgard's Hot VIP 🔥`, iconURL: client.user.avatarURL({ dynamic: true }) })
  //         .setDescription('***AutoNSFW... Disfrútalo***')
  //         .setImage(image ? image : null)
  //         .setColor('RANDOM')
  //         .setTimestamp(new Date())
  //         .setFooter({ text: `${sbanneer.name}`, iconURL: 'https://media.discordapp.net/attachments/880312288593195028/904603928375726120/Midgard_GIF_AVATAR.gif' })
        
  //         canalverificadonsfw.send({ embeds: [embed] }).catch((e) => console.log('Error al enviar autonsfw: '+e))
          
  //         console.log('========================= CANAL AUTONSFW =========================');
     
  //       }, tiempo)
    
  //     } catch (error) {

  //       console.log('Ocurrió un error al enviar autonsfw - ' + error)

  //     }

  //   } catch (error) {

  //     console.log('Ocurrió un error al consultar autonsfw - ' + error)

  //   }

  // } catch (error) {

  //   console.log('Error al obtener toda la tabla autonsfw: '+ error)

  // }

}