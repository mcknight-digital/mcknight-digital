import '../styles/styles.css';
import AboutContentSection from '../components/AboutContentSection';
import ServiceAreas from '../components/ServiceAreas';

function Home() {
  return (
    <div className="App">
        <AboutContentSection/>
        <ServiceAreas/>
    </div>
  );
}

export default Home;
