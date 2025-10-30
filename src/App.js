import './App.css';
import Navbar from './Navbar';
import About from './components/About';
import Services from './Services';
import Faq from './Faq';  
import Contact from './Contact';
import Footer from './Footer';
import Appointment from './Appointment';
import PriceList from './PriceList';
import Carousel from './components/carousel';
import Stats from './components/Stats'; 
import Testimonials from './components/Testimonials';
import Consultation from './components/Consultation';


function App() {
  return (
    <div className="App">
      <Navbar />
      

      <Carousel />
      <Stats />
      <About />
      <Services />
      <Consultation />
      <PriceList />
      <Testimonials />
      <Appointment />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
