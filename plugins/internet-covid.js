let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let res = await fetch(global.API('https://covid19.mathdro.id', '/api/countries/'+ (text)))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.confirmed) throw 'Negara?'
  if (json.confirmed) m.reply(`
πΏπ°πΈπ : ${text}
π²πΎπΌπ΅πΈππΌπ°π³πΎπ : ${json.confirmed.value}
ππ΄π²ππΏπ΄ππ°π³πΎπ : ${json.recovered.value}
πΌππ΄πππΎπ : ${json.deaths.value}
ππ»ππΈπΌπ° π°π²πππ°π»πΈππ°π²πΈπΎπ½ : ${json.lastUpdate}
\n\n2021 Β© %namebot`.trim())
  else throw json
}
handler.help = ['covid'].map(v => v + ' <negara>')
handler.tags = ['internet']
handler.command = /^(corona|covid|covid19)$/i
//susu, tetek, oppai
module.exports = handler
