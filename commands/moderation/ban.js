const {SlashCommandBuilder, PermissionFlagsBits} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('bannir un utilisateur')
        .addUserOption(option =>
            option
                .setName("utilisateur")
                .setDescription("Utilisateur à bannir")
                .setRequired(true))
        .addStringOption(option =>
            option
                .setName("motif")
                .setDescription("Motif du bannissement"))
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
        .addBooleanOption(option =>
            option
                .setName("dtc")
                .setDescription("(dans ton cul)")),
    async execute(message) {
        await message.reply(`<@${message.options.getUser("utilisateur").id}> banni·e pour le motif suivant:\n- ${message.options.getString("motif") ?? 'sans motif'} ${message.options.getBoolean("dtc")?"\n(dans ton cul)":""}`);
        await message.guild.members.ban(message.options.getUser("utilisateur"));
    }
}