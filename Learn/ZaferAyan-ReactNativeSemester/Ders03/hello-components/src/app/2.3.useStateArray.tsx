import { useState } from 'react';
import { Button, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const index = () => {
  // usss
  const [sayilar, setSayilar] = useState<number[]>([1, 2, 3]);
  return (
    <SafeAreaView>
      <Button title="Rastgele Sayı Ekle" onPress={() => setSayilar([...sayilar, Math.floor(Math.random() * 100)])}></Button>
      <Text>{sayilar.join(', ')}</Text>
    </SafeAreaView>
  );
};

export default index;
