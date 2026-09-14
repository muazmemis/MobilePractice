import { useState } from 'react';
import { Button, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const index = () => {
  // usss
  const [isVisible, setIsVisible] = useState(false);
  const handleVisibility = () => setIsVisible(!isVisible);
  return (
    <SafeAreaView>
      <Button title="Göster/Gizle" onPress={handleVisibility} />
      {isVisible && <Text style={{ fontWeight: 'bold', alignSelf: 'center', marginTop: 20 }}>Çok Gizli</Text>}
      {/* {isVisible ? <Text style={{ fontWeight: 'bold', alignSelf: 'center', marginTop: 20 }}>Çok Gizli</Text> : null} */}
    </SafeAreaView>
  );
};

export default index;
