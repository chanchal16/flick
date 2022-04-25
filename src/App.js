import "./App.css";
import { Navbar,SideNav } from "./components/common";
import { Routes, Route } from "react-router-dom";
import {Liked, Login,Playlists,Signup,SinglePlaylist,Video,VideoListing, WatchLater } from "./pages";
import {PlaylistModal} from "./components";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <main className="app-main">
        <SideNav/>
        <div className="app-content">
          <Routes>
            <Route path="/" element={<VideoListing/>}/> 
            <Route path="/login" element={<Login />} />
            <Route path="signup" element={<Signup/> } />
            <Route path="watchlater" element={<WatchLater/>}/>
            <Route path="playlists" element={<Playlists/>}/>
            <Route path="playlists/:playlistId" element={<SinglePlaylist/>}/>
            <Route path="/:videoId" element={<Video/>}/>
            <Route path="liked" element={<Liked/>}/>
          </Routes> 
          <PlaylistModal/> 
                
        </div>       
      </main>     
    </div>
  );
}

export default App;
