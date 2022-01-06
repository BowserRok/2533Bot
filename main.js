const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = 'OTI4Mzg1NTMwOTM1Mjc5NjM2.YdYAZw.tqozhc8jAzJMQVEVbHgLdM0hNC8'

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]

})
client.on('ready', () => {
    console.log(`logged in as ${client.user.tag}`)

})
client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello!")
    }
})
client.login(process.env.TOKEN)