import React,{createContext,useContext,useReducer,useEffect}from 'react'
import { playlistReducer } from '../reducers/playlist-reducer'
import { getVideosFromWatchLater } from '../services/watchLater-services'
import { useAuth } from './AuthContext'

const playlistContext = createContext()
const initialState = {
    watchlater:[]
}
 function PlaylistContextProvider({children}) {
    const {token} = useAuth()
    const [playListState,playListDispatch] = useReducer(playlistReducer,initialState)

    useEffect(() => {
      getVideosFromWatchLater(token,playListDispatch)      
    }, [])
    
  return (
    <div>
        <playlistContext.Provider value={{playListState,playListDispatch}}>
            {children}
        </playlistContext.Provider>
    </div>
  )
}
const usePlaylist = ()=>useContext(playlistContext)
export {PlaylistContextProvider,usePlaylist}