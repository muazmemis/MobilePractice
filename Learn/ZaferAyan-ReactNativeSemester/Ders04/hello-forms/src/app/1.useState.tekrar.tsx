import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Index = () => {
  // usss
  const [sayi, setSayi] = useState(42);

  const handlePress = () => {
    setSayi(sayi + 1);
  };

  console.log('Rendered', sayi);

  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.text}>Index</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 20, marginTop: 10 }}>{sayi}</Text>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});
