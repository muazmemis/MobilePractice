import { router } from 'expo-router';
import { Button, View } from 'react-native';

export default function Home() {
  const handlePres = () => {
    // Navigation logic to go to the Detail screen
    router.push('/detail');
    // router.navigate('/detail');
  };

  return (
    <View>
      <Button title="Go to Detail" onPress={handlePres} />
    </View>
  );
}
