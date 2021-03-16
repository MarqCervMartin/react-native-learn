// In App.js in a new project

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../screens/Home'
const Drawer = createDrawerNavigator();

function HomeScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize: 20}}>Home Screen</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate('Perfil')}
      style={{marginTop: 10, width: 200, height: 50, backgroundColor: 'blue', padding:10, alignItems: 'center', borderRadius: 5}}>
          <Text style={{color: 'white', fontSize: 20}}>Ir a perfil</Text>
      </TouchableOpacity>
    </View>
  );
}

function PerfilScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize: 20}}>Perfil Screen</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate('Home')}
      style={{marginTop: 10, width: 200, height: 50, backgroundColor: 'blue', padding:10, alignItems: 'center', borderRadius: 5}}>
          <Text style={{color: 'white', fontSize: 20}}>Ir a Home</Text>
      </TouchableOpacity>
    </View>
  );
}

function MyDrawer(){
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Perfil" component={PerfilScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
        
      );
}

export default MyDrawer; 