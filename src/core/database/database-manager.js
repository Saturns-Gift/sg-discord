const { createClient } = require('@supabase/supabase-js');
const { supabaseUrl, superbasePublicAnonKey } = require('../../config/bot-config.json');

module.exports = {
   supabase: createClient(supabaseUrl, superbasePublicAnonKey),
};
