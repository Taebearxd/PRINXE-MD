let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
  let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
  m.reply(
    `𖥻̶🥛⃞̸̶ ᜔ֺ 𝐆𝗋ⱺυρ : *${groupMetadata.subject}*\n   ⃞🌸̨ᩙ𖹭᭢   𝐌𝖾ꭑᑲ𝖾𝗋𝗌 : *${participants.length}*${text ? `\n░⃝🩰̸̶᜔ 𝐌𝖾𝗌𝗌α𝗀𝖾 : ${text}\n` : ''}\n┌───⊷ *MENTIONS*\n` +
      users.map(v => '🍓꯭ദິ @' + v.replace(/@.+/, '')).join`\n` +
      '\n︵︵   ݁  𓂃୨  🎀  ୧𓂃  ݁   ︵︵',
    null,
    {
      mentions: users,
    }
  )
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['tagall']
handler.admin = true
handler.group = true

export default handler
