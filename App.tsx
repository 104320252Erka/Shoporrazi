import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LogReg from './screens/logreg';
import Home from './screens/HomePage4';
import Profile from './screens/aboutPage2';
import Cart from './screens/CheckoutPage';
import Search from './screens/SearchPage2';

import Favorites from './screens/FavoriteProducts2';
import AboutScreen from './screens/AboutScreen';
import Settings from './screens/Settings';
import Contact from './screens/ContactsUs'; 
import CategoryPage from './screens/CategoryPage'; 
import ItemDetails from './screens/ItemDetails'; 
import Payment from './screens/PaymentPage'; 


import ThankYouPage from './screens/ThankYouPage';
import AdminDashboard from './screens/admindashboard';




const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Log">
        <Stack.Screen name="Log" component={LogReg} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Favorites" component={Favorites} />
        <Stack.Screen name="AboutScreen" component={AboutScreen} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Category" component={CategoryPage} />
        <Stack.Screen name="ItemDetails" component={ItemDetails} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="ThankYou" component={ThankYouPage} />
        <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}