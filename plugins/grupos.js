/**
 * TOLONG JANGAN GANTI GAMBARNYA,NOMORKU DAN SAWERIAKU
 * MENDING KALIAN TAMBAHIN NOMOR KALIAN
*/

const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m) => {
let duit = `*────── 「 GRUPO」 ──────*

*Hola 👋*
*este es el grupo oficial del bot*
*https://chat.whatsapp.com/JIRYr6hK0gw2PusdUlsG0R*
h`
let message = await prepareWAMessageMedia({ image: {url: 'https://telegra.ph/file/e1e0f0bc5a5229c348eda.jpg' }}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: duit,
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: 'github',
               url: ''
             }

           },
               {
             quickReplyButton: {
               displayText: 'menu completo',
               id: '.full',
             }
           },           
               {
             quickReplyButton: {
               displayText: 'Owner',
               url: 'https://wa.me/595985958156',
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

handler.help = ['grupos']
handler.tags = ['info']
handler.command = /^gru(po|s)|grupos$/i

module.exports = handler
