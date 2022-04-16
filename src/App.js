import "./App.css";
import { Navbar,SideNav } from "./components/common";
import { VideoListing } from "./pages";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <main className="app-main">
        <SideNav/>
        <div className="app-content">
          <VideoListing/>
        </div>       
      </main>
      
    </div>
  );
}

export default App;
