import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xnxxojeqnptpwvdwtqts.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhueHhvamVxbnB0cHd2ZHd0cXRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU2NjU4MDksImV4cCI6MjA1MTI0MTgwOX0.KEt-BtmRGW7EWvs4b7RzJ8B6oAA_ZMypYNLprWUEwVU';
export const supabase = createClient(supabaseUrl, supabaseKey);