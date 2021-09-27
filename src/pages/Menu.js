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

          <a href="/about">
              About Us
          </a>

          <a href="/about">
              About Us
          </a>

          <a href="/about">
              About Us
          </a>

          <a href="/disclosures">
              Disclosures
          </a>
      </div>
      <Footer/>
    </div>
  );
}

export default Menu;
