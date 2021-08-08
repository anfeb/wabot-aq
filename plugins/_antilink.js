let handler = m => m

let linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
handler.before =async function (m, { user, isBotAdmin, isAdmin }) {
  if (m.isBaileys && m.fromMe) || m.fromMe || !m.isgroup) return true
  let chat = global.db.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink && isGroupLink) {
    await m.reply('* ANTI LINK *\n\nTerdeteksi *${await this.getname(m.sender)}* Kamu Telah Mengirim link Grup!\n\Maaf Kamu Akan Dikick Dari Grup Ini Byee!`)
    if (isAdmin) return m.reply('*Eh Maaf kamu Admin, kamu gk bakal dikick. hehe..*')
    if (!isBotAdmin) return m.reply('*Bot Bukan Admin, Mana bisa kick orang _-*')
    let linkGC = ('https://chat.whatsapp.com/' + await this.groupInviteCode(m.chat))
    let isLinkThisGc = new RegExp(linkGC, 'i')
    let isgclink = isLinkThisGc.test(m.text)
    if (isgclink) return m.reply('*Lol ngirim link group sendiri :v*')
    await this.groupRemove(m.chat, [m.sender])
  }
  return true
}

module.exports = handler
