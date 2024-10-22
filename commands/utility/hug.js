const {SlashCommandBuilder, EmbedBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hug')
        .setDescription('hug')
        .addUserOption(option =>
            option
                .setName("utilisateur")
                .setDescription("Utilisateur à hug")
                .setRequired(true)),
    async execute(message) {
        const reponse = await fetch("https://api.otakugifs.xyz/gif?reaction=kiss&format=gif");
        const hug = await reponse.json();
        usr = message.options.getUser("utilisateur").id;
        const embed = new EmbedBuilder()
             .setDescription(`@<${message.author.id}> fait un câlin à @<${usr}>`)
             .setImage(`${hug.url}`)

        message.channel.send(embed);
    }
}
