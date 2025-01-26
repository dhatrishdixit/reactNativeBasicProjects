import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
  
  function openWebsite(websiteLink:string){
     Linking.openURL(websiteLink);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card,styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>hey there </Text>
        </View>
        <Image
         source={{
            uri:"https://images.unsplash.com/photo-1734983235410-cbbc5f5fcdaf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
         }} 
         style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
            <Text numberOfLines={2} style={styles.bodyText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, illo sunt. Eligendi beatae odit, laborum consequuntur neque velit fugit debitis! Doloremque neque quidem sit in quia dolorem quasi perspiciatis sed.
            </Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity
              onPress={()=>openWebsite("https://clipsync.in.net")} 
            >
            <Text 
                numberOfLines={2} 
                style={styles.projectLink}
            >
                Read More
            </Text>
            </TouchableOpacity>  
            <TouchableOpacity
             onPress={()=>openWebsite("https://www.youtube.com/@dhatrishdixit6004")} 
             style={styles.followLinkContainer}
            >
            <Text 
                numberOfLines={2} 
                style={styles.followLink}
            >
                Follow me 
            </Text>
            </TouchableOpacity> 
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        margin:8
    },
    headingText:{
        color:"white",
        fontSize:24,
        fontWeight:"bold",
    },
    card:{
        width:280,
        backgroundColor:"white",
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:8,
        paddingVertical:2
    },
    elevatedCard:{},
    headingContainer:{
        flex:1,
        alignItems:"center"
    },
    headerText:{
        color:"black",
        fontSize:20,
        fontWeight:"bold",
    },
    cardImage:{
        height:200
    },
    bodyContainer:{},
    bodyText:{
        color:"black"
    },
    footerContainer:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-evenly",
        marginVertical:4
    },
    projectLink:{
        color:"black"
    },
    followLinkContainer:{
        
    },
    followLink:{
        color:"black"
    }
})