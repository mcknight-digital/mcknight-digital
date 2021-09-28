import '../styles/styles.css';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

 

function ContactPage() {
  return (
    <div className="App">
      <Navbar/>
      <h1>
        Get in Touch with Us!
      </h1>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default ContactPage;
