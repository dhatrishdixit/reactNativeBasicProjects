import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

import { useAppwrite } from '../appwrite/AppwriteContext'
import Snackbar from 'react-native-snackbar';



const Signup = () => {
  
  const { appwrite , isLoggedIn, setIsLoggedIn } = useAppwrite();
  
  const [name,setName] = useState<string>('');
  const [email,setEmail] = useState<string>('');
  const [password,setPassword] = useState<string>('');
  const [confirmPassword,setConfirmPassword] = useState<string>('');
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState<string>('');

  const createUser = async () => {
    setLoading(true);
    try {
      if(name.length == 0 || email.length == 0 || password.length == 0 || confirmPassword.length == 0){
          throw new Error('Please fill all the fields')
       }
      else if(password !== confirmPassword){
           throw new Error('fill the same password in both the fields')
      }

      await appwrite.createUser({
        name,email,password
      });
      setLoading(false);
    } catch (error) {
       const err = error as Error;
       Snackbar.show({
          text: err.message,
       })
      setLoading(false);
    }
       
  }
  return (
    <View>
      <TextInput></TextInput>
      <Text>Signup</Text>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({})