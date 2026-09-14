import Feather from '@expo/vector-icons/Feather';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Index = () => {
  return (
    <SafeAreaView>
      <Feather name="user" size={64} color="darkblue" />
      <Feather name="home" size={64} color="black" />
      <Feather name="heart" size={64} color="tomato" />
      <Feather name="star" size={64} color="dodgerblue" />
      <Feather name="lock" size={64} color="seagreen" />
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({});
