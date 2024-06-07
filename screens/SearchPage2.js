import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Footer from './footer'
import Header from './header'
import { useNavigation } from '@react-navigation/native';


const HomePage = () => {

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

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView style={styles.body}>
        <View style={styles.banner}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search..."
          />
        </View>

        <View style={styles.categorySection}>
          <View style={styles.gridRow}>
            <TouchableOpacity style={styles.categoryContainer} onPress={() => navigation.navigate('Category', { category: 'Meat Product' })}>
              <Image source={require('./photos/meat.png')} style={styles.ImageIcon2} />
              <Text style={styles.categoryName}>Meat Products</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryContainer} onPress={() => navigation.navigate('Category', { category: 'Dairy Product' })}>
              <Image source={require('./photos/dairy.png')} style={styles.ImageIcon2} />
              <Text style={styles.categoryName}>Dairy Products</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.gridRow}>
            <TouchableOpacity style={styles.categoryContainer} onPress={() => navigation.navigate('Category', { category: 'Bakery' })}>
              <Image source={require('./photos/bakery.png')} style={styles.ImageIcon2} />
              <Text style={styles.categoryName}>Bakery</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryContainer} onPress={() => navigation.navigate('Category', { category: 'Snacks' })}>
              <Image source={require('./photos/snacks.png')} style={styles.ImageIcon2} />
              <Text style={styles.categoryName}>Snacks</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.gridRow}>
            <TouchableOpacity style={styles.categoryContainer} onPress={() => navigation.navigate('Category', { category: 'Frozen Goods' })}>
              <Image source={require('./photos/frozen.png')} style={styles.ImageIcon2} />
              <Text style={styles.categoryName}>Frozen Goods</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryContainer} onPress={() => navigation.navigate('Category', { category: 'Fruits' })}>
              <Image source={require('./photos/fruits.png')} style={styles.ImageIcon2} />
              <Text style={styles.categoryName}>Fruits</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.gridRow}>
            <TouchableOpacity style={styles.categoryContainer} onPress={() => navigation.navigate('Category', { category: 'Vegetables' })}>
              <Image source={require('./photos/vegetables.png')} style={styles.ImageIcon2} />
              <Text style={styles.categoryName}>Vegetables</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryContainer} onPress={() => navigation.navigate('Category', { category: 'Soft Drinks' })}>
              <Image source={require('./photos/soda.png')} style={styles.ImageIcon2} />
              <Text style={styles.categoryName}>Soft Drinks</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.gridRow}>
            <TouchableOpacity style={styles.categoryContainer} onPress={() => navigation.navigate('Category', { category: 'Canned Foods' })}>
              <Image source={require('./photos/cannedgoods.png')} style={styles.ImageIcon2} />
              <Text style={styles.categoryName}>Canned Foods</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryContainer} onPress={() => navigation.navigate('Category', { category: 'Pet Foods' })}>
              <Image source={require('./photos/petfoods.png')} style={styles.ImageIcon2} />
              <Text style={styles.categoryName}>Pet Foods</Text>
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
    height: 120,
    width: 180,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
  },
  categoryContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    paddingLeft: 6,
  },
  categoryName: {
    marginTop: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 20,
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
    marginVertical: 2,
    paddingLeft: 10,
    paddingRight: 10,

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
  banner: {
    backgroundColor: '#e0f7fa',
    padding: 20,
    alignItems: 'center',
  },
  searchBar: {
    width: '100%',
    height: 40,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    backgroundColor: '#fff',
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
    marginVertical: 10,
  },
  rectangle: {
    width: 390,
    height: 194,
    backgroundColor: '#d3d3d3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
    borderWidth: 2,
    borderColor: 'black'
  },
  rectangleText: {
    fontSize: 32,
    textAlign: 'center',
    fontWeight: 'bold',
    resizeMode: 'contain',
    position: 'absolute',
    color: 'black ',
    top: 50,
    left: 20,
    borderRadius: 20, 
    marginRight: 300, 
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
  categorySection: {
    marginVertical: 10,
  },
});

export default HomePage;
