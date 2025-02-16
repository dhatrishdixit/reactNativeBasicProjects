import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


type SectionProps = PropsWithChildren<{
  
}>;


function App(): React.JSX.Element {

  return (
    <SafeAreaView style={{
      flex:1,
      flexDirection:"row",
      flexWrap: 'wrap' // this is imp to wrap the view in next line
    }}>
    <View style={{backgroundColor:"red",height:100,width:100,margin:10}}>
    </View>
    <View style={{backgroundColor:"red",height:100,width:100,margin:10}}>
    </View>
    <View style={{backgroundColor:"red",height:100,width:100,margin:10}}>
    </View>
    <View style={{backgroundColor:"red",height:100,width:100,margin:10}}>
    </View>
    <View style={{backgroundColor:"red",height:100,width:100,margin:10}}>
    </View>
    <View style={{backgroundColor:"red",height:100,width:100,margin:10}}>
    </View>
    </SafeAreaView>
  );
}

export default App;
