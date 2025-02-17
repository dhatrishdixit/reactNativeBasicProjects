import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  TextInput,
  Pressable
} from 'react-native';
import { currencyByRupee } from './constants';
import Snackbar from 'react-native-snackbar'; 
import { CurrencyButton } from './components/currencyButton';



function App(): React.JSX.Element {

  const [inputValue,setInputValue] = React.useState('');
  const [resultValue,setResultValue] = React.useState('');
  const [targetCurrency,setTargetCurrency] = React.useState('');

  const buttonPressed = (currency : Currency) => {
     if(!inputValue){
       return Snackbar.show({
        text: "Enter a value to convert",
        backgroundColor: "#EA7773",
        textColor: "#000000"
       })
     }

     const value = parseFloat(inputValue);
     if(!isNaN(value)){
      const convertedValue = value * currency.value;
      setResultValue(`₹ ${value} ==> ${currency.symbol} ${convertedValue.toFixed(2)}`);
      setTargetCurrency(currency.name);
      setInputValue('');
     }else{
       return Snackbar.show({
        text: "Enter Numerical Value",
        backgroundColor: "#F4BE2C",
        textColor: "#000000"
       })
     }
  } 

  return (
    <SafeAreaView style={{flex:1}}>
    
    { 
      // TODO: Move the dependency also after completing this project into the other one
      
     // TODO: Imp   flexWrap: 'wrap' // this is imp to wrap the view in next line

     // TODO: imp flex: 1 // this is imp to make the root element take the full dimension of the screen
    }
    
    <StatusBar/>
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.rupeesContainer}>
        
        <TextInput
         maxLength={14}
         value={inputValue}
         onChangeText={setInputValue}
         keyboardType='number-pad'
         placeholder='Enter Amount in Rupees'
         clearButtonMode='always'
        />
         {resultValue && (
            <Text style={styles.resultTxt} >
              {resultValue}
            </Text>
          )}

        </View>
      </View>
      <View style={styles.bottomContainer}>
        <FlatList
         numColumns={3}
         data={currencyByRupee}
         keyExtractor={item => item.name}
         renderItem={({item})=>{
           console.log(item)         
           return <Pressable
           style={[styles.button,targetCurrency === item.name && styles.selected]}
           onPress={()=>buttonPressed(item)}
           >
            <CurrencyButton name={item.name} flag={item.flag} />
           </Pressable>
         }}
        />
      </View>
    </View>
  
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#515151',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,

    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,

    margin: 12,
    height: 60,

    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
});

export default App;
