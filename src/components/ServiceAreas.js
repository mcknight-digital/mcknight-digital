import '../styles/styles.css';

function ServiceAreas() {
  return (
    <div className="AboutContentSection ServiceAreas">
        <h1>Our Service Areas:</h1>
        
        <p>
           We proudly service the following areas in Ohio, USA.
        </p>

        <ul>
          <li>Lebanon</li>
          <li>South Lebanon</li>
          <li>Mason</li>
          <li>West Chester</li>
          <li>Monroe</li>
          <li>Middletown</li>
          <li>Trenton</li>
          <li>Springboro</li>
          <li>Blue Ash</li> 
        </ul>

        <a href="/about">
            Start a Quote
        </a>

        <a style={{marginLeft: "20px"}} href="/about">
           Give us a Call
        </a>
    </div>
  );
}

export default ServiceAreas;
