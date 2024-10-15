import React from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import styles from '../styles'; // Use the existing styles

function LoginScreen({ navigation }) {
  const handleLogin = () => {
    // Handle login logic here
    console.log('Login pressed');
  };

  const handleRegisterPress = () => {
    navigation.navigate('Register'); // Navigate to the Register screen
  };

  const handleForgotpassPress = () => {
    navigation.navigate('Forgetpassword'); // Navigate to the Forgotpass screen
  };

  const handleHomePress = () => {
    navigation.navigate('Home'); // Navigate to the Forgotpass screen
  };


  return (
    <View style={styles.blackBackground}>
      <Image
        source={require('../assets/bg6.jpeg')} // Add your image here
        style={styles.loginImage} // Style for the image
      />
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} style={styles.button} />

      {/* Register Link */}
      <TouchableOpacity onPress={handleRegisterPress}>
        <Text style={styles.authLink}>Don't have an account? Register</Text>
      </TouchableOpacity>

      {/* Forgotpassword Link */}
      <TouchableOpacity onPress={handleForgotpassPress}>
        <Text style={styles.authLink}>Forgotpassword?</Text>
      </TouchableOpacity>

      {/* Home Link */}
      <TouchableOpacity onPress={handleHomePress}>
        <Text style={styles.authLink}>Home</Text>
      </TouchableOpacity>

    </View>
  );
}

export default LoginScreen;
