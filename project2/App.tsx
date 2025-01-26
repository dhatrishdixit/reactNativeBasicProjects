import React from "react";
import { SafeAreaView, Text,StyleSheet, View, ScrollView } from "react-native";
import FlatCards from "./components/flatCards";
import ElevatedCards from "./components/elevatedCards";
import FancyCard from "./components/fancyCard";
import ActionCard from "./components/actionCard";
import ContactList from "./components/contactList";


function App(){
     return(
      <SafeAreaView style={styles.mainContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
           <Text style={styles.headingText}> Hello </Text>
           <FlatCards/>
           <ElevatedCards/>
           <FancyCard/>
           <ActionCard/>
           <ContactList/>
        </ScrollView>
      </SafeAreaView>
     )
}


export default App;

const styles = StyleSheet.create({
     mainContainer:{
          backgroundColor: "black",
          flex:1,
     },
     headingText:{
          fontSize:24,
          fontWeight: 'bold',
          padding: 8,
          color: "white"
     }
})