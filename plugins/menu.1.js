/** 
*/

const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m) => {
let duit = `*╭───── 「 𝐒𝐔𝐏𝐄𝐑𝐁𝐎𝐓 - 𝐌𝐃 」 ──────*
│ hola usuario bienvenido este bot es nuevo todavía está el desarrollo 
│ 🔸*menuprueba*
└────
╭─「 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻 」
│ • 
╰────
╭─「 𝙹𝚄𝙴𝙶𝙾𝚂 」
│ • 
╰──── 
╭─「 𝙰𝙳𝚅𝙴𝙽𝚃𝚄𝚁𝙰 」
│ • 
╰────
╭─「 𝙽𝙸𝚅𝙴𝙻 & 𝙴𝚇𝙿 」
│ • .Levelup 
│ • .reg
│ • .claim
╰────
╭─「 𝙿𝚁𝙴𝙼𝙸𝚄𝙼 」
│ • .Join
╰────
╭─「 𝙶𝚁𝚄𝙿𝙾  」
│ • .Kick
│ • .add
│ • tagall
│ • hidetag
│ • 
╰────
╭─「  𝙰𝚄𝚂𝙴𝙽𝙲𝙸𝙰𝚂 」
│ • .Afk
╰────
╭─「 𝚅𝙾𝚃𝙰𝙲𝙸𝙾𝙽  」
│ • 
╰────
╭─「  𝙵𝚄𝙽 」
│ • 
╰────
╭─「 𝚂𝚃𝙸𝙲𝙺𝙴𝚁  」
│ • .Sticker
│ • .wm
╰────
╭─「 𝙼𝙰𝚁𝙺𝙴𝚃  」
│ • 
╰────
╭─「 𝙶𝙸𝚃𝙷𝚄𝙱  」
│ • 
╰────
╭─「 𝙸𝙽𝚃𝙴𝚁𝙽𝙴𝚃  」
│ • .image
╰────
╭─「 𝙰𝙽𝙸𝙼𝙴  」
│ • 
╰────
╭─「 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚂  」
│ • 
╰────
╭─「 𝙽𝚂𝙵𝚆  」
│ • 
╰────
╭─「 𝚃𝙾𝙾𝙻𝚂  」
│ • 
╰────
╭─「 𝙰𝙳𝚅𝙰𝙽𝙲𝙴  」
│ • 
╰────
╭─「  𝙾𝚆𝙽𝙴𝚁 」
│ • .addprem
│ • .delprem
│ • .
╰────`
let message = await prepareWAMessageMedia({ image: {url: 'https://telegra.ph/file/10842a031f39684aa2297.jpg' }}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: duit,
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: 'grupo',
               url: 'https://chat.whatsapp.com/Lus9S60MABnH9lF4Wf2T7k'
             }

           },
               {
             quickReplyButton: {
               displayText: 'owner',
               id: '.owner',
             }
           },           
               {
             quickReplyButton: {
               displayText: 'descarga',
               id: '.descarga',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.help = ['prueba']
handler.tags = ['info']
handler.command = /^prueba(com|ple)|allmenuu$/i

module.exports = handler
