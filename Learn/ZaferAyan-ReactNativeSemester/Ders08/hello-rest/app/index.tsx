import { API_URL } from '@/src/constans/constants';
import { Link, useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import { Button, FlatList, Text, View } from 'react-native';

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
  const [users, setUsers] = useState<User[]>([]);
  // const API_URL = 'https://jsonplaceholder.typicode.com/users';

  // useEffect(() => {
  //   // fetch(API_URL)
  //   fetch(`${API_URL}/users`)
  //     .then((response) => response.json())
  //     .then((data) => setUsers(data))
  //     .catch((error) => console.error(error));
  // }, []);

  const getUsers = () => {
    fetch(API_URL + '/users')
      .then((res) => res.json())
      .then((json) => setUsers(json));
  };

  // Ekrana geri dönüldüğünde çağrılır
  useFocusEffect(
    useCallback(() => {
      console.log('[useFocusEffect]');
      getUsers();
    }, [])
  );

  return (
    <View>
      <Link href="/users/add" asChild>
        <Button title="Add User" />
      </Link>
      <FlatList
        data={users}
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
