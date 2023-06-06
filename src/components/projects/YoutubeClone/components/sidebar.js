import "./sidebar.css";
import home from "../icons/home.svg";
import explore from "../icons/explore.svg";
import subscriptions from "../icons/subscriptions.svg";
import originals from "../icons/originals.svg";
import music from "../icons/youtube-music.svg";
import library from "../icons/library.svg";


function Sidebar() {
  return (
    <nav className = "sidebar">
      <div className = "sidebar-link">
        <img src={home} alt="home"/>
        <p>Home</p>
        <div className = "tooltip">Home</div>
      </div>
      <div className = "sidebar-link">
        <img src={explore} alt="explore"/>
        <p>Explore</p>
        <div className = "tooltip">Explore</div>
      </div>
      <div className = "sidebar-link">
        <img src={subscriptions} alt="subscriptions"/>
        <p>Subscriptions</p>
        <div className = "tooltip">Subscriptions</div>
      </div>
      <div className = "sidebar-link">
        <img src={originals} alt="originals"/>
        <p>Originals</p>
        <div className = "tooltip">Originals</div>
      </div>
      <div className = "sidebar-link">
        <img src={music} alt="music"/>
        <p>Youtube Music</p>
        <div className = "tooltip">Youtube Music</div>
      </div>
      <div className = "sidebar-link">
        <img src={library} alt="library"/>
        <p>Library</p>
        <div className = "tooltip">Library</div>
      </div>
    </nav>
  );
}

export default Sidebar;
