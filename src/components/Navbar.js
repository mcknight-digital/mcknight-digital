import '../styles/styles.css';
import logo from '../images/typemark-blue.png';

function Navbar() {

  return (
    <div className="Navbar">
      <a href="/">
        <img src={logo} alt="McKnight Digital"/>
      </a>
        <a class="MenuLink" href="/menu">
          Menu
        </a>
    </div>
  );
}

export default Navbar;
