import { createClient } from "@refinedev/supabase";

// TODO: Use .env values. Doesn't work correctly after Azure OAuth flow?!
// const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
// const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY

const SUPABASE_URL="https://hiepmlulwtrdfupomzuw.supabase.co"
const SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhpZXBtbHVsd3RyZGZ1cG9tenV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk0NTkwNDAsImV4cCI6MjAxNTAzNTA0MH0.bQ-8ThMXbOCHjej63BEnXiiqqFqSHQBiBddOlH2VKgg";


export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  db: {
    schema: "public",
  },
});
