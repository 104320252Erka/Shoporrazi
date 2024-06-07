import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import Header from './headerForScreens';
import Footer from './footer';

const Settings = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleNotifications = () => {
    setNotificationsEnabled((previousState) => !previousState);
  };

  const toggleTheme = () => {
    setDarkTheme((previousState) => !previousState);
  };

  const handlePrivacyPolicy = () => {
    alert('Privacy Policy URL goes here.');
  };

  const handleChangeAddress = () => {
    alert('Change Address functionality goes here.');
  };

  const handleLegal = () => {
    alert('Legal information URL goes here.');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header  title="Settings" />
      <View style={styles.content}>
        <Text style={styles.title}>Settings</Text>
        
        <View style={styles.setting}>
          <Text style={styles.settingLabel}>Your Name</Text>
          <Text style={styles.settingValue}>John Doe</Text>
        </View>

        <View style={styles.setting}>
          <Text style={styles.settingLabel}>Notifications</Text>
          <Switch
            value={notificationsEnabled}
            onValueChange={toggleNotifications}
          />
        </View>

        <View style={styles.setting}>
          <Text style={styles.settingLabel}>Dark Theme</Text>
          <Switch
            value={darkTheme}
            onValueChange={toggleTheme}
          />
        </View>

        <TouchableOpacity onPress={handlePrivacyPolicy} style={styles.link}>
          <Text style={styles.linkText}>Privacy Policy</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleChangeAddress} style={styles.link}>
          <Text style={styles.linkText}>Change Address</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleLegal} style={styles.link}>
          <Text style={styles.linkText}>Legal</Text>
        </TouchableOpacity>
        
      </View>
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  setting: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  settingLabel: {
    fontSize: 18,
  },
  settingValue: {
    fontSize: 18,
    color: '#333',
  },
  link: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  linkText: {
    fontSize: 18,
    color: '#007BFF',
  },
});

export default Settings;
