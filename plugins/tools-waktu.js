let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'πΈππππππ ππ ππππππ ππ ππ ππππππ', m)

	axios.get(`https://tobz-api.herokuapp.com/api/jamdunia?lokasi=${text}&apikey=BotWeA`).then ((res) => {
	 	let hasil = `π·πππ ππππππππ *${text}*\n\nπ΄π πππππ : ${res.data.time}\nFecha : ${res.data.date}\nInfo : ${res.data.title}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['tiempo'].map(v => v + ' <pais>')
handler.tags = ['tools']
handler.command = /^(tiempo)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler