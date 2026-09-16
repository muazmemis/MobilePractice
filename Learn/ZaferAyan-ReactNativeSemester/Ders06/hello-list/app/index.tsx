import Header from '@/components/Header';
import Notification from '@/components/Notification';
import { notifications as data } from '@/data/data';
import { useState } from 'react';
import { FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  const [notifications, setNotifications] = useState(data);

  return (
    <SafeAreaView>
      <Header />
      <FlatList
        // className="gap-2" // contentContainerClassName kullanmak gerekiyor
        contentContainerClassName="p-4"
        ItemSeparatorComponent={() => <View className="h-4"></View>}
        data={notifications}
        keyExtractor={(n) => n.id}
        renderItem={({ item: n }) => <Notification notification={n} />}
      />
    </SafeAreaView>
  );
};

export default Home;
