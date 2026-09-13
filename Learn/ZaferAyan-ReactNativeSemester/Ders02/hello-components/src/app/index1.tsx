import { Text, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Index = () => {
  const scheme = useColorScheme(); // 'light' | 'dark' | null
  const color = scheme === 'dark' ? 'white' : 'black';

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={{ color }}>Index</Text>
    </SafeAreaView>
  );
};

export default Index;
