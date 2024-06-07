import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import Header from './headerForScreens';
import Footer from './footer';

const AboutScreen = ({ navigation }) => {
  const teamMembers = [
    { name: "Owais Ahmad", role: "101786123" },
    { name: "Fahad Alateeq", role: "102840965" },
    { name: "Meshari Althubaiti", role: "102434164" },
    { name: "Phongpadid Nandavong", role: "104829047" },
    { name: "Erdenebat Altangerel", role: "104320252" }
  ];

  const developers = [
    "Owais Ahmad",
    "Fahad Alateeq",
    "Meshari Althubaiti",
    "Phongpadid Nandavong",
    "Erdenebat Altangerel"
  ];

  const handlePressGooglePlay = () => {
    Linking.openURL('https://play.google.com/store');
  };

  const handlePressInstagram = () => {
    Linking.openURL('https://www.instagram.com');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title="About Us" goBackScreen="AboutPage2" />
      <ScrollView>
        <Text style={styles.title}>About Us</Text>
        <Text style={styles.sectionTitle}>Shopporazzi Project Team</Text>
        <View style={styles.teamContainer}>
          {teamMembers.map((member, index) => (
            <View key={index} style={styles.memberContainer}>
              <Text style={styles.memberName}>{member.name}</Text>
              <Text style={styles.memberRole}>{member.role}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.sectionTitle}>Developed by:</Text>
        <Text style={styles.developerText}>
          The Shoparrazi initiative represents a strategic effort undertaken by the company to
          revolutionise the consumer experience. It aims to expand convenience and affordability
          through the development of a cutting-edge mobile application. While there is seamless
          integration of technology and user-centric design in this project, Shoparrazi seeks to
          enable users to make informed purchasing decisions and optimise their grocery
          shopping process. Through providing a platform for price comparison, shopping list
          optimisation, and seamless delivery options, Shoparrazi works to simplify the entire
          grocery shopping journey for its users.
        </Text>
        <View style={styles.developersContainer}>
          {developers.map((developer, index) => (
            <Text key={index} style={styles.developerName}>{developer}</Text>
          ))}
        </View>
        <TouchableOpacity style={styles.actionButton} onPress={handlePressGooglePlay}>
          <Text style={styles.actionButtonText}>Rate us on Google Play</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={handlePressInstagram}>
          <Text style={styles.actionButtonText}>Follow us on Instagram</Text>
        </TouchableOpacity>
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#21CDA8',
  },
  teamContainer: {
    marginBottom: 20,
  },
  memberContainer: {
    marginBottom: 10,
  },
  memberName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  memberRole: {
    fontSize: 16,
    color: '#666',
  },
  developerText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
  developersContainer: {
    marginBottom: 20,
  },
  developerName: {
    fontSize: 16,
    color: '#666',
  },
  actionButton: {
    padding: 15,
    backgroundColor: '#21CDA8',
    marginVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  actionButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default AboutScreen;
