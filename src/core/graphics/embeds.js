const { MessageEmbed } = require('discord.js-light');
const tipsManager = require('@sg/core/utils/tips/tips-manager');
const { prefix } = require('@sg/config/commands-config.json');
const colors = require('./colors');

module.exports = {
   info(color, description) {
      return new MessageEmbed()
         .setColor(color || colors.primary)
         .setTitle('Info')
         .setDescription(description)
         .setFooter(`Use ${prefix}help for support`);
   },

   warn(description) {
      return new MessageEmbed()
         .setColor(colors.warn)
         .setTitle('Warning')
         .setDescription(description)
         .setFooter(`Use ${prefix}help for support`);
   },

   error(description) {
      return new MessageEmbed()
         .setColor(colors.error)
         .setTitle('Error')
         .setDescription(description)
         .setFooter(`Use ${prefix}help for support`);
   },

   tip() {
      return new MessageEmbed()
         .setColor(colors.primary)
         .setDescription(tipsManager.getRandomTip());
   },
};
