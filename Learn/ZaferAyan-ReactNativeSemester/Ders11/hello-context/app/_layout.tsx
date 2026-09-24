import { SafeAreaProvider } from 'react-native-safe-area-context';
import '../global.css';

import { AuthProvider } from '@/src/contexts/AuthContext';
import { ThemeProvider } from '@/src/contexts/ThemeContext';
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <SafeAreaProvider>
          <Stack />
        </SafeAreaProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}
