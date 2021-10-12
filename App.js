// In App.js in a new project

import * as React from 'react';
import {Button, View, Text, Linking} from 'react-native';
import {NavigationContainer, LinkingOptions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screen2 from './src/Screen2';
import Screen3 from './src/Screen3';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        //onPress={() => navigation.navigate('Profile')}
        onPress={() => Linking.openURL('mylinker://screen3')}
      />
    </View>
  );
}

export const ROOT_SCREEN_NAMES = {
  HOME_SCREEN: 'Home',
  SCREEN_TWO: 'Screen2',
  SCREEN_THREE: 'Screen3',
};

const linking: LinkingOptions = {
  prefixes: ['mylinker://', 'http://mylinker.com/'],

  async getInitialURL(): Promise<string> {
    // Check if the app was opened by a deep link
    const url = await Linking.getInitialURL();
    if (url != null) {
      return url;
    }
    // If it was not opened by a deep link, go to the home screen
    //return 'mylinker://home';
  },
  // Custom function to subscribe to incoming links
  subscribe(listener: (deeplink: string) => void) {
    // First, you may want to do the default deep link handling
    const onReceiveURL = ({url}: {url: string}) => listener(url);
    // Listen to incoming links from deep linking
    Linking.addEventListener('url', onReceiveURL);
    return () => {
      // Clean up the event listeners
      Linking.removeEventListener('url', onReceiveURL);
    };
  },
  config: {
    screens: {
      [ROOT_SCREEN_NAMES.HOME_SCREEN]: {
        path: 'home',
      },
      [ROOT_SCREEN_NAMES.SCREEN_TWO]: {
        path: 'screen2',
      },
      [ROOT_SCREEN_NAMES.SCREEN_THREE]: {
        path: 'screen3',
      },
    },
  },
};

function DetailsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen
          name={ROOT_SCREEN_NAMES.HOME_SCREEN}
          component={HomeScreen}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name={ROOT_SCREEN_NAMES.SCREEN_TWO} component={Screen2} />
        <Stack.Screen
          name={ROOT_SCREEN_NAMES.SCREEN_THREE}
          component={Screen3}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
