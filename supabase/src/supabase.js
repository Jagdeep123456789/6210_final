import { createClient} from '@supabase/supabase-js';

const supabaseUrl ='https://udexahqocsktofobpduv.supabase.co';
const supabaseKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkZXhhaHFvY3NrdG9mb2JwZHV2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNTkyMTY2MSwiZXhwIjoyMDQxNDk3NjYxfQ.TCzLTuTufGlSgm6PLdXzWz8ImMjT6BltUH9RY4LCiec';
export const supabase = createClient(supabaseUrl,supabaseKey);