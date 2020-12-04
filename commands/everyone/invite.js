const discord = require('discord.js')
module.exports = {
  name: "invite",
  category: "ℹ️info commands",
  description: "Get bot invite link",
  usage: "invite",
  run: (client, message) => {
    message.channel.send(`<:check:314349398811475968> https://discord.com/oauth2/authorize?client_id=724417253285822577&scope=bot&permissions=2050485374&redirect_uri=https%3A%2F%2Finvitemysterious.8b.io%2F`);
  }
  
}
