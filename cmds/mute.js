module.exports.run = async (bot, message, args) => {
  // Put the commands (what it does) within the { }
let toMute = message.guild.member(message.mentions.users.first());
if(toMute.id === message.author.id) return message.channel.sendMessage("You cannot mute yourself.");
if(toMute.highestRole.position >= message.member.highestRole.position) return message.channel.sendMessage("You cannot mute a player who is your rank or higher.")
if (!toMute) return message.channel.("You did not specify a user mention.");
let role = message.guild.roles.find(r => r.name === "iJScript Muted");
});
if(!role) {
  try{
    role = await message.guild.createRole({
      name: "iJScript Muted",
      color: "#000000",
      permissions: []
    });

    message.guild.channel.forEach(async (channel, id) => {
      await channel.overwritePermissions(role, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });
    });
  };
  } catch(e) {
    console.log(e.stack)
  }
  if(toMute.roles.has(role.id)) return message.channel.sendMessage("This user is already muted!")

  await toMute.addRole(role);
  message.channel.sendMessage("They have been muted.")

  }

  module.exports.help = {
    name: "mute" // Your command's name
  }
