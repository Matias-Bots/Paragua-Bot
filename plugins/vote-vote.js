let handler = async (m, { conn, usedPrefix, command }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) return conn.sendBut(m.chat, `π½π πππ’ ππππππππππ ππ ππππ πππππ!`, wm, 'α΄α΄α΄α΄Ι΄α΄’α΄Κ', `${usedPrefix}+votar`, m)
    let isVote = conn.vote[id][1].concat(conn.vote[id][2])
    const wasVote = isVote.includes(m.sender)
    if (wasVote) throw 'Β‘π·ππ ππππππ!'
    if (/up/i.test(command)) {
        conn.vote[id][1].push(m.sender)
    } else if (/de/i.test(command)) {
        conn.vote[id][2].push(m.sender)
    }
    let [reason, upvote, devote] = conn.vote[id]
    let caption = `
γ *πππππ* γ
*πΌπππππ:* ${reason}
*π° πππππ*
_Total: ${upvote.length}_
${upvote.map(u => '@' + u.split`@`[0]).join('\n')}
*π΄π ππππππ  *
_Total: ${devote.length}_
${devote.map(u => '@' + u.split`@`[0]).join('\n')}
    `.trim()
    conn.send2But(m.chat, caption, wm, 'π° πππππ ', `${usedPrefix}afavorv`, 'π΄π ππππππ', `${usedPrefix}encontrav`, m)
}
handler.help = ['afavorv', 'encontrav']
handler.tags = ['vote']
handler.command = /^(afavor|encontra)v$/i

module.exports = handler
