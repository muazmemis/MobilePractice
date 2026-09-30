import { login } from '@/src/lib/features/login';
import { Link } from 'expo-router';
import { useState } from 'react';
import { Button, TextInput, View } from 'react-native';

export default function Login() {
  const [email, setEmail] = useState<string>('muazmemis@gmail.com');
  const [password, setPassword] = useState<string>('passw0rd!');

  const handleLogin = async () => {
    // handle login logic here
    try {
      await login(email, password);
      console.log('Login successful');
      alert('Login successful');
    } catch (error) {
      console.error(error);
      alert('Login failed');
    }
  };
  return (
    <View>
      <TextInput value={email} onChangeText={setEmail} placeholder="Enter your email" />
      <TextInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholder="Enter your password"
      />
      {/* login button */}
      <Button title="Login" onPress={handleLogin} />

      <Link href="/signup" asChild>
        <Button title="Sign Up" />
      </Link>
    </View>
  );
}
