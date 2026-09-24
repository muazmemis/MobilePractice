import useAuth from '@/src/hooks/useAuth';
import { Button, Text, View } from 'react-native';

export default function Home() {
  const { user, isLoggedIn, login, logout } = useAuth();
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
