import React,{useState} from "react";
import { SafeAreaView, Text, StyleSheet, View } from "react-native";

type currentTurn = 1 | 2 ;

export const App = () => {

  const [turn,setTurn]=useState<currentTurn>(1);

  return (
    
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Tic - Tac - Toe</Text>
      <View style={styles.turnContainer}>
        <Text> hello
        </Text>
      </View>
    </SafeAreaView>
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  heading:{
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
  },
  baseText: {
    fontWeight: 'bold',
  },
  innerText: {
    color: 'red',
  },
  turnContainer:{
    flex:1,
    
  }
});
