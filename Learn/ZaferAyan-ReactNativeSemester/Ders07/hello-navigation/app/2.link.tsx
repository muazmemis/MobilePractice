import { Link } from 'expo-router';
import { Button, View } from 'react-native';

export default function Home() {
  return (
    <View>
      <Link href="/detail">Go to Detail</Link>
      <Link href="/detail" asChild>
        <Button title="Go to Detail with button" />
      </Link>
    </View>
  );
}
