// rnfe

import { useAuth } from '@/src/context/AuthContext';
import { Redirect } from 'expo-router';
import { useEffect } from 'react';
import { Text } from 'react-native';

const Index = () => {
  const { session, isLoading } = useAuth();

  // uffs
  useEffect(() => {
    return () => {
      console.log('Oldü');
    };
  }, []);

  if (isLoading) {
    return <Text>Splash screen</Text>;
  }

  if (session) {
    return <Redirect href={'/hello'} />;
  } else {
    return <Redirect href={'/login'} />;
  }
};

export default Index;
