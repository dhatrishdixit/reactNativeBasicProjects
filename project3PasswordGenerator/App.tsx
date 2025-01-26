import { StyleSheet, Text, View } from 'react-native'
import React from 'react';

import * as yup from "yup";

const passwordSchema = yup.object().shape({
  passwordLength: yup.number()
                  .min(4,"should be min of 4 characters")
                  .max(20,"should be max of 20 characters")
                  .required("length is required"),
})

export default function App() {
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({})