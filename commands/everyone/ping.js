const discord = require('discord.js')
module.exports = {
  name: "ping",
  category: "ℹ️info commands",
  description: "Get bot ping :/",
  usage: "ping",
  run: (client, message) => {
    message.channel.send(`<:check:314349398811475968> **Pong** ${client.ws.ping}`);
  }
  
}
