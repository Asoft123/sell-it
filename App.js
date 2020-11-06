import React from 'react';
import { Alert, Button, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Card from './app/components/Card';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import Screen from './app/components/Screen';
import AccountScreen from './app/screens/AccountScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import MessagesScreen from './app/screens/MessagesScreen';

import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
export default function App() {
  return (
        
         <Screen>
         <TextInput placeholder="EM"/>
         </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f4f4',
    // padding:20,
    // paddingTop:50
  },
});
