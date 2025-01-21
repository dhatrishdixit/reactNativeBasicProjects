import React from "react";
import { SafeAreaView, Text,StyleSheet, View, ScrollView } from "react-native";
import FlatCards from "./components/flatCards";


function App(){
     return(
      <SafeAreaView style={styles.mainContainer}>
          <ScrollView>
           <Text style={styles.headingText}> Hello </Text>
           <FlatCards/>
        </ScrollView>
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
     }
})