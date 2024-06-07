import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ItemDetails = () => {
  const [productDetails, setProductDetails] = useState({
    pro_id: '',
    price: '',
    promo: '',
    name: ''
  });

  useEffect(() => {
    const loadProductDetails = async () => {
      try {
        const pro_id = await AsyncStorage.getItem("selectedProId");
        const price = await AsyncStorage.getItem("selectedPrice");
        const promo = await AsyncStorage.getItem("selectedPromo");
        const name = await AsyncStorage.getItem("selectedName");

        setProductDetails({ pro_id, price, promo, name });
      } catch (error) {
        console.error('Failed to load product details', error);
      }
    };

    loadProductDetails();
  }, []);

  return (
    <View style={styles.updateFormContainer}>
      <View style={styles.updateForm}>
        <Text style={styles.updateFormHeader}>{productDetails.name}</Text>
        <Text style={styles.detail}>Product ID: {productDetails.pro_id}</Text>
        <Text style={styles.detail}>Price: ${productDetails.price}</Text>
        {productDetails.promo && <Text style={styles.detail}>Promotion: {productDetails.promo}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  updateFormContainer: {
    padding: 20,
    backgroundColor: '#b3e0ff', 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  updateForm: {
    backgroundColor: '#ffffff', 
    padding: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4, 
    width: '100%',
    maxWidth: 400, 
  },
  updateFormHeader: {
    textAlign: 'center',
    color: '#333',
    fontSize: 24,
    marginBottom: 20,
  },
  detail: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
});

export default ItemDetails;
