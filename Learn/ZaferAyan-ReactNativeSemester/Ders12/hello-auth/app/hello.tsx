import { useAuth } from '@/src/context/AuthContext';
import { Redirect } from 'expo-router';
import { Text } from 'react-native';

const Hello = () => {
  const { auth } = useAuth();

  if (auth.isLoading) {
    return <Text>Loading...</Text>;
  }

  if (auth.session) {
    return <Redirect href="/hello" />;
  } else {
    return <Redirect href="/login" />;
  }
};

export default Hello;
