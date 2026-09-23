import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import '../global.css';

import { Stack } from 'expo-router';

const queryClient = new QueryClient();

export default function Layout() {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <Stack />
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
