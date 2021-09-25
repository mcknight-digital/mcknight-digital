import '../styles/styles.css';

function Footer() {
  return (
    <div className="Footer">
        <h1>&copy; 2021 - MCKNIGHT DIGITAL</h1>
        <h3>ALL RIGHTS RESERVED &mdash; Adam McKnight d.b.a, McKnight Digital & IT Solutions</h3>
        <h3>Disclaimer: All thoughts and opinions are in no way are influenced or represented by the Company or Organizations we may represent.</h3>
        <h3 style={{marginBottom: "30px"}}>Built with React, Proudly Deployed on Netlify | Powered by McKnight.Digital</h3>
        <div class="FooterLinkGroup">
          <a class="FooterLink" href="/privacy">Privacy Policy</a>
          <a class="FooterLink" href="/privacy">Terms Of Use</a>
          <a class="FooterLink" href="/disclosures">Disclosures</a>
        </div>

    </div>
  );
}

export default Footer;
