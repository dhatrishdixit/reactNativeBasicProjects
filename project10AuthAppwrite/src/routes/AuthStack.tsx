import React from 'react' ;

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/Login';
import Signup from '../screens/Signup';

export type AuthStackParamList = {
    Login:undefined;
    Signup:undefined;
}

const stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
      }}

      initialRouteName="Login"
    >
        <stack.screen name="Login" component={Login}/>
        <stack.screen name="Signup" component={Signup}/>    
       
    </stack.Navigator>
  )
}

export default AuthStack

