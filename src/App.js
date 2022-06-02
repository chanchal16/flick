import "./App.css";
import { Navbar,RequireAuth,SideNav } from "./components/common";
import {useRoutes } from "react-router-dom";
import {PlaylistModal} from "./components";
import { ROUTES } from "./routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const routeElement = useRoutes(ROUTES)
  return (
    <div className="App">
      <Navbar/>
      <ToastContainer autoClose={1000} pauseOnFocusLoss={false} />
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
