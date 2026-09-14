import { StyleSheet, TextInput } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Index = () => {
  const [text, setText] = useState("Muaz");

  return (
    <SafeAreaView>
      <TextInput value={text} onChangeText={(text) => setText(text)} style={styles.input}></TextInput>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 16,
    padding: 8,
    margin: 10,
  },
});
