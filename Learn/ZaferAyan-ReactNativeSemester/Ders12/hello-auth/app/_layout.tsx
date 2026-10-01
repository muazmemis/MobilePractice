import '../global.css';

import { AuthProvider, useAuth } from '@/src/context/AuthContext';
import { Stack } from 'expo-router';

export default function Layout() {
  // Anonim kullanıcı buralarda gezebilir
  const AnonymousStack = () => {
    return (
      <Stack>
        <Stack.Screen name="login" />
        <Stack.Screen name="signup" />
      </Stack>
    );
  };

  const ProtectedStack = () => {
    return (
      <Stack>
        <Stack.Screen name="hello" />
        <Stack.Screen name="details" />
      </Stack>
    );
  };

  const RootStack = () => {
    const { session } = useAuth();

    if (session) {
      return <ProtectedStack />;
    } else {
      return <AnonymousStack />;
    }
  };

  return (
    <AuthProvider>
      <RootStack />
    </AuthProvider>
  );
}
