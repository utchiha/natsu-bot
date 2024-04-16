let handler = async (m, { conn, args, groupMetadata}) => {
    let who
    if (m.isGroup) {
        who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
        if (!who) throw '*الرجاء الرد على الشخص أو منشنه لعرض عدد الإنذارات*'
    } else {
        who = m.chat
    }
    
    if (!(who in global.db.data.users)) throw '*المستخدم غير موجود في قاعدة البيانات*'
    let warn = global.db.data.users[who].warn
    m.reply(`عدد الإنذارات التي حصل عليها المستخدم: *${warn}*`)
}

handler.command = ['انذارات']
handler.group = true
handler.help = ['انذارات (الرد على الشخص)']
handler.tags = ['group']
handler.admin = true
handler.botAdmin = true

export default handler
