import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Header from './header';
import Footer from './footer';
import { useNavigation } from '@react-navigation/native';

const CartPage = () => {
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
  const navigateToThankYouPage = () => {
    navigation.navigate('ThankYou');
  };

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Fresh Milk Gallon',
      imageUri: 'https://i.postimg.cc/Hkw879zD/Presentation1.jpg',
      price: 3.99,
      quantity: 1,
    },
    {
      id: 2,
      name: 'Everyday groceries',
      imageUri: 'https://i.postimg.cc/mgNPRQJ2/pexels-tara-clark-89384110-9070106.jpg',
      price: 5.49,
      quantity: 1,
    },
    {
      id: 3,
      name: 'Buy 1 Get 1',
      imageUri: 'https://s3-alpha-sig.figma.com/img/d157/02b8/c86ebbfc637be0a440a14736b0a5c728?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jqNwlkwUCdvZJ93bStzOGQO-ryP8Ve9kXoJeKEoMPN~Uq9cxQAMklzcJReRUU7wMoOaFRGvt8Iw6xDzdTELsLPjfFBpfoRXpQPvjWTYvHiIu5spW~90Y7uUKKHWImc-EQD2K0lMuQlhlCWrR-36cqCQWohIkiWDplAbuN7XLJanVZAC4te1sX196vQVxr1ht3cPZyOsacFOyKNNPqPLA5X7CUlt4cOVXOaJ39P1aWg~0yPQnDfqGIFvjTq8emkU1Vr~k8Dc4tCQRIbg7btmRzSqjey3lMuSA1SqfFs3pwnv8IntBiqCSlGiGadXpuMV6BfsArg4t8NAgGfDEMHWP~A__',
      price: 2.99,
      quantity: 1,
    },
  ]);

  const deliveryFee = 2.99;

  const incrementQuantity = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decrementQuantity = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal + deliveryFee;

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView style={styles.body}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Cart</Text>
          {cartItems.map(item => (
            <View key={item.id} style={styles.cartItem}>
              <Image source={{ uri: item.imageUri }} style={styles.cartItemImage} />
              <View style={styles.cartItemDetails}>
                <Text style={styles.cartItemName}>{item.name}</Text>
                <Text style={styles.cartItemPrice}>${item.price.toFixed(2)}</Text>
                <View style={styles.quantityContainer}>
                  <TouchableOpacity onPress={() => decrementQuantity(item.id)} style={styles.quantityButton}>
                    <Text style={styles.quantityButtonText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantityText}>{item.quantity}</Text>
                  <TouchableOpacity onPress={() => incrementQuantity(item.id)} style={styles.quantityButton}>
                    <Text style={styles.quantityButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => removeItem(item.id)} style={styles.removeButton}>
                  <Text style={styles.removeButtonText}>Remove</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
        <View style={styles.summaryContainer}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryText}>Subtotal</Text>
            <Text style={styles.summaryText}>${subtotal.toFixed(2)}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryText}>Delivery Fee</Text>
            <Text style={styles.summaryText}>${deliveryFee.toFixed(2)}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryTotalText}>Total</Text>
            <Text style={styles.summaryTotalText}>${total.toFixed(2)}</Text>
          </View>
          <TouchableOpacity style={styles.checkoutButton} onPress={navigateToThankYouPage}>
  <Text style={styles.checkoutButtonText}>Checkout</Text>
</TouchableOpacity>
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
  summaryContainer: {
    padding: 20,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  summaryText: {
    fontSize: 18,
  },
  summaryTotalText: {
    fontSize: 20,
    fontWeight: 'bold',
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
});

export default CartPage;
