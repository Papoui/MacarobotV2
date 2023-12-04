const {SlashCommandBuilder, PermissionFlagsBits} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kick')
        .setDescription('bannir un utilisateur')
        .addUserOption(option =>
            option
                .setName("utilisateur")
                .setDescription("Utilisateur à exclure")
                .setRequired(true))
        .addStringOption(option =>
            option
                .setName("motif")
                .setDescription("Motif de l'exclusion"))
        .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers)
        .addBooleanOption(option =>
            option
                .setName("dtc")
                .setDescription("(dans ton cul)")),
    async execute(message) {
        await message.reply(`<@${message.options.getUser("utilisateur").id}> exclu·e pour le motif suivant:\n- ${message.options.getString("motif") ?? 'sans motif'} ${message.options.getBoolean("dtc")?"\n(dans ton cul)":""}`);
        await message.guild.members.ban(message.options.getUser("utilisateur"));
    }
}