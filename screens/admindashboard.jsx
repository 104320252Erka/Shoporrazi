import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const URL = 'http://10.0.2.2:3307/retail_dashboard';

const AdminDashboard = ({ navigation }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ retail_id: 111 }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.ResposeCode.code === "00") {
          setItems(data.ResponseData.data);
        } else {
          setError(new Error(data.ResposeCode.message));
        }
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  const handleItemClick = async (item) => {
    try {
      await AsyncStorage.setItem('selectedItem', JSON.stringify(item));
      navigation.navigate('ItemDetails');
    } catch (error) {
      console.error('Failed to save item details', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Supermarket Items</Text>
      {error && <Text style={styles.error}>Error: {error.message}</Text>}
      <FlatList
        data={items}
        keyExtractor={(item) => item.pro_id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => handleItemClick(item)}>
            <Image source={{ uri: 'https://via.placeholder.com/80' }} style={styles.image} />
            <Text style={styles.itemText}>Name: {item.name}</Text>
            <Text style={styles.itemText}>Description: {item.pro_des}</Text>
            <Text style={styles.itemText}>Price: ${item.price}</Text>
            {item.promo_des && <Text style={styles.itemText}>Promotion: {item.promo_des}</Text>}
            <Text style={styles.clickableText}>Click me to redirect</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#004d00',
    padding: 20,
  },
  header: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  error: {
    color: 'red',
    textAlign: 'center',
  },
  item: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  itemText: {
    textAlign: 'center',
    color: '#555',
  },
  clickableText: {
    marginTop: 10,
    color: '#007bff',
    fontWeight: 'bold',
  },
});

export default AdminDashboard;
