let handler = async (m, { conn, usedPrefix, isAdmin, isOwner }) => {
    if (m.isGroup) {
        if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
    }
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) return conn.sendBut(m.chat, `Β‘πππππππ πππ’ πππππ ππ ππππ ππππ!`, wm, 'α΄α΄α΄α΄Ι΄α΄’α΄Κ', `${usedPrefix}+vote`, m)
    delete conn.vote[id]
    m.reply(`ππ΄ π΄π»πΈπΌπΈπ½πΎ π»π° ππΎπ²ππ°π²πΈπΎπ½ π²πΎπππ΄π²ππ°πΌπ΄π½ππ΄!`)
}
handler.help = ['eliminarvoto']
handler.tags = ['vote']
handler.command = /^(delete|eliminar|-)voto$/i

module.exports = handler
