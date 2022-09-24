const Discord = require("discord.js");
const intents = new Discord.IntentsBitField(3276799)
const bot = new Discord.Client({intents})
const loadCommands = require("./Loaders/loadCommands")
const Events = require("./Loaders/loadEvents")
const config = require("./config");
const loadEvents = require("./Loaders/loadEvents");

bot.commands = new Discord.Collection()

bot.login(config.token)
loadCommands(bot)
loadEvents(bot)
