import { SlashCommandBuilder } from 'discord.js'

module.exports = {
	data: new SlashCommandBuilder().setName('announcement').setDescription('Post messages!')
}