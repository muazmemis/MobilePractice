import { Link } from 'expo-router';
import { View } from 'react-native';

export default function Home() {
  return (
    <View>
      <Link href="/products">Go to Products</Link>
    </View>
  );
}
