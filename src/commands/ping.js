module.exports = {
   name: 'ping',
   aliases: ['ping'],
   description: 'A simple ping',

   // Whether the command requires arguments
   reqArgs: true,
   // Arguments usage
   usage: '{ ping }',
   // Example usage of the command
   exampleUsage: 'sg.ping',

   category: 'testing',

   // Command cooldown in milliseconds
   cooldown: 300,

   async run(ctx) {
      ctx.channel.send('Pong!');
   },
};
