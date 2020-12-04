import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://nbwygmccvmtwgsvvqazq.supabase.co';

const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function Users() {
  try {
    let { data, error } = await supabase.from('User').select('*');
    return data;
  } catch (error) {
    return error;
  }
}
