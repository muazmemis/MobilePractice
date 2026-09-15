import Button from '@/components/Button';
import { View } from 'react-native';

const Index = () => {
  return (
    <View>
      <Button />
      <Button title="Press me" variant="danger" />
      <Button title="Show" variant="secondary" />
    </View>
  );
};

export default Index;
