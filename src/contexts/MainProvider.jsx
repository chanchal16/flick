import {AuthContextProvider} from './AuthContext';
import {VideoContextProvider} from './VideoContext';
import {PlaylistContextProvider} from './PlaylistContext'

function MainContextProvider({children}) {
  return (
    <div>
        <AuthContextProvider>
            <VideoContextProvider> 
              <PlaylistContextProvider>              
                {children}  
              </PlaylistContextProvider>             
            </VideoContextProvider>
        </AuthContextProvider>
    </div>
  )
}
export{useAuth} from './AuthContext';
export{useVideo} from './VideoContext';
export {usePlaylist} from './PlaylistContext'
export {MainContextProvider}