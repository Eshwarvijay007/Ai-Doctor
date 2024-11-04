import { createClient } from "@supabase/supabase-js";
import { drizzle } from "drizzle-orm/supabase";
import * as schema from "./schema";

// Replace with your Supabase URL and Anon Key
const supabaseUrl = "https://braqzrohngvxnttdcucs.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJyYXF6cm9obmd2eG50dGRjdWNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA2NDU4MzEsImV4cCI6MjA0NjIyMTgzMX0.TSr31Nbdd50cOezakUNjMpDQMXO4TJGdBvc4hlMDeCo";

const sql = createClient(supabaseUrl, supabaseAnonKey);

export const db = drizzle(sql, { schema });
