import '../styles/styles.css';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer';
import AboutContentSection from '../components/AboutContentSection';
import ServiceAreas from '../components/ServiceAreas';
import serverIcon from '../images/server.svg';

function Home() {
  return (
    <div className="App">
        <Navbar/>
        <img class="ServerIcon" src={serverIcon} alt="t"/>
        <AboutContentSection/>
        <ServiceAreas/>
        <Footer/>
    </div>
  );
}

export default Home;
