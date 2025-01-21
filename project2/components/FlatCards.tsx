import React from "react";
import { Text,StyleSheet, View, ScrollView } from "react-native";

// added scroll view to make it horizontally scrollable , in flat cards 
function FlatCards(){
    return (
     <ScrollView 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
     >
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
     </ScrollView>
    )
}


const styles = StyleSheet.create({
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

export default FlatCards;