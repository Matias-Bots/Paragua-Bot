let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`${pickRandom(global.iq)}`, m)
}
handler.help = ['iqtest']
handler.tags = ['game']
handler.command = /^(iqtest)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.iq = [
'ππ πΈπ ππ : 1',
'ππ πΈπ ππ : 14',
'ππ πΈπ ππ : 23',
'ππ πΈπ ππ : 35',
'ππ πΈπ ππ : 41',
'ππ πΈπ ππ : 50',
'ππ πΈπ ππ : 67',
'ππ πΈπ ππ : 72',
'ππ πΈπ ππ : 86',
'ππ πΈπ ππ: 99',
'ππ πΈπ ππ : 150',
'ππ πΈπ ππ : 340',
'ππ πΈπ ππ : 423',
'ππ πΈπ ππ : 500',
'ππ πΈπ ππ : 676',
'ππ πΈπ ππ : 780',
'ππ πΈπ ππ : 812',
'ππ πΈπ ππ : 945',
'ππ πΈπ ππ : 1000',
'ππ πΈπ ππ : πΈππππππππ!',
'ππ πΈπ ππ : 5000',
'ππ πΈπ ππ : 7500',
'ππ πΈπ ππ : 10000',
]
