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
  
  const [diceImage,setDiceImage] = React.useState<ImageSourcePropType>(Dice6);

  function RollDice(){
    let randomNumber= Math.floor(Math.random()*6);
    
    setDiceImage(DiceImages[randomNumber]);
    console.log(diceImage)
    ReactNativeHapticFeedback.trigger("impactLight",options)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Dice ImageUrl={diceImage}/>
      <View style={styles.diceContainer}>
          <Pressable onPress={RollDice}>
          <Text style={styles.rollDiceBtnText}>Roll Dice</Text>
          </Pressable>
      </View>
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default App;
