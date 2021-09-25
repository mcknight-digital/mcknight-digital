import './styles/styles.css';
import Navbar from './components/Navbar.js';
import Home from './pages/Home.js';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
