import { signup } from '@/src/lib/features/signup';
import { Link } from 'expo-router';

import { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
export default function SignUp() {
  const [email, setEmail] = useState<string>('muazmemis@gmail.com');
  const [password, setPassword] = useState<string>('passw0rd!');
  const handleSignUp = async () => {
    try {
      await signup(email, password);
      console.log('Sign up successful');
      alert('Sign up successful');
    } catch (error) {
      console.error(error);
      alert('Sign up failed: ' + error);
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
      <Button title="Sign Up" onPress={handleSignUp} />
      <Link href="/" asChild dismissTo>
        <Button title="Login" />
      </Link>
    </View>
  );
}
