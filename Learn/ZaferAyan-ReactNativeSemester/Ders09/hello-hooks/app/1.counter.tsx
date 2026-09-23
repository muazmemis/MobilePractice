import { useState } from 'react';
import { Button, Text, View } from 'react-native';

const Index = () => {
  const initialSayi = 0;
  const [sayi, setSayi] = useState(initialSayi);
  const handleArtir = () => setSayi(sayi + 1);
  const handleAzalt = () => setSayi(sayi - 1);
  const handleReset = () => setSayi(initialSayi);

  return (
    <View>
      <Button title="Increase" onPress={handleArtir} />
      <Button title="Decrease" onPress={handleAzalt} />
      <Button title="Reset" onPress={handleReset} />
      <Text className="text-lg font-bold">{sayi}</Text>
    </View>
  );
};

export default Index;
