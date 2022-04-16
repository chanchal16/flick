import React,{createContext, useContext,useState} from 'react'

const videoContext = createContext()

function VideoContextProvider({children}) {
    const[videos,setVideos] = useState([]);
  return (
    <div>
        <videoContext.Provider value={{videos,setVideos}}>
            {children}
        </videoContext.Provider>
    </div>
  )
}
const useVideo =()=> useContext(videoContext);
export {VideoContextProvider,useVideo}
