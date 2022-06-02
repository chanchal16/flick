import React,{createContext,useContext,useReducer,useEffect,useState}from 'react'
import { playlistReducer } from '../reducers/playlist-reducer'
import { getLikedVideos } from '../services/likes-services'
import { getHistory } from '../services/history-services'
import { getAllPlaylists } from '../services/playlist-services'
import { getVideosFromWatchLater } from '../services/watchLater-services'
import { useAuth } from './AuthContext'

const playlistContext = createContext()
const initialState = {
    watchlater:[],
    playlists:[],
    likes:[],
    history:[]
}
 function PlaylistContextProvider({children}) {
  const [isModalOpen,setIsModalOpen] = useState(false)
  const[selectedVideo,setSelectedVideo] = useState(null)
  const {token} = useAuth()
  const [playListState,playListDispatch] = useReducer(playlistReducer,initialState)

    useEffect(() => {
      getAllPlaylists(token,playListDispatch)
      getVideosFromWatchLater(token,playListDispatch) 
      getLikedVideos(token,playListDispatch)     
      getHistory(token,playListDispatch)     
    }, [])

    const providerObj = {playListState,playListDispatch,isModalOpen,setIsModalOpen,selectedVideo,setSelectedVideo}
    
  return (
    <div>
        <playlistContext.Provider value={providerObj}>
            {children}
        </playlistContext.Provider>
    </div>
  )
}
const usePlaylist = ()=>useContext(playlistContext)
export {PlaylistContextProvider,usePlaylist}