import { createBrowserClient } from '@supabase/ssr';
import type { Database } from '@/types/database.types';

/**
 * Validates if the Supabase environment URL and Anon Key are valid JWT tokens.
 */
export function isSupabaseConfigured(): boolean {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  return Boolean(
    url &&
      key &&
      url.startsWith('https://') &&
      !url.includes('placeholder') &&
      !url.includes('your-supabase-project-id') &&
      key.startsWith('eyJ')
  );
}

/**
 * Creates a client-side Supabase instance for browser components.
 * Fallbacks safely if environment variables are missing or invalid.
 */
export function createClient() {
  const url = isSupabaseConfigured()
    ? process.env.NEXT_PUBLIC_SUPABASE_URL!
    : 'https://placeholder.supabase.co';

  const key = isSupabaseConfigured()
    ? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    : 'placeholder-anon-key';

  return createBrowserClient<Database>(url, key);
}
