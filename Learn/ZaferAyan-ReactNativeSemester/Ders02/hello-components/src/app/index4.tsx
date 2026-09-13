import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Index = () => {
  return (
    <SafeAreaView style={styles.mySafeArea}>
      <View style={styles.myBox}><Text>Index</Text></View>
      <View style={styles.myBox}><Text>Index</Text></View>
      <View style={styles.myBox}><Text>Index</Text></View>
      <View style={styles.myBox}><Text>Index</Text></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mySafeArea: {
    flex: 1,
    flexDirection: 'row',
    // flexWrap: 'wrap',
    
    // justifyContent: 'center',
    // justifyContent: 'space-between',
    justifyContent: 'space-around',

    alignItems: 'center', // flex: 1 ile ekranın tamamını height olarak kaplat sonra bunu çalıştır.
    // alignItems: 'flex-start',
    // alignItems: 'flex-end',
    
    gap: 16,
  },
  myBox: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
});

export default Index;
