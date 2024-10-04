let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`🦢⃝̸̷᜔ֺ ۟ 𝕲r᥆ᥙ⍴ : *${groupMetadata.subject}*\n\n🪷 𝕸ᥱmᑲᥱrs : *${participants.length}*${text ? `\n🦢ᩞᩨ  ꒰ ͜͡ᰱ✿ 𝕸ᥱssᥲgᥱ  : ${text}\n` : ''}\n\n┌───⊷ 𝐌𝖾𐓣𝗍𝗂ⱺ𐓣\n` + users.map(v => '🪷⃞̸⃔𓂃ֶָ֪ @' + v.replace(/@.+/, '')).join`\n` + '\nல̤͜ᰰல̤͜ᰰல̤͜ᰰல  ׄ  🪷᳹᳹  ׅ  ல̤͜ᰰல̤͜ᰰல̤͜ᰰலׄ ', null, {
        mentions: users
    })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['tagall']
handler.admin = true
handler.group = true

export default handler
