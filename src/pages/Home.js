import '../styles/styles.css';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer';
import AboutContentSection from '../components/AboutContentSection';
import ServiceAreas from '../components/ServiceAreas';


function Home() {
  return (
    <div className="App">
        <Navbar/>
        <AboutContentSection/>
        <ServiceAreas/>
        <Footer/>
    </div>
  );
}

export default Home;
