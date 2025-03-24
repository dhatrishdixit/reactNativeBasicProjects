import React,{useState} from "react";
import { SafeAreaView, Text, StyleSheet, View, FlatList } from "react-native";

import Snackbar from 'react-native-snackbar';
import Icons from "./components/icons";

type currentTurn = 1 | 2 ;

// 1 is associated with x 
// 2 is associated with o

export const App = () => {

  const [turn,setTurn]=useState<currentTurn>(1);
  const [winner,setWinner] = useState<currentTurn | null>(null);
  const [gameState,setGameState] = useState<(currentTurn | 0)[]>(new Array(9).fill(0));

  const reloadGame:() =>void = () => {
    setTurn(1);
    setWinner(null);
    setGameState(new Array(9).fill(0));
  }

  const checkGameState = () => {

    // check for winner in rows 
      if(gameState[0] == gameState[1] && gameState[1] == gameState[2] && gameState[0] != 0) setWinner(gameState[0]);
      else if(gameState[3] == gameState[4] && gameState[4] == gameState[5] && gameState[3] != 0) setWinner(gameState[3]);
      else if(gameState[6] == gameState[7] && gameState[7] == gameState[8] && gameState[6] != 0) setWinner(gameState[6]);

    // check for winner in columns
      else if(gameState[0] == gameState[3] && gameState[3] == gameState[6] && gameState[0] != 0) setWinner(gameState[0]);
      else if(gameState[1] == gameState[4] && gameState[4] == gameState[7] && gameState[1] != 0) setWinner(gameState[1]);
      else if(gameState[2] == gameState[5] && gameState[5] == gameState[8] && gameState[2] != 0) setWinner(gameState[2]);

    // check for in diagonals 
      else if(gameState[0] == gameState[4] && gameState[4] == gameState[8] && gameState[0] != 0) setWinner(gameState[0]);
      else if(gameState[2] == gameState[4] && gameState[4] == gameState[6] && gameState[2] != 0) setWinner(gameState[2]);

  }

  const onChange = (indexNum : number) => {
      
  }

  return (
    
    <SafeAreaView style={styles.container}>
     (
      winner == null ?  <View style={styles.contentContainer}>
      <Text style={styles.heading}>Tic - Tac - Toe</Text>
      <View style={styles.turnContainer}>
        <View style={[styles.textWrapper,{backgroundColor : turn == 1 ? '#08B2E3':'#D10000'}]}>
        <Text style={styles.turnText}> 
          Player {turn}'s Turn
        </Text>
        </View>
        
      </View>
    
      </View> 
      : 
      <View>
           
      </View> 
     )
    </SafeAreaView>
  
  );
};

const styles = StyleSheet.create({
  contentContainer:{

  },
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
