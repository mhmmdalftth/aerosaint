const botsettings = require("./botsettings/json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();
bot.commands = new Discord.Collection();

fs.readdir("./cmds/", (err, files) => {
  if(err) console.error(err);

  let jsfiles = files.filter(f => f.split("."),pop() === "js");
  if(jsfiles.length <= 0) {
    console.log("No command files to load.")
    return;
  };

  console.log(`Loading ${jsfiles.length} command(s)!`)
});
bot.on("ready", async () => {
  console.log(`Bot is ready. Client Username: ${bot.user.username}`);
  bot.generateInvite(["ADMINISTRATOR"]).then(link => {
    console.log(link);
    jsfiles.forEach((f, i) => {
      let props = require(`./cmds/${f}`);
      console.log(`${i + 1}: ${f} loaded!`);
      bot.commands.set(props.help.name, props);
    };
  });

bot.on("message" async message => {
  if(message.author.bot) return message.channel.sendMessage("Does not obey commands from bot users.");
  if(message.channel.type === "dm") return message.channel.sendMessage("Cannot run commands in DM.");
});

bot.login(botsettings.token);
