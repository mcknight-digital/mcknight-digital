import '../styles/styles.css';

function AboutContentSection() {
  return (
    <div className="AboutContentSection">
        <h1>We make Software &amp; IT Solutions easy!</h1>
        
        <p>
            McKnight Digital is a Software Application Solution and Managed Service Provider (MSP). We believe that Digital and IT Solutions, shouldn't cause problems but rather solve them! This is what we strive to do, with excellence!
        </p>

        <h2>What We Provide:</h2>
        <ul>
          <li>IT Consulting</li>
          <li>Data Line Installation / Cable Drops</li>
          <li>Network Configuration</li>
          <li>Wireless Access Point Configuration</li>
          <li>Voice Over IP (VoIP) Deployment &amp; Configuration</li>
        </ul>

        <a href="/about">
            Read More
        </a>
    </div>
  );
}

export default AboutContentSection;
