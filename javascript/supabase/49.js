// supabase experiment 49
import { createClient } from "@supabase/supabase-js";const supabase=createClient(SUPABASE_URL,SUPABASE_ANON_KEY);const {data,error}=await supabase.from("students").select("*");console.log(data,error);
