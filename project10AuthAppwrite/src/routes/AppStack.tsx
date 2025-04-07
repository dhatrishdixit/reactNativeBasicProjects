import { Text, View } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';

export type AppStackParamList = {
    Home: undefined;
}

const stack = createNativeStackNavigator<AppStackParamList>();

const AppStack = () => {
  return (
<stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
      }}
    >
        <stack.screen name="Home" component={Home}/>
    
       
    </stack.Navigator>
  )
}

export default AppStack

