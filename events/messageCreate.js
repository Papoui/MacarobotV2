const { Events } = require('discord.js');

module.exports = {
    name: Events.MessageCreate,
    async execute(message) {
        // Send messages via Sophie through DMs
        if((message.channelId === "693898627692625981" || message.channelId === "1180970118038163497") && message.content.startsWith("**p ")) {
            await message.client.channels.cache.get("703732344552423535").send(message.content.slice(4));
        }
        // Je suis pas tout seul à être tout seul
        if(message.content === "<:jsuisPasToutSeulAEtreToutSeul:1050173089092210749>" && message. author.id !== "604494923500224517"){
            message.reply("Jsuis pas tout seul à être tout seul <:jsuisPasToutSeulAEtreToutSeul:1050173089092210749>").then(() => {
                const collectorFilter = m => message.author.id === m.author.id;

                message.channel.awaitMessages({ filter: collectorFilter, time: 60000, max: 1, errors: ['time'] })
                    .then(messages => {
                        if(messages.first().content
                            .toLowerCase()
                            .replaceAll("ç", "c")
                            .replaceAll(' ', '')
                            .replaceAll("ê", "e")
                            .replaceAll("é", '')
                            .replaceAll("à","a")
                            .replaceAll("e", "")
                            .startsWith("cafaitdjacadmoinsdanslatt")){
                            messages.first().reply("et si jcomptais combien on est <:jsuisPasToutSeulAEtreToutSeul:1050173089092210749>").then(() => {
                                const collectorFilter = m => message.author.id === m.author.id;

                                message.channel.awaitMessages({ filter: collectorFilter, time: 5000, max: 1, errors: ['time'] })
                                    .then(messages => {
                                        if(messages.first().content.toLowerCase().startsWith("beaucoup") || messages.first().content.toLowerCase().startsWith("bcp")){
                                            messages.first().reply("<:joie:1050171982064394321>");
                                        }
                                    })
                                    .catch(() => {
                                        message.channel.send('Beaucoup <:jsuisPasToutSeulAEtreToutSeul:1050173089092210749>');
                                        message.channel.send(`Merci pour le vent <@${message.author.id}> <:crying:1181000291030679582>`)
                                    });
                            });
                        }
                    })
                    .catch(() => {
                        message.reply('You did not enter any input!');
                    });
            });
        }
    },
};