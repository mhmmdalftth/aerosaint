module.exports.run = async (bot, message, args) => {
  // Put the commands (what it does) within the { }

  message.channel.sendMessage(`The current prefix is ${botsettings.prefix}\nDefault Commands:`)
  message.channel.sendMessage("cmds - Commands!\nmute - Mute a player.\nunmute - Unmute a player\nuserinfo - Shows your user info.")
}

  module.exports.help = {
    name: "cmds" // Your command's name
  }
