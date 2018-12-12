// THIS IS A TEMPLATE. COPY AND PASTE THIS INTO "cmds" AND EDIT (IF YOU WANT CUSTOM COMMANDS, OF COURSE.)


module.exports.run = async (bot, message, args) => {
  // Put the commands (what it does) within the { }
  console.log("Hello world!") // Just a hello world example. Feel free to remove. (optional, xD)
  channel.message.sendMessage("Hello world!") // Send a message in chat. Change the message to anything! (optional)
}

module.exports.help = {
  name: "example" // Your command's name
}
