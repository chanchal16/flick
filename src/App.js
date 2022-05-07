import "./App.css";
import { Navbar,RequireAuth,SideNav } from "./components/common";
import { Routes, Route,useRoutes } from "react-router-dom";
import {PlaylistModal} from "./components";
import { ROUTES } from "./routes";

function App() {
  const routeElement = useRoutes(ROUTES)
  return (
    <div className="App">
      <Navbar/>
      <main className="app-main">
        <SideNav/>
        <div className="app-content">
          {routeElement}
          <PlaylistModal/> 
                
        </div>       
      </main>     
    </div>
  );
}

export default App;
