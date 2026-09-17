import { Entypo } from '@expo/vector-icons';
import { Text } from 'react-native';
import '../global.css';

import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="(tabs)/index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) return <Text>🏠</Text>;
            return <Entypo name="home" size={size} color={color} />;
          },
        }}
      />
      s
      <Tabs.Screen
        name="(tabs)/profile"
        options={{ title: 'Profile', tabBarIcon: () => <Text>👤</Text> }}
      />
      <Tabs.Screen
        name="(tabs)/settings"
        options={{ title: 'Settings', tabBarIcon: () => <Text>⚙️</Text> }}
      />
    </Tabs>
  );
}
