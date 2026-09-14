// rnfes
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type Props = {
  text: string;
  variant?: 'dodgerblue' | 'pink' | 'mediumseagreen';
};

const Button = ({ text, variant }: Props) => {
  let backgroundColor = variant || 'red';
  return (
    // Array syntax
    // <TouchableOpacity style={[styles.button, { backgroundColor: backgroundColor || 'red' }]}>

    // Spread syntax
    <TouchableOpacity style={{...styles.button, backgroundColor }}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
