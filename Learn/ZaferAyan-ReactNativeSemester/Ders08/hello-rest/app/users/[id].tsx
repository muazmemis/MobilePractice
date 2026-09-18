import { API_URL } from '@/src/constans/constants';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { User } from '..';

const UserDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);

  //   const API_URL = `https://jsonplaceholder.typicode.com/users/${id}`;
  useEffect(() => {
    fetch(`${API_URL}/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View>
      <Text>ID: {user?.id}</Text>
      <Text>Name: {user?.name}</Text>
      <Text>Username: {user?.username}</Text>
      <Text>Email: {user?.email}</Text>
      <Text>Phone: {user?.phone}</Text>
      <Text>Website: {user?.website}</Text>
      <Text>Company: {user?.company?.name}</Text>
      <Text>
        Address: {user?.address?.street}, {user?.address?.suite}, {user?.address?.city},{' '}
        {user?.address?.zipcode}
      </Text>
    </View>
  );
};

export default UserDetails;
