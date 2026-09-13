import { useTheme } from 'expo-router';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Index = () => {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <Text style={styles.myText}>Index</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  myText: {
    fontSize: 42,
    fontWeight: 'bold',
    fontFamily: 'Verdana',
    color: 'red',
  },
});

export default Index;
