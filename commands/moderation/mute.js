const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "mute",
  description: "Mute anyone who break rules",
  category: "⛏moderation commands",
  usage: "mute <@mention> <reason>",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send(
        " <a:DL_denied:734667833883099178> Sorry but you do not have permission to mute anyone"
      );
    }

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send(" <a:DL_denied:734667833883099178> I do not have permission to manage roles.");
    }

    const user = message.mentions.members.first();
    
    if(!user) {
      return message.channel.send(" <a:DL_denied:734667833883099178> Please mention the member to who you want to mute")
    }
    
    if(user.id === message.author.id) {
      return message.channel.send(" <a:DL_denied:734667833883099178> I won't mute you -_-");
    }
    
    
    let reason = args.slice(1).join(" ")
    
    
    if(!reason) {
      return message.channel.send(" <a:DL_denied:734667833883099178> Please Give the reason to mute the member")
    }
    
  //TIME TO LET MUTED ROLE
    
    let muterole = message.guild.roles.cache.find(x => x.name === "Muted")
    
    
      if(!muterole) {
      return message.channel.send(" <a:DL_denied:734667833883099178> This server do not have role with name `Muted`")
    }
    
    
   if(user.roles.cache.has(muterole)) {
      return message.channel.send("Given User is already muted")
    }
    
  
    
    
    user.roles.add(muterole)
    
await message.channel.send(` <a:redtick:734667231736234024> You muted **${message.mentions.users.first().username}** For \`${reason}\``)
    
    user.send(`You are muted in **${message.guild.name}** For \`${reason}\``)
    
    
//WE ARE DONE HERE 
    
  }
};