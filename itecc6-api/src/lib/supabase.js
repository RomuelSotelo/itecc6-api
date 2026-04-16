import { createClient } from '@supabase/supabase-js' 
const supabaseUrl = 'https://xqofszyiazpaetqnhkgp.supabase.co' 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhxb2ZzenlpYXpwYWV0cW5oa2dwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYyOTMzNTUsImV4cCI6MjA5MTg2OTM1NX0.X-rCwcdP1_eRGAVh2Z9rwg_UbSGK4GDvBvyTpIitvFc' 
export const supabase = createClient(supabaseUrl, supabaseKey )