import { Feather } from '@expo/vector-icons';
import { View } from 'react-native';

const Index = () => {
  return (
    <View className="m-4 items-center justify-center self-center rounded-full bg-orange-500 p-16">
      <Feather name="alert-triangle" size={96} color={'#f2f2f2'} />
    </View>
  );
};

export default Index;
