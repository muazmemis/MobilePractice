import { useEffect } from 'react';
import { FlatList, Text } from 'react-native';

const Home = () => {
  console.log('component render');

  // uffs
  useEffect(() => {
    console.log('first effect');

    return () => {
      console.log('cleanup effect');
    };
  }, []);

  return (
    <FlatList
      data={['asd']}
      keyExtractor={(guvercin) => guvercin}
      renderItem={({ item: guvercin }) => <Text className="text-6xl">{guvercin}</Text>}
    />
  );
};

export default Home;
