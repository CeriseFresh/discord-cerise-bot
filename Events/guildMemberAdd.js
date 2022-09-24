const Discord = require("discord.js");
const { EmbedBuilder } = require("discord.js")

module.exports = (client, member) => {

    const EmbedMessage  = new EmbedBuilder()
    .setTitle(`🖥 | Dev DiscordJS | Discord.V14`)
    .setColor('#ff00fb')
    .setDescription(`Le membre : <@${member.user.id}>.\n \u200B \nViens de rejoindre la Team.`)
    .setThumbnail(member.user.displayAvatarURL())
    .setTimestamp()

    client.channels.cache.get('1020643076340973609').send({ embeds: [EmbedMessage]})
}
