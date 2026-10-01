import { useAuth } from '@/src/context/AuthContext';
import { supabase } from '@/src/lib/supabase';
import { Redirect } from 'expo-router';
import { Button, Text, View } from 'react-native';

const Hello = () => {
  const { isLoading, session } = useAuth();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!session) {
    return <Redirect href="/login" />;
  }

  function handleLogout() {
    supabase.auth.signOut();
  }

  return (
    <View>
      <Text>Welcome {session.user.email}</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default Hello;
