import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

const ProductDetail = () => {
  const { name, age } = useLocalSearchParams();

  return (
    <View>
      <Text>Product Name: {name}</Text>
      <Text>Product Age: {age}</Text>
    </View>
  );
};

export default ProductDetail;
