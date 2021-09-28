import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './styles/styles.css';
import Home from './pages/Home.js';
import ComingSoon from './pages/ComingSoon.js';
import About from './pages/About.js';
import Disclosures from './pages/Disclosures.js';
import Menu from './pages/Menu.js'
import ServicesPage from './pages/OurServices.js';
import ContactPage from './pages/ContactPage.js';

function App() {
  return (
  <Router>
    <Switch>
      <Route exact path="/" >
        <Home/>
      </Route>
      <Route exact path="/menu">
        <Menu/>
      </Route>
      <Route exact path="/offline">
        <ComingSoon/>
      </Route>
      <Route exact path="/about">
        <About/>
      </Route>
      <Route exact path="/our-services">
        <ServicesPage/>
      </Route>
      <Route exact path="/contact-us">
        <ContactPage/>
      </Route>

      {/* PROJECTS & PORTFOLIO */}
      {/* PROJECT POST TEMPLATE */}
      {/* BLOG & GALLERY */}
      {/* BLOG POST TEMPLATE */}
      {/* SERVICES */}
      {/* CONTACT US */}

      {/* PRIVACY */}
      {/* TERMS OF USE */}




      <Route exact path="/disclosures">
        <Disclosures/>
      </Route>
    </Switch>
  </Router>
    // <div className="App">

    //   <Navbar/>
    //   <Home/>
    //   <Footer/>
    // </div>
  );
}

export default App;
