import '../styles/styles.css';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import OurServices from '../components/AboutContentSection';
import ServiceAreas from '../components/ServiceAreas';
 

function ServicesPage() {
  return (
    <div className="App">
      <Navbar/>
      <OurServices/>
      <ServiceAreas/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default ServicesPage;
