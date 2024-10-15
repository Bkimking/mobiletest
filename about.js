import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const bgImages = [
  require('./assets/bg2.jpeg'),
];

export default function AboutScreen({ navigation }) {
  const [currentImage, setCurrentImage] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % bgImages.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <ImageBackground source={bgImages[currentImage]} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>About HabitFlow</Text>
        <Text style={styles.subtitle}>
          HabitFlow is a mobile application designed to help users build and maintain positive habits. 
          Through tracking your daily habits, visualizing your progress, and setting goals, 
          HabitFlow ensures that you stay consistent and achieve personal growth.
        </Text>
        
        {/* About image */}
        <Image source={require('./assets/bg8.jpeg')} style={styles.aboutImage} />

      </View>

      {/* Home button at the bottom left */}
      <TouchableOpacity style={[styles.link, styles.aboutLink]} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.linkText}>Home</Text>
      </TouchableOpacity>

      {/* Contacts button at the bottom right */}
      <TouchableOpacity style={[styles.link, styles.contactsLink]} onPress={() => navigation.navigate('Contacts')}>
        <Text style={styles.linkText}>Contacts</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}
