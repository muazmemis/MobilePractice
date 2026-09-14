// rnfe
import { useState } from 'react';
import { Button, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Index = () => {
  // usss
  const [count, setCount] = useState(0);
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);

  return (
    <SafeAreaView>
      <Button title="Artır" color="green" onPress={handleIncrement}></Button>
      <Button title="Azalt" color="red" onPress={handleDecrement}></Button>
      <Text style={{ fontSize: 24, textAlign: 'center', margin: 10 }}>{count}</Text>
    </SafeAreaView>
  );
};

export default Index;
