import './sidebar.css';
import { useState } from 'react';
import Intro from  "./intro.js"
import Work from  "./work.js"
import About from  "./about.js"
import Contact from  "./contact.js"

function Sidebar() {
  const [Currentdisplay,setCurrentDisplay] = useState("Intro");

  const DisplayItem = () => {
    if (Currentdisplay === "Intro"){
      return <Intro key = {Currentdisplay}/>
    }
    else if (Currentdisplay === "Work"){
      return <Work key = {Currentdisplay}/>
    }
    else if (Currentdisplay === "About"){
      return <About key = {Currentdisplay}/>
    }
    else if (Currentdisplay === "Contact"){
      return <Contact key = {Currentdisplay}/>
    }
  };

  return (
    <div className= "main-sidebar">
      <button className = {Currentdisplay ==="Intro" ? "bar-active" : "bar"} onClick={() => setCurrentDisplay("Intro")}/>
      <button className = {Currentdisplay ==="Work" ? "bar-active" : "bar"} onClick={() => setCurrentDisplay("Work")}/>
      <button className = {Currentdisplay ==="About" ? "bar-active" : "bar"} onClick={() => setCurrentDisplay("About")}/>
      <button className = {Currentdisplay ==="Contact" ? "bar-active" : "bar"} onClick={() => setCurrentDisplay("Contact")}/>
    </div>
  );
}

export default Sidebar;
