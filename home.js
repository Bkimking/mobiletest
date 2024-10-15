import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Button } from 'react-native';
import styles from './styles';

const bgImages = [
  require('./assets/bg4.jpeg'),
];

export default function HomeScreen({ navigation }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % bgImages.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);
  

  return (
    <ImageBackground source={bgImages[currentImage]} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to HabitFlow</Text>
        <Text style={styles.subtitle}>Your Personal Journey to Consistent Success</Text>
        <Button title="Login" onPress={() => navigation.navigate('Login')} style={styles.button} />
      </View>

      {/* About button at the bottom left */}
      <TouchableOpacity style={[styles.link, styles.aboutLink]} onPress={() => navigation.navigate('About')}>
        <Text style={styles.linkText}>About</Text>
      </TouchableOpacity>

      {/* Contacts button at the bottom right */}
      <TouchableOpacity style={[styles.link, styles.contactsLink]} onPress={() => navigation.navigate('Contacts')}>
        <Text style={styles.linkText}>Contacts</Text>
      </TouchableOpacity>
      
    </ImageBackground>
  );
}
