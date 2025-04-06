import { ID,Account,Client } from 'appwrite';
import Config from "react-native-config";
import Snackbar from 'react-native-snackbar';

const appwriteClient = new Client();

const APPWRITE_ENDPOINT:string = Config.APPWRITE_ENDPOINT as string;
const APPWRITE_PROJECT_ID:string = Config.APPWRITE_PROJECT_ID as string;

// there is no way of protecting env variables in react native 
// so we are using react-native-config to hide them from the source code

type CreateUserAccount = {
    email:string,
    password:string,
    name:string
}

type LoginUserAccount = {
    email:string,
    password:string,
}


class AppwriteService {

    account ;
    
    constructor() {
        appwriteClient
        .setEndpoint(APPWRITE_ENDPOINT)
        .setProject(APPWRITE_PROJECT_ID);

        this.account = new Account(appwriteClient);
    }

    // Create a new user account

    async createUser({ email, password, name}:CreateUserAccount){
        try {
            // if(!email || !password || !name){
            //     throw new Error('Please fill all the fields');
            // }

            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            )

            if(userAccount){
                return this.login({email,password});
            }
            else {
                return userAccount;
            }


        } catch (error) {
           Snackbar.show({
                text:String(error),
                duration: Snackbar.LENGTH_LONG,
           })     
           console.log("Error creating user account: ", error);     
        }
    }

    async login({email,password}:LoginUserAccount){
        try {
            
            const userAccount = await this.account.createEmailPasswordSession(email,password);

            return userAccount;

        } catch (error) {
            Snackbar.show({
                text:String(error),
                duration: Snackbar.LENGTH_LONG,
           })     
           console.log("Error creating user account: ", error);     
        }
    }

    async getCurrentUser(){
        try {
            const currentUser = await this.account.get();
            return currentUser;
        } catch (error) {
            Snackbar.show({
                text:String(error),
                duration: Snackbar.LENGTH_LONG,
           })    
           console.log("Error getting current user: ", error);      
        }
    }

    async logout(){
        try {
            await this.account.deleteSession('current');
        } catch (error) {
            Snackbar.show({
                text:String(error),
                duration: Snackbar.LENGTH_LONG,
           })    
           console.log("Error in logging out user", error);    
        }
    }
}

export default AppwriteService;