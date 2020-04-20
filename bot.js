const Discord = require("discord.js");
const bot = new Discord.Client();

let i  = 0;
let quizz = ["J'évolue en Carabaffe ","Je suis de type plante","Je suis faible au type électrique"];
let rep = ["A","B","A"];
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
    if(message.content == "!caraquiz")
    {
        message.channel.send({
            embed:{
                color: 3447003,
                description: "__**Question "+(i+1)+"**__",
                fields:[
                    {
                        name: quizz[i],
                        value:"A: Vrai  B:Faux",
                    }
                ]
            }

        })
    }
    if(message.content == rep[i])
    {
        message.reply("GG Well played");
        message.react("701814682838630410");
        i++;
        if(i == 3)
        {
            i = 0;
        }
    }

});

bot.login("NzAxNzk5NTI5NTAxOTQ5OTgy.Xp2wKg.kqcHZMJHENyicOi_uzDlxQ1JAkI");