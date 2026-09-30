import 'react-native-url-polyfill/auto';

import { createClient } from '@supabase/supabase-js';

import * as ExpoSecureStore from 'expo-secure-store';

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const supabasePublishableKey = process.env.EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;

const ExpoSecureStoreAdapter = {
  getItem: (key: string) => ExpoSecureStore.getItem(key),
  setItem: (key: string, value: string) => ExpoSecureStore.setItem(key, value),
  removeItem: (key: string) => ExpoSecureStore.deleteItemAsync(key),
};

export const supabase = createClient(supabaseUrl, supabasePublishableKey, {
  auth: {
    storage: ExpoSecureStoreAdapter,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
