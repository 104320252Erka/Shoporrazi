import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Header from './header';
import Footer from './footer';
import { useNavigation } from '@react-navigation/native';

const HomePage = () => {
  const navigation = useNavigation();
  const [categoryData, setCategoryData] = useState(null);

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


  const fetchEnergyDrinkData = async () => {
    try {
      const response = await fetch('http://10.0.2.2:3307/get_product');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      const drinksData = json.ResponseData.data.drink.energy;
      console.log('API response for energy drink category:', drinksData); 

      setCategoryData(drinksData);
      navigation.navigate('Category', { categoryData: drinksData });
      
    } catch (error) {
      console.error('Error fetching meat category data:', error);
      Alert.alert('Error', `Failed to fetch meat category data: ${error.message}`);
    }
  };


  const fetchMeatCategoryData = async () => {
    try {
      const response = await fetch('http://10.0.2.2:3307/get_product');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      const beefData = json.ResponseData.data.meat.beef;
      const chickenData = json.ResponseData.data.chicken.wing;

      const meatData = [
        ...Object.values(beefData).flat(),
        ...Object.values(chickenData).flat(),
      ];

      setCategoryData(meatData);
      console.log('API response for meat category:', chickenData); 
      navigation.navigate('Category', { categoryData: meatData });
      
    } catch (error) {
      console.error('Error fetching meat category data:', error);
      Alert.alert('Error', `Failed to fetch meat category data: ${error.message}`);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView style={styles.body}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <ScrollView horizontal>
            <View style={styles.gridContainer}>
              <View style={styles.gridRow}>
                <View style={styles.categoryContainer}>
                  <TouchableOpacity style={styles.navButton} onPress={fetchMeatCategoryData}>
                    <Image source={{ uri: 'https://i.postimg.cc/sXKyGFZz/Slide1.png' }} style={styles.ImageIcon2} />
                  </TouchableOpacity>
                  <Text style={styles.categoryName}>Meat Product</Text>
                </View>
                <View style={styles.categoryContainer}>
                  <TouchableOpacity style={styles.navButton}>
                    <Image source={{ uri: 'https://i.postimg.cc/0jQvptpw/Slide2.png' }} style={styles.ImageIcon2} />
                  </TouchableOpacity>
                  <Text style={styles.categoryName}>Dairy Products</Text>
                </View>
                <View style={styles.categoryContainer}>
                  <TouchableOpacity style={styles.navButton}>
                    <Image source={{ uri: 'https://i.postimg.cc/66jt9XXL/Slide3.png' }} style={styles.ImageIcon2} />
                  </TouchableOpacity>
                  <Text style={styles.categoryName}>Bakery</Text>
                </View>
                <View style={styles.categoryContainer}>
                  <TouchableOpacity style={styles.navButton} >
                    <Image source={{ uri: 'https://i.postimg.cc/Y0sH813y/Slide4.png' }} style={styles.ImageIcon2} />
                  </TouchableOpacity>
                  <Text style={styles.categoryName}>Canned Food</Text>
                </View>
              </View>
              <View style={styles.gridRow}>
                <View style={styles.categoryContainer}>
                  <TouchableOpacity style={styles.navButton} >
                    <Image source={{ uri: 'https://i.postimg.cc/pX3vFJym/Slide5.png' }} style={styles.ImageIcon2} />
                  </TouchableOpacity>
                  <Text style={styles.categoryName}>Vegetables</Text>
                </View>
                <View style={styles.categoryContainer}>
                  <TouchableOpacity style={styles.navButton} >
                    <Image source={{ uri: 'https://i.postimg.cc/281myKjp/Slide6.png' }} style={styles.ImageIcon2} />
                  </TouchableOpacity>
                  <Text style={styles.categoryName}>Snacks</Text>
                </View>
                <View style={styles.categoryContainer}>
                  <TouchableOpacity style={styles.navButton}>
                    <Image source={{ uri: 'https://i.postimg.cc/BnD0cP1M/Slide7.png' }} style={styles.ImageIcon2} />
                  </TouchableOpacity>
                  <Text style={styles.categoryName}>Chocolate</Text>
                </View>
                <View style={styles.categoryContainer}>
                  <TouchableOpacity style={styles.navButton} onPress={fetchEnergyDrinkData}>
                    <Image source={{ uri: 'https://i.postimg.cc/YSHwX26k/Slide8.png' }} style={styles.ImageIcon2} />
                  </TouchableOpacity>
                  <Text style={styles.categoryName}>Soft Drinks</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>

        <View style={styles.rectangleContainer}>
          <Text style={styles.ScrollTitle}>Suggested to you</Text>
          <View style={styles.rectangle}>
            <Text style={styles.rectangleText}>Fresh Milk Gallon</Text>
            <Image source={{ uri: 'https://i.postimg.cc/Hkw879zD/Presentation1.jpg' }} style={styles.ImageDiscount} />
            <TouchableOpacity style={styles.cartButton}>
              <Text style={styles.cartButtonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.rectangleContainer}>
          <View style={styles.rectangle}>
            <Text style={styles.rectangleText}>Diec Beef 500g</Text>
            <Image source={{ uri: 'https://i.postimg.cc/3RgNWgMh/Presentation1.jpg' }} style={styles.TrendingNow} />
            <TouchableOpacity style={styles.cartButton}>
              <Text style={styles.cartButtonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.rectangleContainer}>
          <View style={styles.rectangle}>
            <Text style={styles.rectangleText}>Kettle Chips</Text>
            <Image source={{ uri: 'https://s3-alpha-sig.figma.com/img/d157/02b8/c86ebbfc637be0a440a14736b0a5c728?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jqNwlkwUCdvZJ93bStzOGQO-ryP8Ve9kXoJeKEoMPN~Uq9cxQAMklzcJReRUU7wMoOaFRGvt8Iw6xDzdTELsLPjfFBpfoRXpQPvjWTYvHiIu5spW~90Y7uUKKHWImc-EQD2K0lMuQlhlCWrR-36cqCQWohIkiWDplAbuN7XLJanVZAC4te1sX196vQVxr1ht3cPZyOsacFOyKNNPqPLA5X7CUlt4cOVXOaJ39P1aWg~0yPQnDfqGIFvjTq8emkU1Vr~k8Dc4tCQRIbg7btmRzSqjey3lMuSA1SqfFs3pwnv8IntBiqCSlGiGadXpuMV6BfsArg4t8NAgGfDEMHWP~A__' }} style={styles.ImageDiscount} />
            <TouchableOpacity style={styles.cartButton}>
              <Text style={styles.cartButtonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#21CDA8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  menuButton: {
    padding: 15,
  },
  ImageIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  ImageIcon2: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginLeft: 2,
    borderRadius: 20,
  },
  categoryContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    paddingLeft: 6,
  },
  categoryName: {
    marginTop: 0.5,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 13,
  },
  icon: {
    fontSize: 24,
  },
  gridContainer: {
    flexDirection: 'column',
  },
  gridRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  body: {
    flex: 1,
  },
  section: {
    marginVertical: 10,
    backgroundColor: '#21CDA8',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  cardcircle: {
    width: 70,
    height: 70,
    backgroundColor: '#f0f0f0',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
  },
  card: {
    width: 120,
    height: 150,
    backgroundColor: '#f0f0f0',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#f8f8f8',
  },
  navButton: {
    padding: 1,
  },
  rectangleContainer: {
    marginLeft: 10,
    marginVertical: 5,
  },
  rectangle: {
    width: 390,
    height: 194,
    backgroundColor: '#d3d3d3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
    borderWidth: 2, 
    borderColor: 'black',
    position: 'relative', 
  },
  rectangleText: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    resizeMode: 'contain',
    position: 'absolute',
    color: 'black',
    top: 50,
    left: 20,
    borderRadius: 20,
    marginRight: 280,
  },
  ImageDiscount: {
    width: 250, 
    height: '100%', 
    resizeMode: 'contain',
    position: 'absolute',
    top: 0,
    right: 0,
    borderRadius: 20,
  },
  TrendingNow: {
    width: 250, 
    height: '100%', 
    resizeMode: 'contain',
    position: 'absolute',
    top: 0,
    right: 0,
    borderRadius: 20,
    marginLeft: 400,
  },
  ScrollTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    flex: 1,
    color: 'black',
    textAlign: 'left',
  },
  cartButton: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: '#21CDA8',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  cartButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomePage;
