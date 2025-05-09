import { createContext , useContext ,FC ,PropsWithChildren, useState } from "react";
import Appwrite from "./service";

const AppwriteObj = new Appwrite();

export type AppwriteContextType = {
    appwrite: Appwrite;
    // here we are defining the appwrite will be an instance of the Appwrite class
    isLoggedIn : boolean;
    setIsLoggedIn : (isLoggedIn : boolean) => void;
}

const AppwriteContext = createContext<AppwriteContextType>(
    {
        appwrite: AppwriteObj,
        isLoggedIn: false,
        setIsLoggedIn: () => {}

    }
)


export const AppwriteProvider : FC<PropsWithChildren> = ({children})=>{
    const [isLoggedIn,setIsLoggedIn] = useState(false);

    const defaultState = {
        appwrite : AppwriteObj,
        isLoggedIn,
        setIsLoggedIn
    }

    return (
        <AppwriteContext.Provider value={defaultState}>
            {children}
        </AppwriteContext.Provider>
    )

}

export const useAppwrite = () =>{
    const context = useContext(AppwriteContext);
    if (!context){
        throw new Error("useAppwrite must be used within an AppwriteProvider");
    }

    return context;
}