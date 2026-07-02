import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import MachineDetails from './components/pages/MachineDetails';
import WhatsAppFloat from './components/common/WhatsAppFloat';
import Inax from './components/pages/Inax';
import Footer from './components/common/Footer';
import AllMachines from './components/pages/AllMachines';
import WhyChooseUs from './components/pages/WhyChooseUs';
import ScrollToTop from './ScrollToTop';
import Blogs from './components/pages/Blogs';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar /> 
        <ScrollToTop />
        
        
        <main className="flex bg-white">
          <Routes>
            
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/machine/:id" element={<MachineDetails />} />
            <Route path="/all-machines" element={<AllMachines />} />
            <Route path="/" element={<Inax />} />
            <Route path="/why-choose-us" element={<WhyChooseUs />} />
            {/* <Route path="/blogs" element={<Blogs />} /> */}
          </Routes>
        </main>
        <WhatsAppFloat />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// import Navbar from './components/common/Navbar';
// import About from './components/pages/About';
// import Contact from './components/pages/Contact';
// import MachineDetails from './components/pages/MachineDetails';
// import WhatsAppFloat from './components/common/WhatsAppFloat';
// import Inax from './components/pages/Inax';
// import Footer from './components/common/Footer';
// import AllMachines from './components/pages/AllMachines';
// import WhyChooseUs from './components/pages/WhyChooseUs';
// import ScrollToTop from './ScrollToTop';

// function App() {
//   return (
//     <Router>
//       <ScrollToTop />
      
//       {/* मुख्य कंटेनर जो नॅव्हबार आणि फुटरला उभ्या रचनेत ठेवेल */}
//       <div className="flex flex-col min-h-screen bg-white">
        
//         {/* नॅव्हबार नेहमी वर राहील */}
//         <Navbar /> 
        
//         {/* मुख्य भाग: इथून सर्व चुकीचे फ्लेक्स क्लासेस काढले आहेत जे नॅव्हबारला बाहेर ढकलत होते */}
//         <main className="flex-1 w-full block">
//           <Routes>
//             {/* होम पेजसाठी अचूक पाथ */}
//             <Route index element={<Inax />} /> 
//             <Route path="/" element={<Inax />} />
            
//             {/* इतर स्वतंत्र पेजेस */}
//             <Route path="/about" element={<About />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/machine/:id" element={<MachineDetails />} />
//             <Route path="/all-machines" element={<AllMachines />} />
//             <Route path="/why-choose-us" element={<WhyChooseUs />} />
//           </Routes>
//         </main>

//         {/* फ्लोटिंग घटक आणि फुटर */}
//         <WhatsAppFloat />
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;