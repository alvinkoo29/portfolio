import "./header.css";
import hamburgerMenu from "../icons/hamburger-menu.svg";
import youtubeLogo from "../icons/youtube-logo.svg";
import search from "../icons/search.svg";
import voiceSearch from "../icons/voice-search-icon.svg";
import upload from "../icons/create.svg"
import apps from "../icons/youtube-apps.svg";
import notifications from "../icons/notifications.svg";
import profile from "../images/profile-mine.jpg";

function Header() {
  return (
    <div className = "header">
      <div className = "header-left">
        <img className = "hamburger-menu" src = {hamburgerMenu} alt="menu"/>
        <img className = "youtube-logo" src={youtubeLogo} alt="youtube logo"/>
      </div >
      <div className = "header-mid">
        <input className ="search-bar" type="text" placeholder="Search"/>
        <button className = "search-button">
          <img className = "search" src={search} alt="search"/>
          <div className = "tooltip">Search</div>
        </button>
        <button className ="voice-button">
          <img className ="voice-search" src={voiceSearch} alt="voice search"/>
          <div className = "tooltip">Search with your voice</div>
        </button>
      </div>
      <div className = "header-right">
        <button className = "upload-button">
          <img className = "upload" src={upload} alt="upload"/>
          <div className = "tooltip">Create</div>
        </button>
        <button className = "apps-button">
          <img className = "apps" src={apps} alt="other youtube apps"/>
          <div className = "tooltip">Apps</div>
        </button>
        <button className = "notifications-button">
          <img className = "notifications" src={notifications} alt="notifications"/>
          <div className = "notifications-count">3</div>
          <div className = "tooltip">Notifications</div>
        </button>
        <img className = "my-profile" src={profile} alt="my profile"/>
      </div>
    </div>
  );
}

export default Header;
