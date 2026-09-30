import { SafeAreaProvider } from 'react-native-safe-area-context';
import '../global.css';

import { AuthProvider } from '@/src/context/AuthContext';
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <AuthProvider>
      <SafeAreaProvider>
        <Stack />
      </SafeAreaProvider>
    </AuthProvider>
  );
}
