const {SlashCommandBuilder, PermissionFlagsBits} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('unban')
        .setDescription('Débannir un utilisateur')
        .addStringOption(option =>
            option
                .setName("utilisateur")
                .setDescription("ID de l'utilisateur à débannir")
                .setRequired(true))
        .setDefaultMemberPermissions( PermissionFlagsBits.BanMembers),
    async execute(message) {
        await message.guild.members.unban(message.options.getString("utilisateur"))
            .then(() => {
                message.reply(`<@${message.options.getString("utilisateur")}> a été débanni·e !`);
                message.client.users.send(message.options.getString("utilisateur"), `Vous avez été débanni du serveur suivant: ${message.guild.name}.\nSi vous le souhaitez, vous pouvez à nouveau le rejoindre avec l'invitation suivante:\nhttps://discord.gg/pxgrev8ZBS`)
                    .catch(()=>{
                        message.followUp({
                            content: `Les paramètres du compte de <@${message.options.getString("utilisateur")}> ne permettent pas de lui envoyer un message privé. Aucune invitation envoyée.`,
                            ephemeral: true
                        });
                    })
            })
            .catch(() =>{
                message.reply({content: "Utilisateur non valide", ephemeral: true});
            });
    }
}