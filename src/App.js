import './App.css';
import Navbar from './Navbar';
import About from './About';
import Services from './Services';
import Faq from './Faq';  
import Contact from './Contact';
import Footer from './Footer';
import Appointment from './Appointment';
import PriceList from './PriceList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Services />
      <PriceList />
      <Appointment />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
