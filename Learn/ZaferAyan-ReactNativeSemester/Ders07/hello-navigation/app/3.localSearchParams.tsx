import { Link } from 'expo-router';
import { View } from 'react-native';

export default function Home() {
  return (
    <View>
      <Link
        href={{
          pathname: '/detail',
          params: {
            // Add your route parameters here
            username: 'Muaz',
          },
        }}>
        Go to Detail
      </Link>
    </View>
  );
}
