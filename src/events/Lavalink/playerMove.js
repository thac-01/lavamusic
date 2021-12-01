const { MessageEmbed } = require("discord.js");
const { TextChannel } = require('discord.js')

module.exports = async (client, player, oldChannel, newChannel) => {
      const messageChannel = client.channels.cache.get(player.textChannel);

      const musicStop = new MessageEmbed()
      .setDescription('Music stopped as I have been disconnected from the voice channel.');

      if (!newChannel) {
        await player.destroy();
        return messageChannel.send({ embeds: [musicStop] });
      } else {
        player.voiceChannel = newChannel;
      }
      }
