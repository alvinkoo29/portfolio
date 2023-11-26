import './home.css';
import Header from "./components/header.js";
import Sidebar from "./components/sidebar.js";
import profilePicture from "./images/profile-pic.jpeg"
import decoration from "./images/computer.png"


function Home() {
  return (
    <div className = "main-home">
      <Sidebar/>
      <Header/>
      <div className = "content">

        <div className = "introduction">
          <h1 className = "title">
            Software Engineer, Technical Writer & Gamer
          </h1>
          <div className = "description">
            <img className = "profile-picture" src = {profilePicture} alt= "profile"/>
            <p className = "description-text">
              I love and enjoy all things tech. Can't wait to see the next innovation!
            </p>
          </div>
          <img className = "decoration" src = {decoration} alt= "decoration"/>
        </div>

        <div className = "main-home-projects">
          <div className = "column1">
            <div className = "project1">
              test ok what is hjappening
            </div>
          </div>
          <div className = "column2">
            <div className = "project2">
            
            </div>
          </div>
        </div>

        <div className = "main-home-about">

        </div>
      </div>
      
    </div>
  );
}

export default Home;
