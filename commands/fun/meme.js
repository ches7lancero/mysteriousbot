const discord = require("discord.js")
const got = require("got")

module.exports = {
  name: "meme",
  category: "👌fun commands",
  aliases: ["funnymeme"],
  description: "change someones name",
  run: async (client, message, args) => {
    got('https://www.reddit.com/r/memes/random/.json').then(response => {
      //Just got the reddit (That is why i copy pasted it)
      
      let content = JSON.parse(response.body)
      let permalink = content[0].data.children[0].data.permalink;
      let memeTitle = content[0].data.children[0].data.title;
      let memeImage = content[0].data.children[0].data.url;
      
      const MemeEmbed = new discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle(`${memeTitle}`)
      .setImage(memeImage)
      .setFooter("Bot by KingthecoolYT#5340 - from r/memes")
      
      message.channel.send(MemeEmbed)
    }).catch(err => console.log(err))
  }
}
