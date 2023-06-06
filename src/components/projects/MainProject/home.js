import './home.css';
import Navbar from "./components/navbar.js";
import Dashboard from "./components/dashboard.js";

function Home() {
  return (
    <div className = "main-home">
      <Navbar/>
      <Dashboard/>
    </div>
  );
}

export default Home;
