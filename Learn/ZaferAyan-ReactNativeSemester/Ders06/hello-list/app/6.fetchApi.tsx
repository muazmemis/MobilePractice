import { useEffect, useState } from 'react';
import { FlatList, Text } from 'react-native';

type Users = {
  id: number;
  name: string;
};

const Home = () => {
  // usss
  const [users, setusers] = useState<Users[]>([{ id: 1, name: 'Muaz' }]);

  useEffect(() => {
    const API_URL = 'https://jsonplaceholder.typicode.com/users';

    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setusers(data))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  return (
    <FlatList
      data={users}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <Text>{item.name}</Text>}
    />
  );
};

export default Home;
