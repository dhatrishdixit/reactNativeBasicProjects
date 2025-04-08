import { useEffect, useState } from "react";

import { useAppwrite } from "../appwrite/AppwriteContext";

import AppStack from "./AppStack";
import AuthStack from "./AuthStack";

import Loading from "../components/Loading";

import { NavigationContainer } from '@react-navigation/native';

export const Router = () => {

    const { isLoggedIn,appwrite,setIsLoggedIn } = useAppwrite();
    const [loading,setLoading] = useState(true);
    
    useEffect(()=>{
       setLoading(true);
       appwrite.getCurrentUser()
       .then(res=>{
            setLoading(false);
            if(res){
                setIsLoggedIn(true);
            }
       })
       .catch(_=>{
            setLoading(false);
            setIsLoggedIn(false);
       })
    },[isLoggedIn,appwrite,setIsLoggedIn])


    if(loading){
        return <Loading/>
    }

    return (
            
            <NavigationContainer>
                {isLoggedIn ? <AppStack/> : <AuthStack/>}
            </NavigationContainer>
    )
}