import './Home.css';
import HeroSection from '../components/HeroSection.js';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import GoToTop from '../components/GoToTop';

function Home() {
  return (
    <>
      <HeroSection/>
      <Cards/>
      <Footer/>
      <GoToTop/>
    </>
  );
} 

export default Home;