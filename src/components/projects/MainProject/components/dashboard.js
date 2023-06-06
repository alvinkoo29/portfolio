import './dashboard.css';
import './sidebar.css';
import { useState } from 'react';
import Intro from  "./intro.js"
import Work from  "./work.js"
import About from  "./about.js"
import Contact from  "./contact.js"

function Dashboard() {
  const [display,setDisplay] = useState("Intro");

  const DisplayItem = () => {
    if (display === "Intro"){
      return <Intro key = {display}/>
    }
    else if (display === "Work"){
      return <Work key = {display}/>
    }
    else if (display === "About"){
      return <About key = {display}/>
    }
    else if (display === "Contact"){
      return <Contact key = {display}/>
    }
  };

  return (
    <div className =  "main-dashboard">
      <div className = "main-content">
        <DisplayItem/>
      </div>
      <div className= "main-sidebar">
      <button className = {display ==="Intro" ? "bar-active" : "bar"} onClick={() => setDisplay("Intro")}/>
      <button className = {display ==="Work" ? "bar-active" : "bar"} onClick={() => setDisplay("Work")}/>
      <button className = {display ==="About" ? "bar-active" : "bar"} onClick={() => setDisplay("About")}/>
      <button className = {display ==="Contact" ? "bar-active" : "bar"} onClick={() => setDisplay("Contact")}/>
    </div>
    </div>
  );
}

export default Dashboard;
