import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './header';
import Footer from './footer';

const Category = ({ route }) => {
  const { categoryData } = route.params;
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const loadCart = async () => {
      try {
        const cartData = await AsyncStorage.getItem('cart');
        if (cartData) {
          setCart(JSON.parse(cartData));
        }
      } catch (error) {
        console.error('Failed to load cart', error);
      }
    };
    loadCart();
  }, []);

  const saveCart = async (cart) => {
    try {
      await AsyncStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
      console.error('Failed to save cart', error);
    }
  };

  const handleAddToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.pro_id === item.pro_id);
    let newCart;
    if (existingItem) {
      newCart = cart.map(cartItem =>
        cartItem.pro_id === item.pro_id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
    } else {
      newCart = [...cart, { ...item, quantity: 1 }];
    }
    setCart(newCart);
    saveCart(newCart);
    Alert.alert('Cart', `${item.name} added to cart`);
  };

  const incrementQuantity = (id) => {
    const updatedCartItems = cart.map(item =>
      item.pro_id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCartItems);
    saveCart(updatedCartItems);
  };

  const decrementQuantity = (id) => {
    const updatedCartItems = cart.map(item =>
      item.pro_id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCart(updatedCartItems);
    saveCart(updatedCartItems);
  };

  const removeItem = (id) => {
    const updatedCartItems = cart.filter(item => item.pro_id !== id);
    setCart(updatedCartItems);
    saveCart(updatedCartItems);
  };

  const renderCartButtons = (item) => {
    const cartItem = cart.find(cartItem => cartItem.pro_id === item.pro_id);
    if (cartItem) {
      return (
        <View style={styles.cartButtonsContainer}>
          <TouchableOpacity onPress={() => decrementQuantity(item.pro_id)} style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{cartItem.quantity}</Text>
          <TouchableOpacity onPress={() => incrementQuantity(item.pro_id)} style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => removeItem(item.pro_id)} style={styles.removeButton}>
            <Text style={styles.removeButtonText}>Remove</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => handleAddToCart(item)}
        >
          <Text style={styles.addButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      );
    }
  };

  if (!categoryData) {
    return (
      <View style={styles.loader}>
        <Text>No data available</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={categoryData}
        keyExtractor={(item) => item.pro_id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemDescription}>{item.pro_des}</Text>
            </View>
            {renderCartButtons(item)}
          </View>
        )}
      />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#21CDA8',
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    width: 100,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  cartButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: '#21CDA8',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  quantityButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantityText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  removeButton: {
    backgroundColor: '#ff4d4d',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginLeft: 10,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default Category;
