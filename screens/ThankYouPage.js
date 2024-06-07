import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ThankYouPage = () => {
  const navigation = useNavigation();

  const navigateToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.messageContainer}>
        <Text style={styles.thankYouText}>Thank you for shopping with us!</Text>
        <Text style={styles.updateText}>We will give you an update on your delivery anytime soon.</Text>
      </View>
      <TouchableOpacity style={styles.homeButton} onPress={navigateToHome}>
        <Text style={styles.homeButtonText}>Go to Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  messageContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  thankYouText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  updateText: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
  },
  homeButton: {
    backgroundColor: '#21CDA8',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  homeButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default ThankYouPage;
