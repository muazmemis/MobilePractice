import { useState } from 'react';
import { FlatList, Text } from 'react-native';

const Home = () => {
  // usss
  const [guvercinler, setGuvercinler] = useState([
    {
      id: '1',
      name: 'Paçalı',
    },
    {
      id: '2',
      name: 'Taklacı',
    },
  ]);
  return (
    <FlatList
      data={guvercinler}
      keyExtractor={(guvercin) => guvercin.id}
      renderItem={({ item: guvercin }) => <Text className="text-6xl">{guvercin.name}</Text>}
    />
  );
};

export default Home;
