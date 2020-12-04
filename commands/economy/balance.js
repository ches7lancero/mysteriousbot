const discord = require('discord.js')
module.exports = {
  name: "balance",
  category: "💎premium commands",
  description: "This command is only for premium",
  usage: "balance",
  run: (client, message) => {
    message.channel.send(`This command is only for premium!`);
  }
  
}