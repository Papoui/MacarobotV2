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
        usr = message.options.getUser("utilisateur").id;
        const embed = new EmbedBuilder()
             .setDescription(`@<${message.author.id}> fait un câlin à @<${usr}>`)
             .setImage(
    }
}
