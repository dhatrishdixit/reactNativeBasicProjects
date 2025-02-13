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

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;


function App(): React.JSX.Element {
  

  return (
    <SafeAreaView >
      <StatusBar/>
      <View style=[styles.rectangle,{backgroundColor : '#000000'}]>
        

      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    rectangle:{

    }
});

export default App;
