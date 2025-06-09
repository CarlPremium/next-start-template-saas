// eslint-disable-next-line @typescript-eslint/quotes
import { createClient, SupabaseClient } from '@supabase/supabase-js';

let client: SupabaseClient | null = null;

export const getSupabaseClient = () => {
  if (!client) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ``;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ``;
    if (supabaseUrl && supabaseAnonKey) {
      client = createClient(supabaseUrl, supabaseAnonKey);
    }
  }
  return client;
};

export default getSupabaseClient;
