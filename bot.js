const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready",function()
{
    console.log("Carapuce est dans la place");
})

bot.on("message", message =>
{
    if(message.content === "!ping")
    {
        message.channel.send("Carapong!");
    }
    if(message.content === "!carabonjour")
    {
        message.reply("this server is rated pegi 18 !");
        message.react("😀");
        message.react("701814682838630410")
    }
    if(message.content.startsWith("!pin"))
    {
        message.pin();
    }
    if (message.content === "!carahelp") {
 
        message.channel.send({
            embed: {
                color: 3447003,
                description: "__**Les différentes commandes**__",
                fields: [
                {
                    name: "!carahelp",
                    value: "Pour afficher cette aide."
                },
                {
                    name: "!ping",
                    value: "Pong !"
                },
                {
                    name: "!pin",
                    value: "Pour épingler le message qui commence par cette commande."
                }
                        ]
                    }
            }); 
        }
});

bot.login("NzAxNzk5NTI5NTAxOTQ5OTgy.Xp2wKg.kqcHZMJHENyicOi_uzDlxQ1JAkI");