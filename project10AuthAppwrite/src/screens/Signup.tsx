import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

import { useAppwrite } from '../appwrite/AppwriteContext'
import Snackbar from 'react-native-snackbar';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../routes/AuthStack';

type SignupScreenProps = NativeStackScreenProps<AuthStackParamList, 'Signup'>;

const Signup = ({navigation}:SignupScreenProps) => {
  
  const { appwrite , setIsLoggedIn } = useAppwrite();
  
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
          setError('Please fill all the fields')
          throw new Error('Please fill all the fields')
       }
      else if(password !== confirmPassword){
           setError('Passwords do not match')
           throw new Error('Passwords do not match')
      }

      await appwrite.createUser({
        name,email,password
      });
      setLoading(false);
      setIsLoggedIn(true);
      
    } catch (error) {
       const err = error as Error;
       Snackbar.show({
          text: err.message,
       })
       setError(err.message);
      setLoading(false);
    }
       
  }
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={styles.container}>
    <View style={styles.formContainer}>
      <Text style={styles.appName}>Appwrite Auth</Text>

      {/* Name */}
      <TextInput
        value={name}
        onChangeText={text => {
          setError('');
          setName(text);
        }}
        placeholderTextColor={'#AEAEAE'}
        placeholder="Name"
        style={styles.input}
      />

      {/* Email */}
      <TextInput
        value={email}
        keyboardType="email-address"
        onChangeText={text => {
          setError('');
          setEmail(text);
        }}
        placeholderTextColor={'#AEAEAE'}
        placeholder="Email"
        style={styles.input}
      />

      {/* Password */}
      <TextInput
        value={password}
        onChangeText={text => {
          setError('');
          setPassword(text);
        }}
        placeholderTextColor={'#AEAEAE'}
        placeholder="Password"
        secureTextEntry
        style={styles.input}
      />

      {/* Repeat password */}
      <TextInput
        secureTextEntry
        value={confirmPassword}
        onChangeText={text => {
          setError('');
          setConfirmPassword(text);
        }}
        placeholderTextColor={'#AEAEAE'}
        placeholder="Repeat Password"
        style={styles.input}
      />

      {/* Validation error */}
      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      {/* Signup button */}
      <Pressable
        onPress={createUser}
        style={[styles.btn, {marginTop: error ? 10 : 20}]}
        disabled={loading}
        >
        <Text style={styles.btnText}>{loading ? 'Signing Up ...' : 'Sign Up'}</Text>
      </Pressable>

      {/* Login navigation */}
      <Pressable
        onPress={() => navigation.navigate('Login')}
        style={styles.loginContainer}>
        <Text style={styles.haveAccountLabel}>
          Already have an account?{'  '}
          <Text style={styles.loginLabel}>Login</Text>
        </Text>
      </Pressable>
    </View>
  </KeyboardAvoidingView>
  )
}

export default Signup
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  formContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    height: '100%',
  },
  appName: {
    color: '#f02e65',
    fontSize: 40,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fef8fa',
    padding: 10,
    height: 40,
    alignSelf: 'center',
    borderRadius: 5,

    width: '80%',
    color: '#000000',

    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 1,
  },
  errorText: {
    color: 'red',
    alignSelf: 'center',
    marginTop: 10,
  },
  btn: {
    backgroundColor: '#ffffff',
    padding: 10,
    height: 45,

    alignSelf: 'center',
    borderRadius: 5,
    width: '80%',
    marginTop: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 3,
  },
  btnText: {
    color: '#484848',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  loginContainer: {
    marginTop: 60,
  },
  haveAccountLabel: {
    color: '#484848',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
  loginLabel: {
    color: '#1d9bf0',
  },
});