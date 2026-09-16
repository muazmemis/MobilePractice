import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

const Detail = () => {
  const { username } = useLocalSearchParams();

  return (
    <View>
      <Text>Detail</Text>
      <Text>Username: {username}</Text>
    </View>
  );
};

export default Detail;
