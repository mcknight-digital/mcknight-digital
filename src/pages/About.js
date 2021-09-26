import '../styles/styles.css';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer';


function About() {
  return (
    <div className="App">
        <Navbar/>
        <div className="AboutContentSection">
          <h1>We are McKnight Digital! And we make Software &amp; IT Solutions easy.</h1>
          
          <p>
              McKnight Digital is a Software Application Solution and Managed Service Provider (MSP). We believe that Digital and IT Solutions, shouldn't cause problems but rather solve them! This is what we strive to do, with excellence!
          </p>

          <h2>Here's what We Provide:</h2>
          <ul>
            <li>IT Consulting</li>
            <p>
              We'll meet with you one-on-one, and provide valuable IT Consulting. 
            </p>

            <li>Data Line Installation / Cable Drops</li>
            <li>Network Configuration</li>
            <li>Wireless Access Point Configuration</li>
            <li>Voice Over IP (VoIP) Deployment &amp; Configuration</li>
          </ul>

          <p style={{paddingBottom: "100px"}}>
              McKnight Digital began in 2018, when our owner Adam McKnight decided to do something!
          </p>

          <a href="/about">
              Read More
          </a>
      </div>
      <Footer/>
    </div>
  );
}

export default About;
