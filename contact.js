import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, TextInput, Image } from 'react-native';
import styles from './styles';

const bgImages = [
  require('./assets/bg1.jpeg'),
];

export default function ContactsScreen({ navigation }) {
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
        <Text style={styles.title}>Contact HabitFlow</Text>

        {/* Optional: Contact form */}
        <TextInput style={styles.input} placeholder="Enter Name"/>
      <TextInput style={styles.input} placeholder="Enter Email" keyboardType="email-address"/>
      <TextInput style={styles.input} placeholder="Enter Subject"/>
        <TextInput style={styles.input} placeholder="Enter Message" multiline numberOfLines={4}/>
        
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Send Message</Text>
        </TouchableOpacity>
      {/*add break*/}
       <Text style={styles.subtitle}>We're here to help! Please reach out to us through the following options:</Text>
        {/* Contact information */}
        <Text style={styles.contactInfo}>Email: Brian01kimathi@gmail.com</Text>
        <Text style={styles.contactInfo}>Website: www.habitflow.com</Text>
        <Text style={styles.contactInfo}>Phone: (+254) 743 208 307</Text>
      </View>

      {/* Home button at the bottom left */}
      <TouchableOpacity style={[styles.link, styles.aboutLink]} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.linkText}>Home</Text>
      </TouchableOpacity>

      {/* About button at the bottom right */}
      <TouchableOpacity style={[styles.link, styles.contactsLink]} onPress={() => navigation.navigate('About')}>
        <Text style={styles.linkText}>About</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}
