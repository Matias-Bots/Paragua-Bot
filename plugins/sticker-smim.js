const uploadImage = require('../lib/uploadImage')
const { MessageType } = require('@adiwajshing/baileys-md')
const { sticker } = require('../lib/sticker')
let handler = async (m, { conn, text, usedPrefix, command }) => {

    let [atas, bawah] = text.split`|`
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw `balas gambar dengan perintah\n\n${usedPrefix + command} <${atas ? atas : 'teks atas'}>|<${bawah ? bawah : 'teks bawah'}>`
    if (!/image\/(jpe?g|png)/.test(mime)) throw `_*πΌπππππ ${mime} ππ πππππππππ!*_`
    let img = await q.download()
    let url = await uploadImage(img)
    meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas ? atas : '')}/${encodeURIComponent(bawah ? bawah : '')}.png?background=${url}`
try {
    let stiker = await sticker(null, meme, global.packname, global.author)
    await conn.sendFile(m.chat, stiker, {
      quoted: m
    })
  } catch (e) {
    m.reply('π½π ππ ππππ πππππ πππ ππππππππ, ππππππππππ ππππππ πππ ππππππ')
    await conn.sendFile(m.chat, meme, 'image.png', 'JADIKAN STIKER SECARA MANUAL DENGAN MENGETIK .S', m)
  }
}
handler.help = ['smim <teks atas>|<teks bawah>']
handler.tags = ['sticker']
handler.command = /^(smim)$/i

handler.limit = false

module.exports = handler
