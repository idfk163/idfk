const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("603493500235022336")
setInterval(function() {
channel.send(`0hCool:joy:`);
}, 30)
})

client.login(process.env.BOT_TOKEN);