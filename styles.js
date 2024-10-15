import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  blackBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Dark background for Login Screen
    padding: 20,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Slight overlay for other screens
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '80%', // Consistent width for all input fields
    padding: 15,  // Consistent padding
    marginBottom: 15,
    backgroundColor: 'rgb(255, 255, 255)', // Semi-transparent input field
    fontSize: 20,
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#6200EE',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  loginImage: {
    width: 100,
    height: 100,
    marginBottom: 30,
    borderRadius: 50,
  },
  authLink: {
    marginTop: 20,
    color: '#ADD8E6',
    fontSize: 16,
    textAlign: 'center',
  },
  link: {
    position: 'absolute',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Light background for the links
    borderRadius: 8,
  },
  linkText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
  aboutLink: {
    bottom: 20,
    left: 20,
  },
  contactsLink: {
    bottom: 20,
    right: 20,
  },
  aboutImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginVertical: 20,
  },
  contactImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginVertical: 20,
  },
  contactInfo: {
    fontSize: 16,
    color: '#fff',
    marginVertical: 5,
  },
  submitButton: {
    backgroundColor: '#007BFF',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
