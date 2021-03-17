import React from 'react'
import { View, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import ArtistList from './ArtistList'
import ArtistDetail from './ArtistDetail'

const Stack = createStackNavigator();

const Home = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Artist List" component={ArtistList} />
            <Stack.Screen name="Artist Detail" component={ArtistDetail} />
        </Stack.Navigator>
        
    );
}

export default Home
