import '../styles/styles.css';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer';


function Menu() {
  return (
    <div className="App Menu">
        <Navbar/>
        
        <div className="menuLinks">
        <h1>Menu</h1>

          <a href="/">
             Home
          </a>

          <a href="/our-services">
              Our Services
          </a>

          <a href="/about">
              About Us
          </a>

          <a href="/contact-us">
              Contact Us
          </a>

          <a href="/blog">
              Blog
          </a>
      </div>
      <Footer/>
    </div>
  );
}

export default Menu;
