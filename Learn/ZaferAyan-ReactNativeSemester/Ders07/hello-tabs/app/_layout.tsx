import Entypo from '@expo/vector-icons/Entypo';
import { Tabs } from 'expo-router';
import { NativeTabs } from 'expo-router/unstable-native-tabs';
import { Platform, Text } from 'react-native';

const Layout = () => {
  return Platform.OS === 'ios' ? (
    <NativeTabs>
      <NativeTabs.Trigger name="(tabs)/index">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf="house.fill"
          selectedColor={'#dd0000'}
          drawable="custom_android_drawable"
        />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="(tabs)/profile">
        <NativeTabs.Trigger.Label>Profile</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf="person.fill"
          selectedColor={'#dd0000'}
          drawable="custom_android_drawable"
        />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="(tabs)/settings">
        <NativeTabs.Trigger.Icon
          sf="gear"
          selectedColor={'#dd0000'}
          drawable="custom_settings_drawable"
        />
        <NativeTabs.Trigger.Label>Settings</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  ) : (
    <Tabs>
      <Tabs.Screen
        name="(tabs)/index"
        options={{
          title: 'Anasayfa',
          tabBarIcon: ({ focused, color, size }) => {
            return <Entypo name="home" size={size} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="(tabs)/profile"
        options={{
          title: 'Profil',
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) return <Text>😌</Text>;
            return <Text>😄</Text>;
          },
        }}
      />
      <Tabs.Screen
        name="(tabs)/settings"
        options={{
          title: 'Ayarlar',
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) return <Text>🚀</Text>;
            return <Text>⚙️</Text>;
          },
        }}
      />
    </Tabs>
  );
};

export default Layout;
