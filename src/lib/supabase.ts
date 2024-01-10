import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  import.meta.env.SUPABASE_URL,
  import.meta.env.SUPABASE_ANON_KEY
);


// Function to fetch all user data from the 'users' table
export async function fetchAllUsersData() {
  const { data, error } = await supabase
    .from('customers')
    .select('*');

  if (error) throw new Error(error.message);
  return data;
}