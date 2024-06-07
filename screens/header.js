import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.topSection}>
      <Image source={require('./photos/logo.png')} style={styles.logo} />
        <Text style={styles.title}>Good Afternoon John</Text>
      </View>
      <View style={styles.locationSection}>
        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/684/684908.png' }} style={styles.locationIcon} />
        <Text style={styles.locationText}>Swinburne University of Technology</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#21CDA8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: -15,
  },
  logo: {
    width: 100,
    height: 70,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    paddingRight: 20,
  },
  locationSection: {
    paddingTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
    resizeMode: 'contain',
  },
  locationText: {
    fontSize: 14,
    color: '#fff',
    paddingRight: 130,
  },
});

export default Header;
