import { useState } from 'react';
import { Button, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Index = () => {
  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    alert(`Email: ${email}\nPassword: ${password}\nGiriş yapıldı`);
  };
  const [email, setEmail] = useState<string>('muazmemis@gmail.com');
  const [password, setPassword] = useState('password!');
  const [description, setDescription] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        style={styles.input}
        autoCapitalize="none"
        keyboardType="email-address" // numeric, number-pad, numbers-and-punctuation"
      ></TextInput>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        style={styles.input}
        secureTextEntry // secureTextEntry={true}
      ></TextInput>
      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="Açıklama giriniz"
        style={[styles.input, { minHeight: 80, textAlignVertical: 'top' }]}
        numberOfLines={3} // specify the number of lines for the multiline input // 3 ise 3 satırlık bir alan gösterilir. denemek için height i kaldır.
        maxLength={75}
        multiline // multiline={true}
      ></TextInput>
      <TextInput placeholder="Ara..." style={styles.input} returnKeyType="search"></TextInput>
      <TextInput placeholder="Ara..." style={styles.input} autoComplete="password"></TextInput>

      <Button title="Giriş Yap" onPress={handleLogin}></Button>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    gap: 16,
  },
  input: {
    borderColor: 'dodgerblue',
    borderWidth: 1,
    padding: 10,
    borderRadius: 16,
  },
});
