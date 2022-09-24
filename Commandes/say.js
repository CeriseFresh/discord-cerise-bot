const Discord = require('discord.js');

module.exports = {

    name: "say",
    description: "Say a message with the bot",
    permission: Discord.PermissionFlagsBits.Administrator,
    category: "Administration fun",
    usage: "/say",
    dm: false,
    options: [
        {
            type: "string",
            name: "message",
            description: "The message you want to send with the bot",
            required: true,
            autocomplete: false
        },
    ],

    async run(bot, message, args) {

        let messages = args.getString('message')

        try{
            
            let SuccesEmbedBot = new Discord.EmbedBuilder()
                .setDescription(":white_check_mark: **Successfully sent your message !**")
                .setColor("Green")

            message.reply({embeds: [SuccesEmbedBot], ephemeral: true})
            await message.channel.send({content: `${messages}`})
        
        }catch(err) {console.log(err)}
    }
}