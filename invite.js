// ASSUMPTIONS:
// message is the message that triggered the command
// the channel of the invite will be the channel where the message has been sent
async function replyWithInvite(message) {
  let invite = await message.channel.createInvite(
  {
    maxAge: 10 * 60 * 1000, // maximum time for the invite, in milliseconds
    maxUses: 1 // maximum times it can be used
  },
  `Requested with command by ${message.author.tag}`
)
.catch(console.log);

  message.reply(invite ? `Here's your invite: ${invite}` : "There has been an error during the creation of the invite.");
}
