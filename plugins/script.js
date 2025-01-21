const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*╭──────────────●●►*
> *BOT OWNER:*
*|* *HAMMAD TANOLI*

> *TANOLI MD REPO:*
*|* *https://github.com/TanoliHuYar/TANOLI-MD*

> *SUPPORT CHANNEL:*
*|* *https://whatsapp.com/channel/0029Vay3gmS7tkjHfmRhfs0H/106*
*╰──────────────●●►*

> *update command Done*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '12036323288171807@newsletter',
      newsletterName: "HAMMAD",
      serverMessageId: 999
    },
externalAdReply: { 
title: 'TANOLI MD',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/TanoliHuYar/TANOLI-MD" ,
thumbnailUrl: "https://files.catbox.moe/m1rf91.jpg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
