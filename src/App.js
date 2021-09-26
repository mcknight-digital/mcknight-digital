import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './styles/styles.css';
import Home from './pages/Home.js';
import ComingSoon from './pages/ComingSoon.js';

function App() {
  return (
  <Router>
    <Switch>
      <Route exact path="/" >
        <Home/>
      </Route>
      <Route exact path="/offline">
        <ComingSoon/>
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
