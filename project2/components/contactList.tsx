import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

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
    <View>
      <Text style={styles.headingText}>contactList</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        color:"white"
    }
})