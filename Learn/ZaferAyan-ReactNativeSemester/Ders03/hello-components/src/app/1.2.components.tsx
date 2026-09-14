// rnfe
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../components/button';

const Index = () => {
  return (
    <SafeAreaView>
      <Button text="Bana tıkla" variant="dodgerblue" />
      <Button text="Bana tıkla" variant="pink" />
      <Button text="Bana tıkla" variant="mediumseagreen" />
      <Button text="Bana tıkla" variant="dodgerblue" />
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  button: {
    padding: 20,
    backgroundColor: 'dodgerblue',
    borderRadius: 15,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
  pinkButton: {
    padding: 20,
    backgroundColor: 'pink',
    borderRadius: 15,
    alignItems: 'center',
  },
  greenButton: {
    padding: 20,
    backgroundColor: 'mediumseagreen',
    borderRadius: 15,
    alignItems: 'center',
  },
});
