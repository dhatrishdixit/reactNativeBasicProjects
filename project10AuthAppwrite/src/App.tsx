import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Router } from './routes/Router'
import { AppwriteProvider } from './appwrite/AppwriteContext'

const App = () => {
  return (
    <SafeAreaView>
      <AppwriteProvider>
      <Router/>
      </AppwriteProvider>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})