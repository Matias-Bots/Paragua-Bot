const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;Ilman;;;'
                    + 'FN:Ilman\n' // full name
                    + 'ORG:Ilman;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=+595985958156\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'creador', contacts: [{ vcard }] } }, { quoted: m })
+ 'TEL;type=CELL;type=VOICE;waid=+595985958156\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'creador', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner']
handler.tags = ['info']

handler.command = /^(owner|creator|propietario|creador|dueño)$/i

module.exports = handler
