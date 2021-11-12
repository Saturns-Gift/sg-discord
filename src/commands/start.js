module.exports = {
   name: 'start',
   aliases: ['start'],
   description: 'Commands to start',

   // Whether the command requires arguments
   reqArgs: false,
   // Arguments usage
   usage: '{ start }',
   // Example usage of the command
   exampleUsage: 'sg.start',

   category: 'User Assistance',

   // Command cooldown in milliseconds
   cooldown: 400,

   async run(ctx) {
      ctx.channel.send('Start Command');
   },
};
