const discord = require("discord.js");
const bot = new discord.Client()


module.exports = {
  name: "ban",
  category: "⛏moderation commands",
  description: "Ban anyone with one shot whithout knowing anyone xD",
  usage: "ban <@user> <reason>",
  run: async (client, message, args) => {
    
    if(!message.member.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(`**${message.author.username}**, <a:DL_denied:734667833883099178> You do not have perms to ban someone`)
    }
    
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(`**${message.author.username}**, <a:DL_denied:734667833883099178> I am do not have perms to ban someone`)
    }
    
    const target = message.mentions.members.first();
    
    if(!target) {
      return message.channel.send(`**${message.author.username}**, <a:DL_denied:734667833883099178> Please mention the person who you want to ban.`)
    }
    
    if(target.id === message.author.id) {
      return message.channel.send(`**${message.author.username}**, <a:DL_denied:734667833883099178> You can not ban yourself!`)
    }
    
   
    
   if(!args[1]) {
     return message.channel.send(`**${message.author.username}**, <a:DL_denied:734667833883099178> Please Give Reason To ban Member`)
   }
    
    let embed = new discord.MessageEmbed()
    .setTitle("Action : Ban")
    .setDescription(`<a:redtick:734667231736234024> Banned ${target} (${target.id})`)
    .setColor("RANDOM")
    .setThumbnail(target.avatarURL)
    .setFooter(`Banned by ${message.author.tag}`);
    
    message.channel.send(embed)
    target.ban(args[1])
    
    
    
  }
}