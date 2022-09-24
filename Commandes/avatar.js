const Discord = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "avatar",
    description: "Avoir l'avatar de quelqun",
    permission: "Aucune",
    dm: true,
    category: "Information",
    options: [
        {
        type: "user",
        name: "utlisateur",
        description: "l'utlisateur a avoir l'avatar",
        required: true,
        }
    ],
    
    async run(bot, message, args) {
        let user = args.getUser(`utlisateur`)
        if(!user) return message.reply("Utlisateur non valide")
        const exampleEmbed = new EmbedBuilder()
        .setColor('Red')
        .setTitle(`${user.username}`)
        .setDescription(`avatar de ${user.tag}`)
       .setTimestamp()
        .setImage(user.displayAvatarURL({size: 512}))
    .setFooter({ text: `avatar de ${user.tag}`, iconURL: (user.displayAvatarURL({dynamic: true}))});
        message.reply({embeds: [exampleEmbed]});
    }

    }