import fs from 'fs'
function handler(m, { conn }) {
let vn = './media/creador.mp3'
let text = `
*πΎπ€π£π©πππ©π€* 
*Wa.me/51960537308 (no bot)*
*wa.me/51940901488 (bot)*
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'ΛΞΩ β’ββ₯ ππΌππππ β₯ββ’Ω ΞΛ',
body: 'ππ«ππππ¨π«',         
previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `https://wa.me/519060537308`}}})
  
//const data = global.owner.filter(([id, isCreator]) => id && isCreator)
//this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
  
let pp = './media/menus/Menu2.jpg'
let str = `π§‘ *Eso son los contactos para ti.*`

conn.sendHydrated(m.chat, str, wm, pp, 'https://chat.whatsapp.com/EsuQkNILaHIJkFXWvm0doh', 'grupos', null, null, [
['π ππ£ππ€π§π’πππΓ³π£', '.infobot'],
['π πΏπ€π£ππ§', '.donar'],
['β ππ§ ππ‘ ππ£ππππ€', '/menu']
], m,)
conn.sendFile(m.chat, vn, 'creador.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(contacto|owner|creator|propietario|dueΓ±o|dueΓ±a|propietaria|dueΓ±o|creadora|creador)$/i
export default handler
