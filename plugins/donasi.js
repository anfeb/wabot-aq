let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Telkomsel [-]
│ • Byu       [085161767877]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Gopay,Dana [087772343860]
│ • https://saweria.co/Nurutomo
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
