import { useState } from 'react';
import { ScrollView, Text } from 'react-native';

const Index = () => {
  const [list, setlist] = useState<string[]>([
    'Doğan',
    'Paçalı',
    'Ali',
    'Veli',
    'Doğan',
    'Paçalı',
    'Ali',
    'Veli',
    'Paçalı',
    'Ali',
    'Veli',
    'Doğan',
  ]);

  return (
    <ScrollView stickyHeaderIndices={[0]}>
      <Text className="bg-blue-500 p-3 text-white">Başlık</Text>
      {list.map((item, i) => (
        <Text key={i} className="mt-5 bg-yellow-500 p-5 text-lg font-semibold">
          {item}
        </Text>
      ))}
    </ScrollView>
  );
};

export default Index;
