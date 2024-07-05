import Banner from './components/Banner';
import SideNav from './components/SideNav';
import Features from './components/Features';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Banner />
      <SideNav />
      <Features />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;