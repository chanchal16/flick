import {AuthContextProvider} from './AuthContext';
import {VideoContextProvider} from './VideoContext';

function MainContextProvider({children}) {
  return (
    <div>
        <AuthContextProvider>
            <VideoContextProvider>               
                {children}               
            </VideoContextProvider>
        </AuthContextProvider>
    </div>
  )
}
export{useAuth} from './AuthContext';
export{useVideo} from './VideoContext';
export {MainContextProvider}