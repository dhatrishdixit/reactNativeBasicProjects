import React,{useState} from "react";
import { SafeAreaView, Text, StyleSheet, View, FlatList } from "react-native";

type currentTurn = 1 | 2 ;

export const App = () => {

  const [turn,setTurn]=useState<currentTurn>(1);

  return (
    
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Tic - Tac - Toe</Text>
      <View style={styles.turnContainer}>
        <View style={[styles.textWrapper,{backgroundColor : turn == 1 ? '#08B2E3':'#D10000'}]}>
        <Text style={styles.turnText}> Player {turn}'s Turn
        </Text>
        </View>
        
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
    flexDirection:'row',
    justifyContent:'center',
  },
  textWrapper:{
    width:200,
    borderRadius:10,
    marginVertical:10,
  },
  turnText:{
    color:'white',
    fontSize:20,
    textAlign:'center',
    margin:10
  }
});
