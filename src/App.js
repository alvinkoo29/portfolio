import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import ProjectButton from './components/ProjectButton';
import Navbar from './components/projects/TravelAgency/components/Navbar.js';
import TravelHome from './components/projects/TravelAgency/pages/Home.js';
import Services from './components/projects/TravelAgency/pages/Services.js';
import Products from './components/projects/TravelAgency/pages/Products.js';
import SignUp from './components/projects/TravelAgency/pages/Sign-up.js';
import YoutubeHome from "./components/projects/YoutubeClone/youtube.js"
import Home from "./components/projects/MainProject/home.js"
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path = "/portfolio" element = {<Home/>}/>
          <Route path = "/travel-agency" element = {<Navbar/>}>
            <Route path = "home"  element = {<TravelHome/>}/>
            <Route path = "services"  element = {<Services/>} />
            <Route path = "products"  element = {<Products/>} />
            <Route path = "sign-up"  element = {<SignUp/>} />
          </Route>
          <Route path = "/youtube-clone/home" element = {<YoutubeHome/>}/>
        </Routes>
        <ProjectButton/>
      </Router>
    </div>
  );
}

export default App;
