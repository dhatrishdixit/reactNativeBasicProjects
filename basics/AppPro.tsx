import React from "react";
import { SafeAreaView, Text , StyleSheet , useColorScheme } from "react-native";


export function AppPro(): React.JSX.Element{

    const isDarkMode = useColorScheme() === "dark";

    return (
        <SafeAreaView style={styles.container}>
            <Text style={isDarkMode ? styles.whiteText : styles.darkText}>hey there this from AppPro </Text>
        </SafeAreaView>
    )
}

// so difference is in web cross axis is along the vertical axis , align items is used to settle it along that axis , and justify content is used to settle it along the main axis

// in react native cross axis is along the horizontal axis , align items is used to settle it along that axis , and justify content is used to settle it along the main axis i.e. along the vertical axis

const styles = StyleSheet.create({
     container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"black"
     },
     whiteText:{
         color:"white"
     },
     darkText:{
         color:"black"
     }
})