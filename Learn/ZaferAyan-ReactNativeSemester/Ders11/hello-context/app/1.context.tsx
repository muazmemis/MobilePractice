import { Button, Text, View } from 'react-native';

import { AuthContext } from '@/src/contexts/AuthContext';
import { useContext } from 'react';

export default function Home() {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error('Hata: AuthProvider ile sarmalanmamış');
  }

  const { user, isLoggedIn, login, logout } = authContext;
  console.log({ user, isLoggedIn });

  return (
    <View>
      <Text>Home Screen</Text>
      <Text>{isLoggedIn ? `Logged in as ${user?.name}` : 'Not logged in'}</Text>
      <Button
        title={isLoggedIn ? 'Logout' : 'Login'}
        onPress={
          isLoggedIn ? logout : () => login({ id: '1', name: 'Muaz', email: 'muaz@example.com' })
        }
      />
    </View>
  );
}
