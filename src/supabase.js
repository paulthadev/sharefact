import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fyrovfchlncqoexhmrjy.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ5cm92ZmNobG5jcW9leGhtcmp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg1OTg5OTQsImV4cCI6MTk5NDE3NDk5NH0._BEf9f4nIukGyPKAJUzFfxYXKskrDSrr3jYPDR-NDm8";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
