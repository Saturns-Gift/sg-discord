const { supabase } = require('@sg/core/database/database-manager');

const createGuild = async (ctx) => {
   if (ctx.message.member.hasPermission('ADMINISTRATOR')) {
      const { data, error } = await supabase
         .from('guilds')
         .insert([
            {
               id: ctx.guildID,
               name: ctx.guild.name,
               adminId: ctx.userID,
            },
         ]);
      if (error) {
         return ctx.channel.send('An error occured.');
      }
      if (data) {
         const { data: userData, error: memberError } = await supabase
            .from('members')
            .insert([
               {
                  id: ctx.userID,
                  guild: ctx.guildID,
                  admin: true,
                  officer: true,
                  name: ctx.user.username,
               },
            ]);
         if (memberError) {
            return ctx.channel.send('An error occured.');
         }
         if (userData) {
            return ctx.channel.send(`
**Greetings Lord.**
My master of coin has added the kingdom of ${ctx.guild.name} into our ledger and you have been granted permission to claim land and start building your settlement.
Winter will be harsh so get prepared and beware of other guilds in this land as they will come for your throne.
Best of luck and may the gods be with you.

> Check out the help command to see what you can do.
            `);
         }
      }
   } else {
      return ctx.channel.send(`
**Halt Peasent!**
An administrator of the Guild must setup the guild by running the command \`sg.start\` before you can start.
      `);
   }
};

const addMember = async (ctx) => {
   const { data, error } = await supabase
      .from('members')
      .insert([
         {
            id: ctx.userID,
            guild: ctx.guildID,
            admin: ctx.message.member.hasPermission('ADMINISTRATOR'),
            officer: ctx.message.member.hasPermission('ADMINISTRATOR'),
            name: ctx.user.username,
         },
      ]);

   if (error) {
      const { data, error } = await supabase
         .from('members')
         .select(`
            id,
            guild (
               id,
               name
            )
         `)
         .match({ id: ctx.userID });

      const user = data[0];

      if (user.guild.id !== parseInt(ctx.guildID, 10)) {
         return ctx.channel.send(`
**Halt!**
You are already apart of the guild ${user.guild.name}. Leave the guild by running the command \`sg.join\` in the discord of the guild you want to join.
`);
      }

      return ctx.channel.send(`**Halt**
You are already in the my registry. Start helping your guild build your settlement!

> Check out the help command to see what you can do.
`);
   }

   if (data) {
      return ctx.channel.send(`
**Hello there ${ctx.user.username}**
You have joined the ranks of ${ctx.guild.name} and are ready to begin your assistance in building your kingdom. Good luck out there.

> Check out the help command to see what you can do.
      `);
   }
};

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
      const { data: guild, error } = await supabase
         .from('guilds')
         .select()
         .eq('id', ctx.guildID);

      if (error) {
         return ctx.channel.send('An error occured.');
      }

      if (guild.length === 0) {
         return createGuild(ctx);
      } 
      return addMember(ctx);
   },
};
