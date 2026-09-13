// rnfes
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const index = () => {
  return (
    <SafeAreaView style={styles.mySafeAreaView}>
      <View style={styles.myCard}>
        <View style={styles.myPicture}></View>
        <Text style={styles.myName}>Muaz Memiş</Text>
        <Text style={styles.location}>Istanbul, Turkey</Text>
        <Text style={styles.title}>Backend Developer</Text>
        <View style={styles.myButtonContainer}>
          <TouchableOpacity style={styles.myButton}>
            <Text style={styles.myButtonText}>Github</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.myButton}>
            <Text style={styles.myButtonText}>Frontend Mentor</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.myButton}>
            <Text style={styles.myButtonText}>LinkedIn</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.myButton}>
            <Text style={styles.myButtonText}>Twitter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.myButton}>
            <Text style={styles.myButtonText}>Instagram</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;

const colors = {
  black: '#141414',
  darkGray: '#1F1F1F',
  gray: '#333333',
  lightgray: '#999999',
  white: '#FFFFFF',
  lemon: '#C3DB6C',
};

const styles = StyleSheet.create({
  mySafeAreaView: {
    flex: 1,
    backgroundColor: colors.black,
    padding: 20,
  },
  myCard: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.darkGray,
    padding: 20,
    borderRadius: 15,
  },
  myPicture: {
    backgroundColor: colors.lightgray,
    width: 100,
    height: 100,
    borderRadius: 100,
    marginHorizontal: 20,
  },
  myName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
    marginTop: 8,
  },
  location: {
    fontSize: 18,
    color: colors.lemon,
    marginTop: 8,
  },
  title: {
    fontSize: 14,
    color: colors.lightgray,
    marginTop: 8,
  },
  myButtonContainer: {
    width: '100%',
    marginTop: 24,
    gap: 18,
  },
  myButton: {
    backgroundColor: colors.gray,
    padding: 16,
    borderRadius: 10,
    width: '100%',
  },
  myButtonText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'semibold',
    color: colors.white,
  },
});
