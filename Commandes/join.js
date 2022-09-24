const { joinVoiceChannel } = require("@discordjs/voice")
const { EmbedBuilder } = require("discord.js")

module.exports = {

  name: "join",
  description: "Permet de connecter le bot",
  permission: "Aucune",
  dm: true,
  category: ":outil: outils",

  async run(bot, message, args) {

    const channel = message.member.voice.channel;
    if(!channel) return message.channel.send("nothing")

    const connection = joinVoiceChannel({
        channelId: channel.id,
        guildId: channel.guild.id,
        adapterCreator: channel.guild.voiceAdapterCreator,
    });
  }
}
