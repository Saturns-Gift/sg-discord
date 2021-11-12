const { getEmbedFromTemplate } = require('@sg/core/graphics/graphic-generated');

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
      console.time('benchmark');
      const image = await getEmbedFromTemplate('test', 'test.jpg');
      console.timeEnd('benchmark');
      ctx.channel.send('some html', image);
   },
};
