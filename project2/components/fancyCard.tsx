import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';


function FancyCard(){
    return(
       <View style={styles.container}>
            <Text style={styles.headingText}>Trending places</Text>
            <View style={[styles.card,styles.cardElevated]}>
                <Image
                 style={styles.cardImage}
                 source={{
                    uri: "https://images.unsplash.com/photo-1735798036883-c7c9ea7e8af5?q=80&w=1909&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                 }}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Lorem ipsum </Text>
                    <Text style={styles.cardLabel}>Lorem ipsum dolor sit amet consectetur adipisicing elit</Text>
                    <Text style={styles.cardDescription}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam quam veniam veritatis ut fugit </Text>
                      <View style={styles.footerStyle}>
                      <Text style={styles.footer}>This is footer </Text>
                      </View>
                    
                </View>
            </View>

       </View>
    )
}


const styles = StyleSheet.create({
      headingText:{
        color:"white",
        fontSize:24,
        fontWeight:"bold",
      },
      container:{
        margin:8
      },
      card:{
        width:280,
        borderRadius:6,
      },
      cardElevated:{
        backgroundColor:"#FFFFFF",
        elevation:4,
        shadowOffset:{
          width:1,
          height:1
        }
      },
      cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12
      },
      cardImage:{
        height:280,
        width:280,
        marginBottom:8,
        borderTopLeftRadius:6,
        borderTopRightRadius:6
      },
      cardTitle:{
        color:"black",
        fontSize:22,
        fontWeight:"bold",
        marginBottom:4,
      },
      cardLabel:{
        color:"black",
        fontSize:14,
        marginBottom:6
      },
      cardDescription:{
        color:"black",
        fontSize:12,
        marginBottom:12
      },
      footer:{
        color:"black",
      
      },
      footerStyle:{
        flex:1,
        width:"100%",
        alignItems:"flex-end",
        marginBottom:8
      }
});

export default FancyCard;