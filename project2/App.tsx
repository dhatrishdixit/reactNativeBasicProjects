import React from "react";
import { SafeAreaView, Text,StyleSheet, View } from "react-native";


function App(){
     return(
      <SafeAreaView style={styles.mainContainer}>
        <Text style={styles.headingText}> Hello </Text>
        <View style={styles.container}>
             <View style={[styles.card,styles.cardOne]}>
               <Text style={styles.cardHeading}>cardOne</Text>
             </View>
             <View style={[styles.card,styles.cardTwo]}>
               <Text style={styles.cardHeading}>cardTwo</Text>
             </View>
             <View style={[styles.card,styles.cardThree]}>
               <Text style={styles.cardHeading}>cardThree</Text>
             </View>
             <View style={[styles.card,styles.cardFour]}>
               <Text style={styles.cardHeading}>cardFour</Text>
             </View>
             <View style={[styles.card,styles.cardFive]}>
               <Text style={styles.cardHeading}>cardFive</Text>
             </View>
        </View>
      </SafeAreaView>
     )
}


export default App;

const styles = StyleSheet.create({
     mainContainer:{
          backgroundColor:"black",
          flex:1,
     },
     headingText:{
          fontSize:24,
          fontWeight: 'bold',
          paddingHorizontal: 8,
          color: "white"
     },
     cardHeading:{
          fontSize:14,
          fontWeight: 'bold',
          color: "white"
     },
     container:{
          flex:1,
          flexDirection:"row",
          overflow:"scroll"
     },
     card:{
          width:100,
          height:100,
          borderRadius:10,
          justifyContent:"center",
          alignItems:"center",
          margin:8
     },
     cardOne:{
          backgroundColor:"#CC3363"
     },
     cardTwo:{
          backgroundColor:"#F79256",
     },
     cardThree:{
          backgroundColor:"#72E1D1"
     },
     cardFour:{
          backgroundColor:"#B2ABF2"
     },
     cardFive:{
          backgroundColor:"#623CEA"
     },

})