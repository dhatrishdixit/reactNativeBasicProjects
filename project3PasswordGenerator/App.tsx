import { Button, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react';
import { Formik } from 'formik';
import * as yup from "yup";
import BouncyCheckbox from "react-native-bouncy-checkbox";

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
    <ScrollView keyboardShouldPersistTaps="handled">
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Password Generator</Text>
      
      <Formik
     initialValues={{ passwordLength: '' }}
     validationSchema={passwordSchema}
     onSubmit={values => {
        console.log(values);
        generatePasswordString(Number(values.passwordLength));
     }}
   >
     {({ 
        values,
        errors,
        touched,
        isValid,
        handleChange,
        handleReset,
        handleSubmit
      }) => (
       <>
         <View style={styles.inputWrapper}>
           <View style={styles.inputRow}>
            <Text style={styles.heading}>Password Length</Text>
            {
              touched?.passwordLength && errors?.passwordLength ? (<Text style={styles.errorText}>   
                  {errors.passwordLength}
               </Text>) 
               :
                null
        }
             <TextInput
               style={styles.inputStyle}
               value={values.passwordLength}
               onChangeText={handleChange('passwordLength')} 
               placeholder="ex. 8"
               keyboardType="numeric"           
             />
           </View>
         </View>
         <View style={styles.inputWrapper}>
          <Text style={[styles.heading]}>Include Lowercase</Text>
          <BouncyCheckbox
           isChecked={lowerCase}
           onPress={()=>setLowerCase(prev => !prev)}
           fillColor='#29Ab87'
          />
          
         </View>
         <View style={styles.inputWrapper}>
         <Text style={styles.heading}>Include Lowercase</Text>
          <BouncyCheckbox
           isChecked={lowerCase}
           onPress={()=>setLowerCase(prev => !prev)}
           fillColor='#29Ab87'
          />
         </View>
         <View style={styles.inputWrapper}>
         <Text style={styles.heading}>Include Lowercase</Text>
          <BouncyCheckbox
           isChecked={lowerCase}
           onPress={()=>setLowerCase(prev => !prev)}
           fillColor='#29Ab87'
          />
         </View>
         <View style={styles.inputWrapper}>
         <Text style={styles.heading}>Include Lowercase</Text>
          <BouncyCheckbox
           isChecked={lowerCase}
           onPress={()=>setLowerCase(prev => !prev)}
           fillColor='#29Ab87'
          />
         </View>

         <View style={styles.formActions}>
            <TouchableOpacity><Text>Generate Password</Text></TouchableOpacity>
            <TouchableOpacity><Text>Reset</Text></TouchableOpacity>
         </View>
       </>
     )}
   </Formik>
      </View>
    </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 15,
    color: 'white',
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
    color:"white"
  },
  inputWrapper: {
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width:"100%"
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    width: '100%'
  },
  inputStyle: {
    padding: 8,
    width: '40%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#16213e',
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#CAD5E2',
  },
  secondaryBtnTxt: {
    textAlign: 'center',
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color:'#000'
  },
});