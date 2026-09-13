// rnfes
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const index = () => {
  return (
    <SafeAreaView style={styles.mySafeAreaView}>
      <TouchableOpacity style={styles.myButton}>
        <Text style={styles.myText}>Bana tıkla</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  mySafeAreaView: {
    flex: 1,
    justifyContent: 'center',
  },
  myButton: {
    backgroundColor: 'dodgerblue',
    padding: 16,
    borderRadius: 15,
    marginHorizontal: 20,
  },
  myText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});
