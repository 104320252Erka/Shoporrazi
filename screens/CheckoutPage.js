import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './header';
import Footer from './footer';
import { useNavigation } from '@react-navigation/native';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [activeButton, setActiveButton] = useState('Best Quality');
  const deliveryFee = 2.99;
  const navigation = useNavigation();

  const navigateToHome = () => {
    navigation.navigate('Home');
  };

  const navigateToSearch = () => {
    navigation.navigate('Search');
  };

  const navigateToAbout = () => {
    navigation.navigate('Profile');
  };

  const navigateToCart = () => {
    navigation.navigate('Cart');
  };

  const navigateToPayment = () => {
    navigation.navigate('Payment');
  };

  const navigateToCategory = () => {
    navigation.navigate('Category');
  };

  useEffect(() => {
    const loadCart = async () => {
      try {
        const cartData = await AsyncStorage.getItem('cart');
        if (cartData) {
          setCartItems(JSON.parse(cartData));
        }
      } catch (error) {
        console.error('Failed to load cart', error);
      }
    };
    loadCart();
  }, []);

  const incrementQuantity = (id) => {
    const updatedCartItems = cartItems.map(item =>
      item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
    );
    setCartItems(updatedCartItems);
    saveCart(updatedCartItems);
  };

  const decrementQuantity = (id) => {
    const updatedCartItems = cartItems.map(item =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartItems(updatedCartItems);
    saveCart(updatedCartItems);
  };

  const removeItem = (id) => {
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCartItems);
    saveCart(updatedCartItems);
  };

  const saveCart = async (cartItems) => {
    try {
      await AsyncStorage.setItem('cart', JSON.stringify(cartItems));
    } catch (error) {
      console.error('Failed to save cart', error);
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + ((item.price || 0) * (item.quantity || 1)), 0);
  const total = subtotal + deliveryFee;

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView style={styles.body}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Cart</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.filterButton, activeButton === 'Best Quality' && styles.activeButton]}
              onPress={() => setActiveButton('Best Quality')}
            >
              <Text style={styles.buttonText}>Best Quality</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.filterButton, activeButton === 'Cheapest' && styles.activeButton]}
              onPress={() => setActiveButton('Cheapest')}
            >
              <Text style={styles.buttonText}>Cheapest</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.filterButton, activeButton === 'Suggested' && styles.activeButton]}
              onPress={() => setActiveButton('Suggested')}
            >
              <Text style={styles.buttonText}>Suggested</Text>
            </TouchableOpacity>
          </View>
          {cartItems.length > 0 ? (
            cartItems.map(item => (
              <View key={item.id} style={styles.cartItem}>
                {item.image && <Image source={{ uri: item.image }} style={styles.cartItemImage} />}
                <View style={styles.cartItemDetails}>
                  <Text style={styles.cartItemName}>{item.name}</Text>
                  <Text style={styles.cartItemPrice}>
                    {/* ${item.price ? item.price.toFixed(2) : '0.00'} */}
                  </Text>
                  <View style={styles.quantityContainer}>
                    <TouchableOpacity onPress={() => decrementQuantity(item.id)} style={styles.quantityButton}>
                      <Text style={styles.quantityButtonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>{item.quantity || 1}</Text>
                    <TouchableOpacity onPress={() => incrementQuantity(item.id)} style={styles.quantityButton}>
                      <Text style={styles.quantityButtonText}>+</Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity onPress={() => removeItem(item.id)} style={styles.removeButton}>
                    <Text style={styles.removeButtonText}>Remove</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))
          ) : (
            <Text style={styles.emptyCartText}>Your cart is empty</Text>
          )}
        </View>

        <View style={styles.summaryContainer}>
          {cartItems.length > 0 ? (
            <TouchableOpacity style={styles.checkoutButton} onPress={navigateToPayment}>
              <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.checkoutButton} onPress={navigateToHome}>
              <Text style={styles.checkoutButtonText}>Go Back to Shopping</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
      <Footer
        navigateToHome={navigateToHome}
        navigateToSearch={navigateToSearch}
        navigateToAbout={navigateToAbout}
        navigateToCart={navigateToCart}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  body: {
    flex: 1,
  },
  section: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  cartItemImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    borderRadius: 10,
    marginRight: 10,
  },
  cartItemDetails: {
    flex: 1,
  },
  cartItemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cartItemPrice: {
    fontSize: 16,
    color: '#555',
    marginVertical: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
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
    position: 'absolute',
    bottom: 10,
    right: 10,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  filterButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#21CDA8',
  },
  activeButton: {
    backgroundColor: '#21CDA8',
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
  },
  summaryContainer: {
    padding: 20,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  checkoutButton: {
    backgroundColor: '#21CDA8',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  emptyCartText: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default CartPage;
