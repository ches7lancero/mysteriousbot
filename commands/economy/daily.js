const discord = require('discord.js')
module.exports = {
  name: "daily",
  category: "💎premium commands",
  description: "This command is only for premium",
  usage: "daily",
  run: (client, message) => {
    message.channel.send(`This command is only for premium!`);
  }
  
}