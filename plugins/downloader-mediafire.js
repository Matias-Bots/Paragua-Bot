const { mediafireDl } = require('../lib/mediafire.js')
let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {
if (!text) return m.reply(`Kirim perintah ${usedPrefix + command} *link mediafire*`)
if (!args[0].includes('mediafire.com')) return m.reply(error.linkmf)
let mdjon = args.join(' ')
res = await mediafireDl(mdjon)
result = `ใ *๐๐๐๐๐๐๐๐* ใ
*ยก๐ณ๐๐๐๐ ๐๐๐๐๐๐๐๐๐ ๐๐๐ ๐๐ก๐๐๐!*
๐ ๐ฝ๐๐๐๐๐ : ${res[0].nama}
๐ ๐๐๐๐รฑ๐ : ${res[0].size}
๐ฌ Link : ${res[0].link}
_๐ด๐๐๐๐๐ ๐๐ ๐๐๐๐๐๐๐ ๐๐ ๐๐๐๐๐ ๐๐ ๐๐๐๐๐๐_`
m.reply(result)
//await sleep(100)
conn.sendFile(m.chat, res[0].link, res[0].nama, null, m, false, {asDocument:true, mimetype:res[0].mime})
}
handler.command = ['mediafire']

module.exports = handler
