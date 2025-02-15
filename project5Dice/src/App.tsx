import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Dice1 from "../assets/dice-six-faces-one.png";
import Dice2 from "../assets/dice-six-faces-two.png";
import Dice3 from "../assets/dice-six-faces-three.png";
import Dice4 from "../assets/dice-six-faces-four.png";
import Dice5 from "../assets/dice-six-faces-five.png";
import Dice6 from "../assets/dice-six-faces-six.png";

import ReactNativeHapticFeedback from "react-native-haptic-feedback";

type DiceProps = PropsWithChildren<{
  ImageUrl: ImageSourcePropType;
}>;

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
}

function Dice({ImageUrl}:DiceProps) :React.JSX.Element{
   return (
     <View>
        <Image style={styles.diceImage} source={ImageUrl}/>
     </View>
   )
}

const DiceImages = [Dice1,Dice2,Dice3,Dice4,Dice5,Dice6]

function App(): React.JSX.Element {
  
  const [diceImageOne,setDiceImageOne] = React.useState<ImageSourcePropType>(Dice6);
  const [diceImageTwo,setDiceImageTwo] = React.useState<ImageSourcePropType>(Dice6);
  const [totalCount,setTotalCount] = React.useState<number>(0);

  function RollDice(){
    const randomNumberOne= Math.floor(Math.random()*6);
    const randomNumberTwo= Math.floor(Math.random()*6);
    
    setDiceImageOne(DiceImages[randomNumberOne]);
    setDiceImageTwo(DiceImages[randomNumberTwo]);
    setTotalCount(randomNumberOne+randomNumberTwo+2);
    console.log(diceImageOne)
    ReactNativeHapticFeedback.trigger("impactHeavy",options)
  }

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.totalCount}>{totalCount == 0 ? "Let's Start":`You Got : ${totalCount}`}</Text>
        <View style={styles.diceContainer}>
        <Dice ImageUrl={diceImageOne}/>
        <Dice ImageUrl={diceImageTwo}/>
        </View>
      <View style={styles.btnContainer}>
          <Pressable onPress={RollDice}>
          <Text style={styles.rollDiceBtnText}>Roll Dice</Text>
          </Pressable>
      </View>
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  totalCount:{
    fontSize:20,
    fontWeight:'bold',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
    gap:10
  },
  diceContainer:{
    flexDirection:'row',
    gap:10
  },
  btnContainer: {
    margin: 12,
  },
  diceImage: {
    width: 150,
    height: 150,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: 'black',
    fontSize: 16,
    color: 'black',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default App;
