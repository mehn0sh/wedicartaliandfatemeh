// lib/supabase.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bptwixvvyuzobqfjsmkv.supabase.co";       // ← اینجا URL پروژه Supabase خودت بذار
const supabaseKey = "sb_publishable_1HyNZF8yTJZsnRAEG-1eXw_3MPqkaeh";   // ← اینجا Publishable Key بذار

export const supabase = createClient(supabaseUrl, supabaseKey);