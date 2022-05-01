import React,{createContext,useReducer,useContext,useState} from 'react'
import { videoReducer } from '../reducers/video.reducer';

const videoContext = createContext()

function VideoContextProvider({children}) {
    const[videoState,videoDispatch] = useReducer(videoReducer,{videos:[],category:[]});
  return (
    <div>
        <videoContext.Provider value={{videoState,videoDispatch}}>
            {children}
        </videoContext.Provider>
    </div>
  )
}
const useVideo =()=> useContext(videoContext);
export {VideoContextProvider,useVideo}
