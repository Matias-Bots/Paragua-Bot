/** 
*/

const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m) => {
let duit = `*╭───── 「 𝐓𝐡𝐞 𝐊𝐢𝐧𝐠 𝐁𝐨𝐭  」 ──────*
│ *menu completo*
└────
╭─「 %category 」
│ • 
╰────\n`
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
               url: 'https://chat.whatsapp.com/JIRYr6hK0gw2PusdUlsG0R'
             }

           },
               {
             callButton: {
               displayText: '',
               phoneNumber: ''
             }
           },           
               {
             quickReplyButton: {
               displayText: '🧒 Owner',
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

handler.help = ['full']
handler.tags = ['info']
handler.command = /^full(com|ple)|full$/i

module.exports = handler
