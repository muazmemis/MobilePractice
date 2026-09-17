import { Link } from 'expo-router';
import { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
  };
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
};

const Index = () => {
  const [user, setuser] = useState<User[]>([]);
  const API_URL = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setuser(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View>
      <Text className="p-4 text-6xl font-bold">Index</Text>
      <FlatList
        data={user}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Link href={`/users/${item.id}`}>
            <Text className="p-2 text-lg">{item.name}</Text>
          </Link>
        )}
      />
    </View>
  );
};

export default Index;
