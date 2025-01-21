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
                    <Text style={styles.cardDescription}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam quam veniam veritatis ut fugit, cupiditate labore ipsam sunt vel. Voluptatibus non incidunt at quaerat quos consectetur cumque eligendi sint rerum! </Text>
                </View>
            </View>

       </View>
    )
}


const styles = StyleSheet.create({
      cardTitle:{
        color:"white"
      },
      cardLabel:{
        color:"white"
      },
      cardDescription:{
        color:"white"
      },
      headingText:{
        color:"white",
        fontSize:24,
        fontWeight:"bold",
      },
      container:{
        margin:8
      },
      card:{},
      cardElevated:{},
      cardBody:{

      },
      cardImage:{
        height:280,
        width:280
      }
});

export default FancyCard;