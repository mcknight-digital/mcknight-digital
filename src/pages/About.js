import '../styles/styles.css';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import ethernetCable from '../images/cable-black.png';
import cloudIcn from '../images/cloud-blac.png';
import networkIcon from '../images/switch-black.png';
// ADD IMPORT FOR WIFI ICON HERE.
import switchIcn from '../images/switch-black.png';
import deskPhoneIcn from '../images/desk-phone-black.png';
 

function About() {
  return (
    <div className="App">
        <Navbar/>
        <div className="AboutContentSection">
          <h1>We are McKnight Digital! And we make Software &amp; IT Solutions easy.</h1>
          
          <p>
              McKnight Digital is a Software Application Solution and Managed Service Provider (MSP). We believe that Digital and IT Solutions, shouldn't cause problems but rather solve them! This is what we strive to do, with excellence!
          </p>
          
          <p>
            McKnight Digital was started in 2017 out of a desire to "do better". Our founder, Adam McKnight has a background in Technology Services, and Media. In 2017, he brought his skills together with His business knowledge. He began working with non-profits, doing pro bono work at the start &mdash; all in an effort to "do better". Working with many clients in His hometown of Lebanon, Ohio and its surrounding areas; McKnight is passionate about helping those who need it most.
          </p>

          <h2>Here's what We Provide:</h2>
          <ul>
            <img className="Icon" src={cloudIcn} alt="Cloud Icon" />
            <li>IT Consulting</li>
            <p>
              We'll meet with you one-on-one, and provide valuable IT Consulting. We'll do a walk through of your current environment and let you know what we think can be improved. 
            </p>

            <img className="Icon" src={ethernetCable} alt="Ethernet Cable" />
            <li>Data Line Installation / Cable Drops</li>
            <p>
              We'll meet with you one-on-one, and provide valuable IT Consulting. We'll do a walk through of your current environment and let you know what we think can be improved. 
            </p>

            <img className="Icon" src={switchIcn} alt="Ethernet Cable" />
            <li>Network Configuration</li>
            <p>
              We'll meet with you one-on-one, and provide valuable IT Consulting. We'll do a walk through of your current environment and let you know what we think can be improved. 
            </p>

            <img className="Icon" src={ethernetCable} alt="Ethernet Cable" />
            <li>Wireless Access Point Configuration</li>
            <p>
              We'll meet with you one-on-one, and provide valuable IT Consulting. We'll do a walk through of your current environment and let you know what we think can be improved. 
            </p>


            <img className="Icon" src={deskPhoneIcn} alt="Ethernet Cable" />
            <li>Voice Over IP (VoIP) Deployment &amp; Configuration</li>
            <p>
              We'll meet with you one-on-one, and provide valuable IT Consulting. We'll do a walk through of your current environment and let you know what we think can be improved. 
            </p>
          </ul>
      </div>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default About;
