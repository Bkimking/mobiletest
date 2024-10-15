import React from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import styles from '../styles'; // Use the existing styles

function RegisterScreen({ navigation }) {
  const handleRegister = () => {
    // Handle registration logic here
    console.log('Register pressed');
  };

  const handleLoginPress = () => {
    navigation.navigate('Login'); // Navigate to the Login screen
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
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your Firstname"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your Username"
      />
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
      <Button title="Register" onPress={handleRegister} style={styles.button} />
      
      {/* Login Link */}
      <TouchableOpacity onPress={handleLoginPress}>
        <Text style={styles.authLink}>Already have an account? Login</Text>
      </TouchableOpacity>

      {/* Home Link */}
      <TouchableOpacity onPress={handleHomePress}>
        <Text style={styles.authLink}>Home</Text>
      </TouchableOpacity>
    </View>
  );
}

export default RegisterScreen;
