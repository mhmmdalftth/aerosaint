module.exports.run = async (bot, message, args) => {
  // Put the commands (what it does) within the { }
    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setDescription("Your Info")
    .setColor("#9B59B6")
    .addField("Full Username", `${message.author.username}#${message.author.discriminator}`)
    .addField("Account Creation Date", message.author.createdAt);

    message.channel.send({embed: embed});
}

module.exports.help = {
  name: "userinfo" // Your command's name
}
