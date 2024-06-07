import React from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Header from './headerForScreens';
import Footer from './footer';
import { useNavigation } from '@react-navigation/native';

const HomePage = () => {
  const navigation = useNavigation();

  const buttons = [
    { name: "About", icon: 'https://cdn-icons-png.flaticon.com/512/3356/3356179.png', action: () => navigation.navigate('AboutScreen') },
    { name: "Favourite Products", icon: 'https://i.postimg.cc/k4hZ9Wtz/star.png', action: () => navigation.navigate('Favorites') },
    { name: "Settings", icon: 'https://i.postimg.cc/fL4Cv5mw/cogwheel.png', action: () => navigation.navigate('Settings') },
    { name: "Help", icon: 'https://i.postimg.cc/0jXJV2Fp/help.png', action: () => navigation.navigate('Help') },
    { name: "Contact Us", icon: 'https://i.postimg.cc/9MRMctnq/contact-us.png', action: () => navigation.navigate('Contact') },
    { name: "Log out", icon: 'https://i.postimg.cc/dVbNWqKP/logout.png', action: () => navigation.navigate('Log') }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'About'} />
      <View style={styles.profileSection}>
        <Image source={require('./photos/dairy.png')} style={styles.profileImage} />
        <View style={styles.profileTextContainer}>
          <Text style={styles.userName}>John Doe</Text>
          <Text style={styles.userEmail}>johndoe11@gmail.com</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        {buttons.map((button, index) => (
          <TouchableOpacity style={styles.button} key={index} onPress={button.action}>
            <Image source={{ uri: button.icon }} style={styles.buttonImage} />
            <Text style={styles.buttonText}>{button.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* <Footer /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f9f9f9',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileTextContainer: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 16,
    color: '#666',
  },
  buttonContainer: {
    padding: 15,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1
  },
  buttonImage: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  buttonText: {
    fontSize: 18,
    color: '#333'
  },
});

export default HomePage;
