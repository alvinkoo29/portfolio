import './navbar.css';
import linkedin from "../icon/linkedin.svg";
import github from "../icon/github.svg";
import hamburgerMenu from "../icon/hamburger.PNG";
import close from "../icon/close.PNG";
import { useState } from 'react';

function Navbar() {
  const [clicked, setclicked] = useState (true);

  return (
    <div className =  "main-navbar">
      <div className = "logo">
        Alvin Koo
      </div>
      <div className= "menu">
        <a href= "https://www.linkedin.com/in/alvin-koo-750072195/" rel = "noreferrer" target = "_blank">
          <img className = "icon" src = {linkedin} alt= "linkedin"/>
        </a>
        <a href= "https://github.com/alvinkoo29" rel = "noreferrer" target = "_blank">
          <img className = "icon" src = {github} alt= "github"/>
        </a>
        <button className = "button" onClick={() => setclicked(!clicked)}>
          {clicked
          ? <img className = "icon" src = {hamburgerMenu} alt= "menu"/>
          : <img className = "icon" src = {close} alt= "close"/>
          }
        </button>
      </div>
    </div>
  );
}

export default Navbar;
