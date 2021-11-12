const { MessageAttachment } = require('discord.js-light');

module.exports = {
   name: 'help',
   aliases: ['help'],
   description: 'Commands to help',

   // Whether the command requires arguments
   reqArgs: false,
   // Arguments usage
   usage: '{ help }',
   // Example usage of the command
   exampleUsage: 'sg.help',

   category: 'User Assistance',

   // Command cooldown in milliseconds
   cooldown: 400,

   async run(ctx) {
      // TODO: Speed this up somehow
      ctx.channel.send(`**Greetings Peasent!**
I am King Avery. My squires have let me know you are new to our lands so I will give you the rundown.

Welcome to Saturn's Gift a medieval conquest economy game where you fight against another kingdoms to control territory and gather resources.
Gather your warriors and go start a settlement!

If you are up for the quest, type \`sg.start\` to start.

Here are your lists of commands and don't make me tell you them again...
- \`sg.start\`
- \`sg.inventory\`
- More coming soon!

`, new MessageAttachment('https://img5.goodfon.com/wallpaper/nbig/1/ca/darek-zabrocki-by-darek-zabrocki-accolade-art-risunok-korol.jpg'));
   },
};
