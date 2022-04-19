import "./App.css";
import { Navbar,SideNav } from "./components/common";
import { Routes, Route } from "react-router-dom";
import {Login,Signup,VideoListing, WatchLater } from "./pages";

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
            <Route path="/watchlater" element={<WatchLater/>}/>
          </Routes>        
        </div>       
      </main>     
    </div>
  );
}

export default App;
