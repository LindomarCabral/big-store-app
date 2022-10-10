import { createClient } from '@supabase/supabase-js'
import useAuthUser from 'src/composables/UseAuthUser'

const supabaseUrl = 'https://kqfdlyuloyakszjcmpwn.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtxZmRseXVsb3lha3N6amNtcHduIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjU0MDE0MDgsImV4cCI6MTk4MDk3NzQwOH0.Vdz1Qtnx-53of5OLHnuHQlMbYqFZuxMxMFU3xPI6JIo'
const supabase = createClient(supabaseUrl, supabaseKey)

supabase.auth.onAuthStateChange((event, session) => {
  const { user } = useAuthUser()

  user.value = session?.user || null
})

// console.log('init supabase', supabase)
export default function useSupabase () {
  return { supabase }
}
