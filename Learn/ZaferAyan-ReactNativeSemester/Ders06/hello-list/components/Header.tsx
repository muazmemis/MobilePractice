import { notifications as data } from '@/data/data';
import { Text, View } from 'react-native';

const Header = () => {
  const unreadCount = data.filter((n) => !n.isRead).length;

  return (
    <View className="flex-row items-center justify-between p-4">
      {/* Notifications */}
      <View className="flex-row items-center gap-4">
        <Text className="text-2xl font-bold">Notifications</Text>
        <View className="rounded bg-blue-900 px-3 py-1">
          <Text className="font-semibold text-white">{unreadCount}</Text>
        </View>
      </View>
      {/* Mark All */}
      <Text className="text-gray-700">Mark all as read</Text>
    </View>
  );
};

export default Header;
