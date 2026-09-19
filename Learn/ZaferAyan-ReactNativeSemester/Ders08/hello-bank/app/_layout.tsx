import { Octicons } from '@expo/vector-icons';
import '../global.css';

import { Tabs } from 'expo-router';
import { View } from 'react-native';

export default function Layout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'black', tabBarInactiveTintColor: 'darkgray' }}>
      <Tabs.Screen
        name="(tabs)/index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <Octicons name="home" size={size} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="(tabs)/card"
        options={{
          title: 'Card',
          tabBarIcon: ({ focused, color, size }) => {
            return <Octicons name="credit-card" size={size} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="(tabs)/scan"
        options={{
          title: 'Scan',
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View className="items-center justify-center w-16 h-16 bg-purple-500 rounded-full">
                <Octicons name="codescan" size={size} color="white" />
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="(tabs)/stats"
        options={{
          title: 'Stats',
          tabBarIcon: ({ focused, color, size }) => {
            return <Octicons name="graph" size={size} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="(tabs)/profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused, color, size }) => {
            return <Octicons name="person" size={size} color={color} />;
          },
        }}
      />
    </Tabs>
  );
}
