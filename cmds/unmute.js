module.exports.run = async (bot, message, args) => {
  // Put the commands (what it does) within the { }
  let toMute = message.guild.member(message.mentions.users.first());
  if(toMute.id === message.author.id) return message.channel.sendMessage("You cannot mute yourself.");
  if(toMute.highestRole.position >= message.member.highestRole.position) return message.channel.sendMessage("You cannot mute a player who is your rank or higher.")
  if (!toMute) return message.channel.("You did not specify a user mention.");
  let role = message.guild.roles.find(r => r.name === "iJScript Muted");
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("This user is not muted.")
  });
    await toMute.removeRole(role);
    message.channel.sendMessage("They have been unmuted.")

    }
}

module.exports.help = {
  name: "unmute" // Your command's name
}
