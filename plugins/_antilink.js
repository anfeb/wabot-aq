let handler = m => m

let linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
handler.before =async function (m, { user, isBotAdmin, isAdmin }) {
  if (m.isBaileys && m.fromMe) || m.fromMe || !m.isgroup) return true
  let chat = global.db.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink && isGroupLink) {
    m.reply('* ANTI LINK *\n\nTerdeteksi *${await this.getname(m.sender)}* Kamu Telah Mengirim link Grup!\n\Maaf Kamu Akan Dikick Dari Grup Ini Byee!`)
    if (global.opts['restrict']) {
      if (isAdmin || !isBotAdmin) return true
      // this.groupRemove(m.chat, [m.sender])
    }
  }
  return true
}

module.exports = handler
