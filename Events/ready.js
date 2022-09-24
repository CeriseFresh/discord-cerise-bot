const { ActivityType } = require("discord.js");
const Discord = require("discord.js")
const loadSlashCommands = require("../Loaders/loadSlashCommands")

module.exports = async bot => {

    // Idle = Inactif, points orange
      // DND = ne pas déranger, points rouge
     // Online = En ligne, point vers
     bot.user.setStatus('DND')
     const statuses = [
         () => `En développement`, 
         () => `${bot.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)} utilisateurs`
     ]
     let i = 0
     setInterval(() => {
         bot.user.setActivity(statuses[i](), {type: ActivityType.Watching})
         i = ++i % statuses.length
     }, 5000)

    await loadSlashCommands(bot)

    console.log(`${bot.user.tag} est bien en ligne !`)

}