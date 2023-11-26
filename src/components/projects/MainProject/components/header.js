import './header.css';
import about from "../icon/icons8-info-100.svg";
import linkedin from "../icon/icons8-linkedin-100.svg";
import github from "../icon/icons8-github-100.svg";
import hamburgerMenu from "../icon/icons8-menu-100.svg";
import close from "../icon/icons8-cancel-100.svg";
import { useState } from 'react';

function Header() {
  const [clicked, setclicked] = useState (true);

  return (
    <div className =  "main-header">
      <div className = "logo">
        Alvin Koo
      </div>
      <div className= "menu">
        <a href= "https://icons8.com/" target = "_blank" rel = "noreferrer">
          <img className = "about-icons" src = {about} alt= "icons link"/>
        </a>
        <a href= "https://www.linkedin.com/in/alvin-koo-750072195/" target = "_blank" rel = "noreferrer">
          <img className = "icon" src = {linkedin} alt= "linkedin"/>
        </a>
        <a href= "https://github.com/alvinkoo29" target = "_blank" rel = "noreferrer">
          <img className = "icon" src = {github} alt= "github"/>
        </a>
        <button className = "button" onClick={() => setclicked(!clicked)}>
          {clicked
          ? <img className = "dropdown-icon" src = {hamburgerMenu} alt= "menu"/>
          : <img className = "dropdown-icon" src = {close} alt= "close" />
          }
        </button>
      </div>
    </div>
  );
}

export default Header;
