// rnfe
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Index = () => {
  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Bana tıkla</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.pinkButton}>
        <Text style={styles.text}>Bana tıkla</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.greenButton}>
        <Text style={styles.text}>Bana tıkla</Text>
      </TouchableOpacity>
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
