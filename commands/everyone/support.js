const discord = require('discord.js')
module.exports = {
  name: "support",
  category: "ℹ️info commands",
  description: "Get the bot support server",
  usage: "support",
  run: (client, message) => {
    message.channel.send(`<:check:314349398811475968> **support server** https://discord.gg/Ub7wQBA`);
  }
  
}
