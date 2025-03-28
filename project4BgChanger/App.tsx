import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

function App(): React.JSX.Element {
  
  function generateColor(){
    const hexValue = "0123456789ABCDEF"
    let color = "#";

    for(let i=0;i<6;i++){
      color += hexValue.charAt(Math.floor(Math.random()*hexValue.length));
    }

    return color ;
  }

  const [colorBackground,setColorBackground] =  useState<string>("#000000");
  const [colorOne,setColorOne] =  useState<string>("#000000");
  const [colorTwo,setColorTwo] =  useState<string>("#000000");
  const [colorThree,setColorThree] =  useState<string>("#000000");
  const [colorFour,setColorFour] =  useState<string>("#000000");

  
  function randomiseColor(){
      setColorBackground(generateColor());
      setColorOne(generateColor());
      setColorTwo(generateColor());
      setColorThree(generateColor());
      setColorFour(generateColor());
  }

  return (
    <SafeAreaView >
     <StatusBar translucent backgroundColor="transparent" />
      <View style={[styles.background,{backgroundColor:colorBackground}]}>
        <View style={[styles.container]}>
        <View style={[styles.rectangle,{backgroundColor:colorOne}]}></View>
        <View style={[styles.circle,{backgroundColor:colorTwo}]}></View>
        <View style={[styles.square,{backgroundColor:colorThree}]}></View>
        <View style={[styles.shapeFour,{backgroundColor:colorFour}]}></View>
        </View>

      <View style={styles.container}>
      <TouchableOpacity onPress={randomiseColor} style={styles.button}>
        <Text>
          click to change the color           
        </Text>
        </TouchableOpacity>
      </View>
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    background:{ 
       padding:30,
       flexDirection:"column",
       width:"100%",
       height:"100%",
    },
    rectangle:{
      width:40,
      height: 20 
    },
    circle:{
      width:40,
      height:40,
      borderRadius:80
    },
    square:{
      width:40,
      height:40
    },
    shapeFour:{
      width:40,
      height: 20,
      borderRadius:20,
    },
    button:{
      alignSelf: 'flex-start',
      height:40,
      backgroundColor:"white",
      opacity:0.6,
      borderRadius:10,
      padding:10,
    },
    container:{
      flexDirection:"row",
      justifyContent:"space-evenly",
      alignItems:"center",
      padding:20  
    }
});

export default App;
