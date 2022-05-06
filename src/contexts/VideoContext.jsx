import React,{createContext,useReducer,useContext} from 'react'
import { videoReducer } from '../reducers/video-reducer';

const videoContext = createContext()
const initialState = {
  videos:[],
  category:'ALL',
  searchQuery:''
}

function VideoContextProvider({children}) {
    const[videoState,videoDispatch] = useReducer(videoReducer,initialState);
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
