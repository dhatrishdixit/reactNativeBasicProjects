import React from 'react';
import {
  Text,
  View,
} from 'react-native';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import Home from './screens/Home';
import Details from './screens/Details';

export type RootStackParamList = {
  Home:undefined;
  Details:{productId :string}
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {

  return (
    
          <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
            name="Home" 
            component={Home} 
            options={
              {
                title:"Trending Products"
              }
            }
            />
            <Stack.Screen 
            name="Details" 
            component={Details}
            options={
              {
                title:"Product Details"
              }
            } 
            />
          </Stack.Navigator>
           </NavigationContainer>
  
  );
}


export default App;

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  HeadingText: {
    color: 'white',
    fontSize: 20,
    textAlign: "center" as "center",
  },
};
