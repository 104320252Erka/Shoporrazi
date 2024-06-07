import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Header from './headerForScreens';
import Footer from './footer';

const FavouriteProducts = () => {
  const [products, setProducts] = useState([
    { id: '1', name: 'Chicken breast 200g', image: 'https://assets.woolworths.com.au/images/1005/184628.jpg?impolicy=wowbumxfyzp&w=500&h=500' },
    { id: '2', name: 'Diced Beef 500g', image: 'https://fettayleh.com/wp-content/uploads/2023/09/09346587073855_C1N1-400x400.jpg' },
    { id: '3', name: 'Drumstick cone Ice Cream Vanilla Flavour', image: 'https://cdn0.woolworths.media/content/wowproductimages/large/048387.jpg' },
    { id: '4', name: 'Still Spring Water Bottle 600ml', image: 'https://isodelivery.com.au/cdn/shop/products/a7elDZSCm1_1024x1024.jpg?v=1688294261' },
    { id: '5', name: 'Kettle Classic Sea Salt Chips Potato Chips 165g', image: 'https://cdn0.woolworths.media/content/wowproductimages/large/236699.jpg' },
    { id: '6', name: 'Boost All Berry Bang Juice 1L', image: 'https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/512/512/true/eyJpZCI6IjQxNGM2YzkyYjk1NzJhZWJlNjQyYTU5NTEzYmEzOGE0LmpwZyIsInN0b3JhZ2UiOiJwdWJsaWNfc3RvcmUifQ?signature=fce7b49c386a0ebb839490dd73491dc8e3bf9ceea8150b2da8e1f1198699a818' },
    { id: '7', name: 'Cadbury Dairy Milk Large Chocolate Block 360g', image: 'https://www.cadbury.com.au/media/catalog/product/m/o/mond-9300617064879-1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=519&width=712&canvas=712:519' },
    { id: '8', name: 'Vegemite Spread 560G', image: 'https://cdn0.woolworths.media/content/wowproductimages/large/280512.jpg' },
    { id: '9', name: 'Cottees Strawberry Jam 375g', image: 'https://cdn0.woolworths.media/content/wowproductimages/large/292796.jpg' },
  ]);

  const handleDelete = (id) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
  };

  const handleAddToCart = (id) => {
    alert(`Product with id ${id} added to cart.`);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <Text style={styles.itemText}>{item.name}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={() => handleAddToCart(item.id)} style={styles.cartButton}>
          <Text style={styles.cartButtonText}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDelete(item.id)} style={styles.deleteButton}>
          <Text style={styles.deleteButtonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Favorite products'}/>
      <Text style={styles.title}>Favourite Products</Text>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  list: {
    paddingBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  itemImage: {
    width: 50,
    height: 50,
    marginRight: 15,
    borderRadius: 5,
  },
  itemText: {
    fontSize: 18,
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartButton: {
    backgroundColor: '#21CDA8',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  cartButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  deleteButton: {
    backgroundColor: '#ff5c5c',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default FavouriteProducts;
