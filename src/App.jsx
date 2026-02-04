import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import MachineDetails from './components/pages/MachineDetails';
import WhatsAppFloat from './components/common/WhatsAppFloat';
import Inax from './components/pages/Inax';
import Footer from './components/common/Footer';
import AllMachines from './components/pages/AllMachines';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar /> 
        
        {/* flex-grow मुळे कंटेंट कमी असेल तरी फुटर खालीच राहील */}
        <main className="flex bg-white">
          <Routes>
            
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/machine/:id" element={<MachineDetails />} />
            <Route path="/all-machines" element={<AllMachines />} />
            <Route path="/" element={<Inax />} />
          </Routes>
        </main>
        <WhatsAppFloat />
        <Footer />
      </div>
    </Router>
  );
}

export default App;