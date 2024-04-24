import './App.css';
import Player from "./player/index";
import NavBar from "./nav";
import Footer from "./footer";

function App() {
  return (
    <div>
      <NavBar/>
      <Player className="flex min-h-screen flex-col items-center p-24 bg-white"/>
      <Footer/>
    </div>
  );
}

export default App;
