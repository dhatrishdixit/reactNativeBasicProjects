import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { compatibilityVersion } from 'drizzle-orm/version';

interface User {
	name: string;
	email: string;
	text: string;
	company: string;
}

const data = [
	{
		"name": "Zeus Carpenter",
		"email": "mauris.vestibulum@protonmail.com",
		"text": "odio tristique pharetra. Quisque ac libero nec ligula consectetuer rhoncus. Nullam velit",
		"company": "Parturient Montes LLC"
	},
	{
		"name": "Renee Riley",
		"email": "tempor.bibendum@icloud.ca",
		"text": "rutrum magna. Cras convallis convallis dolor. Quisque tincidunt pede ac urna. Ut",
		"company": "Congue A Aliquet Inc."
	},
	{
		"name": "Chava Haley",
		"email": "magna.a@google.com",
		"text": "pharetra, felis eget varius ultrices, mauris ipsum porta elit, a feugiat tellus",
		"company": "Amet Associates"
	},
	{
		"name": "Graiden Mcdaniel",
		"email": "vulputate.eu.odio@aol.edu",
		"text": "senectus et netus et malesuada fames ac turpis egestas. Fusce aliquet magna",
		"company": "Orci Lobortis Corp."
	},
	{
		"name": "Nathan Delgado",
		"email": "mi.pede@google.couk",
		"text": "lobortis quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod ac,",
		"company": "Diam Eu Dolor Corp."
	}
]

export default function ContactList() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Contact List</Text>
	  <ScrollView style={styles.scrollContainer}>
           {data.map((user:User,ind)=>{
			  return(
			    <View style={styles.cardContainer} key={ind}>
				  <Text style={styles.indText}>{ind}</Text> 
                  <Text style={styles.nameText}>{user.name}</Text>
				  <Text style={styles.companyText}>{user.company}</Text> 
				  <Text style={styles.emailText}>{user.email}</Text> 
				  <Text style={styles.basicText}>{user.text}</Text>   
			    </View>
			  )
		   })}
	  </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        color:"white",
		fontSize:24,
		fontWeight:"bold"
    },
	container:{
		margin:8,
	},
	scrollContainer:{

	},
	cardContainer:{
		
	},
	indText:{
		color:"white",
	},
	nameText:{
		color:"white",
	},
	companyText:{
		color:"white",
	},
	emailText:{
		color:"white",
	},
	basicText:{
		color:"white",
	}
})