const discord = require('discord.js')
module.exports = {
  name: "invite",
  category: "everyone",
  description: "Get bot invite link",
  usage: "invite",
  run: (client, message) => {
    message.channel.send(`https://discord.com/oauth2/authorize?client_id=724417253285822577&scope=bot&permissions=2050485374&redirect_uri=https%3A%2F%2Finvitemysterious.8b.io%2F`);
  }
  
}