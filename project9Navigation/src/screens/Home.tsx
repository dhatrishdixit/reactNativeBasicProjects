import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'

type HomeProps = NativeStackScreenProps<RootStackParamList,'Home'>;



const Home = ({navigation}:HomeProps) => {

  console.log(navigation);


  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Home Screen</Text>
      <Button
       title="Go to Details"
      //  onPress={()=>navigation.navigate('Details',{
      //    productId:'123'
      //  })}

      onPress={()=>navigation.push('Details',{
        productId:'123'
      })}

      // push adds multiple screens to the stack .
      />


    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    headingText: {
      color: 'black',
      fontSize: 20,
      textAlign: "center" as "center",
    },
})