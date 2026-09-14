import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const colors = {
  bg: '#F3F3F7',
  sendBg: '#FCDBD4',
  primary: '#E62A50',
};

const Index = () => {
  const handleLogin = () => {};
  const [email, setEmail] = useState<string>('muazmemis@gmail.com');
  const [password, setPassword] = useState('password!');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.sendBg}>
        <Feather name="send" size={24} color={colors.primary} />
      </View>
      <Text style={styles.title}>Sign In</Text>
      <Text style={styles.description}>Description goes here</Text>
      <View style={styles.emailContainer}>
        <Feather name="user" size={24} color="#666" />
        <TextInput
          style={styles.email}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          placeholderTextColor={'#939'}
          keyboardType="email-address"
          autoCapitalize="none"
          returnKeyType="done"
        />
      </View>
      <View style={styles.passwordContainer}>
        <Feather name="lock" size={24} color="#666" />
        <TextInput
          style={styles.password}
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          placeholderTextColor={'#939'}
          secureTextEntry={!isPasswordVisible}
          returnKeyType="done"
        />
        <Feather
          name={isPasswordVisible ? 'eye-off' : 'eye'}
          size={24}
          color="#666"
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          style={styles.eyeIcon}
        />
      </View>
      <Text style={styles.forgotPassword}>Forgot Password?</Text>
      <TouchableOpacity style={styles.btnLogin} onPress={handleLogin}>
        <Text style={styles.txtLogin}>Sign In</Text>
      </TouchableOpacity>

      {/* Or Container */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 16 }}>
        <View style={styles.orLine} />
        <Text style={{ color: '#666' }}>Or</Text>
        <View style={styles.orLine} />
      </View>

      {/* Sign In Google */}
      <TouchableOpacity style={styles.socialBtnContainer}>
        <FontAwesome5 name="google" size={24} color="tomato" style={{ marginRight: 8 }} />
        <Text style={styles.txtSocial}>Sign In with Google</Text>
      </TouchableOpacity>
      {/* Sign In Facebook */}
      <TouchableOpacity style={styles.socialBtnContainer}>
        <FontAwesome5 name="facebook" size={24} color="dodgerblue" style={{ marginRight: 8 }} />
        <Text style={styles.txtSocial}>Sign In with Facebook</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  sendBg: {
    backgroundColor: colors.sendBg,
    borderRadius: 100,
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
    color: '#666',
  },
  emailContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 32,
    padding: 16,
    marginBottom: 16,
    marginHorizontal: 24,
  },
  email: {
    marginLeft: 12,
    width: '100%',
  },
  passwordContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 32,
    padding: 16,
    marginBottom: 16,
    marginHorizontal: 24,
  },
  password: {
    marginLeft: 12,
    width: '100%',
  },
  eyeIcon: {
    position: 'absolute',
    right: 16,
    top: 16,
  },
  forgotPassword: {
    color: '#666',
    marginBottom: 16,
    marginRight: 24,
    textAlign: 'right',
  },
  btnLogin: {
    backgroundColor: colors.primary,
    borderRadius: 32,
    padding: 16,
    marginHorizontal: 24,
    alignItems: 'center',
    marginBottom: 16,

    // Shadow
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  txtLogin: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  orLine: {
    flex: 1,
    backgroundColor: '#666',
    height: 1,
    marginHorizontal: 16,
  },
  socialBtnContainer: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#666',
    borderWidth: 1,
    borderRadius: 32,
    padding: 16,
    marginTop: 16,
    marginHorizontal: 24,
  },
  txtSocial: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
