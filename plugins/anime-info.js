let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
  if (!text) throw `πππ πππππ πππππ ππππππππ?`
  let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/anime', { q: text }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let { title, members, synopsis, episodes, url, rated, score, image_url, type, start_date, end_date } = json.results[0]
let animeingfo = `β¨οΈ *ππΈπππ»πΎ :* ${title}
ποΈ *π΄πΏπΈππΎπ³πΈπΎπ :* ${episodes}
β‘οΈ *π΅π΄π²π·π° π³π΄ πΈπ½πΈπ²πΈπΎ :* ${start_date}
π *π΅π΄π²π·π° π³π΄ π΅πΈπ½π°π»πΈππ°π²πΈπΎπ½ :* ${end_date}
π¬ *ππΈπΏπΎ π³π΄ ππ·πΎπ:* ${type}
ποΈ *ππ°ππΈπ½πΆ :* ${rated}
β€οΈ *ππ²πΎππ΄ :* ${score}
π₯ *πΌπΈπ΄πΌπ±ππΎπ :* ${members}
ποΈ *πππ½πΎπΏππΈπ :* ${synopsis}
ποΈ *πππ» :* ${url}`
  conn.sendFile(m.chat, image_url, '', animeingfo, m)
}
handler.help = ['anime <anime>']
handler.tags = ['anime']
handler.command = /^(anime|animeinfo)$/i
//maapin fatur :<
module.exports = handler
