//=============『 owner 』================== //
global.owner = ['595985958156', '']
global.mods = [] 
global.prems = [] 

//=============『 Info Owner 』============== //
global.nameowner = 'creador'
global.numberowner = '595985958156' , ''
global.instagram = 'https://www.instagram.com/matiass.zzz'
global.grupo = 'https://chat.whatsapp.com/JIRYr6hK0gw2PusdUlsG0R'
global.dana = ''
global.pulsa = ''
global.gopay = ''

//=============『 Info Bot 』=================//
global.namebot = '𝐏𝐀𝐑𝐀𝐆𝐔𝐀 - 𝐁𝐎𝐓 '
global.gc = ''
global.web = '' //conviértalo en su sitio web, puede vincular ig, vincular github, vincular yt, si el enlace es gc, la visualización volverá a ser diferente.
global.price1 = '1 bulan = 10.000\n2 Minggu 7.000\n1 Minggu 5.000'

//=======『 Pantalla y más 』============//
global.fotonya1 = '' //cambia a tu foto de bot
global.fotonya2 = '' //cambiar esto también
global.lolkey = 'Papah-Chan' //asi que es facil remplazarlo, por ejemplo el apikey esta caducado :v
global.zenzkey = 'BagasPrdn' //cambiar a su apikey si caduca
global.wm = '𝐏𝐀𝐑𝐀𝐆𝐔𝐀 - 𝐁𝐎𝐓 '
global.watermark = wm
global.wm2 = '                     「 𝐏𝐀𝐑𝐀𝐆𝐔𝐀 - 𝐁𝐎𝐓  」'
global.wm3 = 'Paragua - Bot'
global.htki = '––––––『' 
global.htka = '』––––––'
global.media = ''
global.fla = ''
global.wait = '_*espere unos minutos...*_'
global.eror = '_*erro de servidor*_'
global.benar = 'correcta ✅\n'
global.salah = 'incorecta ❌\n'
global.stiker_wait = '𝙲𝚛𝚎𝚊𝚗𝚍𝚘 𝚜𝚝𝚒𝚌𝚔𝚎𝚛...'
global.packname = 'Toma tu sticker'
global.author = '𝐏𝐀𝐑𝐀𝐆𝐔𝐀 - 𝐁𝐎𝐓 '

//=============『 Apikey 』================== //
global.APIs = { // API Prefix
  // name: 'https://website'
  amel: 'https://melcanz.com',
    bx: 'https://bx-hunter.herokuapp.com',
  dhnjing: 'https://dhnjing.xyz',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  zekais: 'http://zekais-api.herokuapp.com',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  erdwepe: 'https://erdwpe-api.herokuapp.com',
  lolhuman: 'https://api.lolhuman.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://melcanz.com': 'elaina',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.xteam.xyz': 'd37372311698ed1d',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.xyz': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://zekais-api.herokuapp.com': 'apikeymu',
  'https://api.lolhuman.xyz': 'Deffbotz',
}

//=============『 JUEGOS | GAMES 』================== //
global.multiplier = 69 // Cuanto más alto, más difícil subir de nivel
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

//===========『 No cambies 』================ //
let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
