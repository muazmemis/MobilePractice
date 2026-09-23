import useCounter from '@/src/hooks/useCounter';
import { Button, Text, View } from 'react-native';

const Index = () => {
  // const { count, increment, decrement, reset } = useCounter({});
  const { count, increment, decrement, reset } = useCounter({ initialValue: 42, step: 3 });
  // const {
  //   count: sayi,
  //   increment: handleArttir,
  //   decrement: handleAzalt,
  //   reset: handleSifirla,
  // } = useCounter();

  return (
    <View>
      <Button title="Increase" onPress={increment} />
      <Button title="Decrease" onPress={decrement} />
      <Button title="Reset" onPress={reset} />
      <Text className="text-lg font-bold">{count}</Text>
    </View>
  );
};

export default Index;
