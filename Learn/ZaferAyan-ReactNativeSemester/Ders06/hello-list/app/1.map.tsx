import { useState } from 'react';
import { Text, View } from 'react-native';

const Index = () => {
  const [list, setlist] = useState<string[]>(['Doğan', 'Paçalı', 'Ali', 'Veli']);

  return (
    <View>
      {list.map((item, i) => (
        <Text className="text-lg" key={i}>
          {item}
        </Text>
      ))}
    </View>
  );
};

export default Index;
