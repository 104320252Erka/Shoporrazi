import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Header = ({ navigation, title, goBackScreen }) => {
  return (
    <View style={styles.header}>
      <View style={styles.topSection}>
        <TouchableOpacity
          style={styles.goBackButton}
          onPress={() => navigation.navigate(goBackScreen)}
        >
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/271/271220.png' }}
            style={styles.goBackIcon}
          />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
      <View style={styles.locationSection}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/684/684908.png' }}
          style={styles.locationIcon}
        />
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
    marginBottom: 10,
  },
  goBackButton: {
    padding: 5,
  },
  goBackIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  locationSection: {
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
  },
});

export default Header;
