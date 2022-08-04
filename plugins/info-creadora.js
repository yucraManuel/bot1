import fs from 'fs'
function handler(m, { conn }) {
let vn = './media/creador.mp3'
let text = `
*𝘾𝙤𝙣𝙩𝙖𝙘𝙩𝙤* 
*Wa.me/51960537308 (no bot)*
*wa.me/51940901488 (bot)*
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '˙·٠•●♥ 𝙈𝘼𝙉𝙐𝙀𝙇 ♥●•٠·˙',
body: '𝐂𝐫𝐞𝐚𝐝𝐨𝐫',         
previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `https://wa.me/519060537308`}}})
  
//const data = global.owner.filter(([id, isCreator]) => id && isCreator)
//this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
  
let pp = './media/menus/Menu2.jpg'
let str = `🧡 *Eso son los contactos para ti.*`

conn.sendHydrated(m.chat, str, wm, pp, 'https://chat.whatsapp.com/EsuQkNILaHIJkFXWvm0doh', 'grupos', null, null, [
['🐈 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙘𝙞ó𝙣', '.infobot'],
['🎁 𝘿𝙤𝙣𝙖𝙧', '.donar'],
['☘ 𝙄𝙧 𝙖𝙡 𝙞𝙣𝙞𝙘𝙞𝙤', '/menu']
], m,)
conn.sendFile(m.chat, vn, 'creador.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(contacto|owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador)$/i
export default handler
