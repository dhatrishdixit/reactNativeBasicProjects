import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

// snackbar
import Snackbar from 'react-native-snackbar';

// context API 
import { useAppwrite } from '../appwrite/AppwriteContext';
import { SafeAreaView } from 'react-native-safe-area-context';

type UserObj = {
   name ?: string;
   email ?: string;
}


const Home = () => {

  const { appwrite , isLoggedIn, setIsLoggedIn } = useAppwrite();
  const [userObj,setUserObj] = useState<UserObj>({});
  const [loading,setLoading] = useState(false);

  const handleLogout = async () => {
      setLoading(true);

      try {
        await appwrite.logout();
        setLoading(false);
        setIsLoggedIn(false);
      } catch (error) {
        Snackbar.show({
          text: 'Error logging out'
        })
        setLoading(false);
      }  
  }
  useEffect(()=>{
      
    appwrite.getCurrentUser()
    .then(res => {
      if(res){
        setUserObj({
          name : res.name,
          email : res.email
        })
      }
    })
    .catch(err => {
      console.log(err);
      setUserObj({});
    })

    return () => {
      setUserObj({});
    }
     
  },[appwrite,isLoggedIn])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Image
          source={{
            uri: 'https://appwrite.io/images-ee/blog/og-private-beta.png',
            width: 400,
            height: 300,
            cache: 'default',
          }}
          resizeMode="contain"
        />
        <Text style={styles.message}>
          Build Fast. Scale Big. All in One Place.
        </Text>
        {userObj && (
          <View style={styles.userContainer}>
            <Text style={styles.userDetails}>Name: {userObj.name}</Text>
            <Text style={styles.userDetails}>Email: {userObj.email}</Text>
          </View>
        )}
      </View>
      <Button 
      color={'#f02e65'} 
      title={loading ? 'Logging out...' : 'Logout'}
      disabled = {loading}
      onPress={handleLogout}
      />
    </SafeAreaView>
  );

}


export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0D32',
  },
  welcomeContainer: {
    padding: 12,

    flex: 1,
    alignItems: 'center',
  },
  message: {
    fontSize: 26,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  userContainer: {
    marginTop: 24,
  },
  userDetails: {
    fontSize: 20,
    color: '#FFFFFF',
  },
});