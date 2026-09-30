import { useAuth } from '@/src/context/AuthContext';
import { Text, View } from 'react-native';

export default function Home() {
  const { session, setSession } = useAuth();
  return (
    <View>
      <Text>{session?.user?.email}</Text>
    </View>
  );
}
