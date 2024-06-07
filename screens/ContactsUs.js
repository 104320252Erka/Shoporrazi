import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Header from './headerForScreens';
import Footer from './footer';

const ContactUs = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    alert('Message submitted successfully!');
    setMessage('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Contact us'}/>
      <View style={styles.content}>
        <Text style={styles.title}>Contact Us</Text>

        <View style={styles.contactInfo}>
          <Text style={styles.contactLabel}>Phone:</Text>
          <Text style={styles.contactText}>+61 (04) 22153000</Text>
        </View>

        <View style={styles.contactInfo}>
          <Text style={styles.contactLabel}>Email:</Text>
          <Text style={styles.contactText}>104320252@swin.edu.au</Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Message</Text>
          <TextInput
            style={styles.textArea}
            value={message}
            onChangeText={setMessage}
            placeholder="Enter your message"
            multiline
            numberOfLines={4}
          />
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
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
  contactInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  contactLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  contactText: {
    fontSize: 18,
    color: '#333',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 16,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#21CDA8',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ContactUs;
