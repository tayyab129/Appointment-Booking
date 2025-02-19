
import { createClient } from '@supabase/supabase-js'
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt3enV6YXpyemh4YmllZnR4ZGduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk4NTkyNDcsImV4cCI6MjA1NTQzNTI0N30.12VPe-bPpYW1JtLaW_kgyORl1dGrPn3H94-dBaT8214"
const supabaseUrl = 'https://kwzuzazrzhxbieftxdgn.supabase.co'
const supabaseKey = SUPABASE_KEY
export const supabase = createClient(supabaseUrl, supabaseKey)