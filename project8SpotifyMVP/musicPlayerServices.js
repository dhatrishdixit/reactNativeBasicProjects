import TrackPlayer,{Event} from "react-native-track-player";

import { playlistData } from "./src/constants";


export async function playBackService(){
    console.log(Event);
    TrackPlayer.addEventListener(Event.RemotePause,()=>{
        
    })
}