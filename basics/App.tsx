import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

function App(){
  return(
    <SafeAreaView style={styles.SafeAreaView} >
      <View style={styles.View}>
      <Text style={styles.Text} >hello world 1 </Text>
      <Text style={styles.Text} >hello world 1 </Text>
      <Text style={styles.Text} >hello world 1 </Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  SafeAreaView:{
    flex : 1,
    backgroundColor:"black",
  },
  View:{
    flex:1,
  },
  Text:{
    color:"white"
  }
});

export default App;
