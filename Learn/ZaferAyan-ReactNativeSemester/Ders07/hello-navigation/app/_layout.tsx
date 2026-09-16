import '../global.css';

import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Anasayfa' }} />
      <Stack.Screen name="detail" options={{ title: 'Detail Screen' }} />
    </Stack>
  );
}
