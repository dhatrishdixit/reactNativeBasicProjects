import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react';

import * as yup from "yup";

const passwordSchema = yup.object().shape({
  passwordLength: yup.number()
                  .min(4,"should be min of 4 characters")
                  .max(20,"should be max of 20 characters")
                  .required("length is required"),
})

export default function App() {

  const [password,setPassword] = useState<string>("");
  const [isPasswordGenerated,setIsPasswordGenerated] = useState<boolean>(false);
  const [lowerCase,setLowerCase] = useState<boolean>(true);
  const [upperCase,setUpperCase] = useState<boolean>(false);
  const [numbers,setNumbers] = useState<boolean>(false);
  const [symbols,setSymbols] = useState<boolean>(false);

  const generatePasswordString = (passwordLength:number) => {
    
      let characterList = "";
      
      const upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
      const numberCharacters = "0123456789";
      const symbolCharacters = "!@#$%^&*()_+";

      if(lowerCase){
        characterList += lowerCaseCharacters;
      }
      if(upperCase){
        characterList += upperCaseCharacters;
      }
      if(numbers){
        characterList += numberCharacters;
      }
      if(symbols){
        characterList += symbolCharacters;
      }

      const createdPassword = createPassword(characterList,passwordLength);
      
      setPassword(createdPassword);
      setIsPasswordGenerated(true);
  }

  const createPassword = (characters:string,passwordLength:number) => {
       let result = "";
       for(let i=0;i<passwordLength;i++){
          const characterIndex = Math.floor(Math.random()*(characters.length))
          result += characters.charAt(characterIndex);
       }

       return result ;
  }

  const resetState = () => {
       setPassword("");
       setIsPasswordGenerated(false);
       setLowerCase(true);
       setUpperCase(false);
       setNumbers(false);
       setSymbols(false);
  }

  return (
    <SafeAreaView>
      <Text>App</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})