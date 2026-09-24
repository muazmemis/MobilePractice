import { useTheme } from '@/src/contexts/ThemeContext';
import { Button, Text, View } from 'react-native';

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.backgroundColor,
      }}>
      <Text style={{ color: theme.color, fontSize: theme.fontSize }}>Home Screen</Text>
      <Button title="Toggle Theme" onPress={toggleTheme} />
    </View>
  );
}
