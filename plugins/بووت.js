let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `مرحبا معك بوت يوريتشي اذا اردت شي اكتب (.مهام)`;

    conn.sendFile(m.chat, 'https://telegra.ph/file/150e05041d229b5522b0d.jpg', 'image.jpg', message, m);
};

handler.customPrefix = /^(bot|بوت|بووت|بوت)$/i;
handler.command = new RegExp;

export default handler;
