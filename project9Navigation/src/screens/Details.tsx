import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App'

type DetailsProps = NativeStackScreenProps<RootStackParamList,'Details'>;

// different way of getting parameter 

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const Details = ({route}:DetailsProps) => {

  console.log(route.params);
  const { productId } = route.params;

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
  // this is different method of getting navigation

  return (
    <View style={styles.container} >
      <Text>ProductID : {productId}</Text>
      <Button
       title='Go to Home'
      //  onPress={()=>navigation.navigate('Home')}
       onPress={()=>navigation.goBack()}
       // it will only go back to the previous screen
      />
      <Button
       title='Go back to first screen'
      //  onPress={()=>navigation.navigate('Home')}
       onPress={()=>navigation.popToTop()}
       // it will only go back to the previous screen
      />
      
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    headingText: {
      color: 'white',
      fontSize: 20,
      textAlign: "center" as "center",
    },
})