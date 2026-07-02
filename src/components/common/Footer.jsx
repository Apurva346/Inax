import React, { useState } from 'react';
import { Facebook, Youtube, Instagram, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  // अकॉर्डियन ओपन/क्लोज मॅनेज करण्यासाठी स्टेट
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (idx) => {
    setOpenCategory(openCategory === idx ? null : idx);
  };

  const socialLinks = [
    { Icon: Facebook, link: 'https://www.facebook.com/inaxlaser' },
    { Icon: Youtube, link: 'https://www.youtube.com/@inaxlaser' },
    { Icon: Instagram, link: 'https://www.instagram.com/mechchemengineeringservices' }
  ];

  // ५ मुख्य कॅटेगरीज आणि त्यांच्या मशिन्सची यादी
  const fabrication = [
    {
      category: 'Laser Machines',
      subItems: [
        'Fiber Laser Cutting Machine',
        'Closed Body Fiber Laser Cutting Machine',
        'Open Body Fiber Laser Cutting Machine',
        'CNC Laser Pipe & Tube Cutting Machine',
        'CO₂ Laser Cutting Machine',
        'Crystal Laser Cutting Machine',
        'Laser Marking Workstation Design Machine'
      ]
    },
    {
      category: 'Sheet Metal & Bending',
      subItems: ['CNC Press Brake Machine', 'CNC Shearing Machine']
    },
    {
      category: 'CNC Router Machines',
      subItems: [
        'CNC Router Machine',
        'Multi Spindle CNC Router Machine',
        '5-Axis CNC Router Machine',
        '3D Statue Maker CNC Router Machine'
      ]
    },
    {
      category: 'CNC Machining & Lathes',
      subItems: [
        'Vertical Machining Center',
        'VMC with Tinted Windows',
        'CNC Lathe Machine',
        'Metal Lathe Machine'
      ]
    },
    {
      category: 'Other CNC Solutions',
      subItems: [
        'CNC Milling Machine',
        'Conventional Milling Machine',
        'CNC Plasma Cutting Machine',
        'CNC Engraving Machine'
      ]
    }
  ];

  // अचूक नेव्हिगेशन सिक्वेन्स
  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'MACHINES', path: '/all-machines' },
    { name: 'ABOUT i-NAX™', path: '/about' },
    { name: 'WHY CHOOSE i-NAX™', path: '/why-choose-us' },
    { name: 'CONTACT US', path: '/contact' }
  ];

  // मशीनच्या नावावरून अचूक URL स्लग बनवणारा फंक्शन
  const getMachinePath = (name) => {
    return `/machine/${name.toLowerCase().replace(/™/g, '').replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`;
  };

  return (
    <footer className="bg-[#0b1224] text-white pt-10 pb-5 border-t-4 border-red-700 mt-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-900/10 blur-[100px] -mr-48 -mt-48 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* BRAND & CONTACT */}
          <div className="lg:col-span-4 space-y-10">
            <div>
              <div className="flex items-center gap-4 mb-8 group">
                <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                  <img 
                    src="/himages/inax-logo4.png"
                    alt="i-NAX Logo"
                    className="h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
                <div className="flex flex-col border-l-2 pl-4 border-red-700/40">
                  <h1 className="text-3xl font-black italic leading-none tracking-tighter">i-NAX™</h1>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-red-600 font-black mt-1">
                    Precision Industries
                  </p>
                </div>
              </div>

              <p className="text-[13px] text-gray-400 leading-relaxed font-medium">
                <span className="text-white font-bold">i-NAX™</span> — Advanced Fiber Laser & CNC Engineering Solutions <br/>
                A Brand by <a
                    href='https://www.mechchemindia.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-red-600 hover:text-red-700 underline font-semibold cursor-pointer transition-colors'
                  >
                    Mech Chem Engineering Services
                  </a> | Established in 2012
                <br/><br/>
                i-NAX™ delivers advanced Fiber Laser Cutting, Laser Marking, and CNC machine solutions designed to support modern manufacturing industries across Nagpur and throughout India.
              </p>
            </div>

            {/* CONTACT CARD */}
            <div className="space-y-6 bg-white/5 p-8 rounded-2xl border border-white/5 backdrop-blur-sm">
              <h3 className="text-[11px] font-black uppercase tracking-widest text-red-600 mb-2">Connect With Us</h3>
              
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-red-700 shrink-0 mt-1" />
                <span className="text-[12px] text-gray-300 leading-snug">
                  Plot No.27, shop No. 1, Nathuji Pise Complex, SPT Market, Great Nag Road, Nagpur-440003, Maharashtra.
                </span>
              </div>

              <div className="flex items-start gap-4 border-t border-white/5 pt-4">
                <MapPin size={20} className="text-red-700 shrink-0 mt-1" />
                <span className="text-[12px] text-gray-300 leading-snug">
                  <span className="text-red-500 font-bold block mb-1">New i-NAX™ Experience Center coming soon at:</span>
                  Plot No.11 NASA Ground, Nehru Nagar, Nagpur - 440015
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-red-700 shrink-0" />
                  <a href="tel:+919960846786" className="text-[12px] font-bold text-gray-300 hover:text-white transition-colors tracking-tight">
                    +91-9960846786
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-red-700 shrink-0" />
                  <a href="tel:+919226450455" className="text-[12px] font-bold text-gray-300 hover:text-white transition-colors tracking-tight">
                    +91-9226450455
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-red-700 shrink-0" />
                  <a href="mailto:mechchemindia@gmail.com" className="text-[11px] font-medium text-gray-300 hover:text-white">
                    mechchemindia@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* NAVIGATION */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-black mb-10 uppercase tracking-widest flex items-center gap-3">
              <span className="w-8 h-[2px] bg-red-700"></span> Navigation
            </h3>
            <ul className="space-y-5 text-[13px] font-bold text-gray-400">
              {navLinks.map(link => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    onClick={() => window.scrollTo(0, 0)}
                    className="hover:text-red-500 flex items-center gap-2 transition-all group"
                  >
                    <ChevronRight size={14} className="text-red-800 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* INDUSTRIAL SOLUTIONS (COMPACT ACCORDION DESIGN) */}
          <div className="lg:col-span-6">
            <h3 className="text-xs font-black mb-6 uppercase tracking-widest flex items-center gap-3">
              <span className="w-8 h-[2px] bg-red-700"></span> Industrial Solutions
            </h3>

            {/* ५ कॅटेगरीजची अकॉर्डियन लिस्ट */}
            <div className="space-y-3 mb-10">
              {fabrication.map((group, idx) => {
                const isOpen = openCategory === idx;
                return (
                  <div key={idx} className="border border-white/5 bg-white/[0.02] rounded-xl overflow-hidden transition-all duration-300">
                    
                    {/* कॅटेगरी हेडिंग क्लिकेबल बटन */}
                    <button
                      onClick={() => toggleCategory(idx)}
                      className="w-full flex items-center justify-between px-5 py-3.5 text-left text-[11px] font-black uppercase tracking-wider text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300"
                    >
                      <span className={isOpen ? "text-red-500 transition-colors" : ""}>
                        {group.category}
                      </span>
                      <ChevronRight 
                        size={14} 
                        className={`text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-90 text-red-500' : ''}`} 
                      />
                    </button>

                    {/* मशिन्सचे प्रकार (फक्त क्लिक केल्यावर ओपन होणार) */}
                    <div 
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        isOpen ? 'max-h-[500px] border-t border-white/5 p-5 bg-[#080d1a]' : 'max-h-0'
                      }`}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2.5 text-[11px] text-gray-400">
                        {group.subItems.map((item, itemIdx) => (
                          <Link
                            key={itemIdx}
                            to={getMachinePath(item)}
                            onClick={() => window.scrollTo(0, 0)}
                            className="flex items-center gap-2.5 hover:text-white transition-all hover:pl-1.5 group"
                          >
                            <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-red-500 transition-colors"></span>
                            {item}
                          </Link>
                        ))}
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>

            {/* Serving Industries Box */}
            <div className="bg-red-700/5 p-6 rounded-2xl border border-red-700/10">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-red-500 mb-4 text-center md:text-left">
                Serving Industries
              </h4>
              <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-3 text-[10px] font-black text-gray-400 uppercase">
                {['Automobile', 'Fabrication', 'Manufacturing', 'Engineering', 'MSMEs'].map(ind => (
                  <span key={ind} className="flex items-center gap-2">
                    <span className="text-red-700">/</span> {ind}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* COPYRIGHT & SOCIALS */}
        <div className="border-t border-white/5 mt-10 pt-5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} <span className="text-red-700 italic">i-NAX™</span> Powered by 
            <span className="text-white ml-2 underline underline-offset-4 decoration-red-700/50">Mech Chem Engineering Services</span>
          </div>
          
          <div className="flex items-center gap-8">
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 hover:bg-red-700 p-3 rounded-full transition-all duration-300 hover:-translate-y-1 text-gray-300 hover:text-white shadow-xl"
                >
                  <social.Icon size={18} />
                </a>
              ))}
            </div>
            <div className="hidden sm:flex gap-6 text-[10px] font-black uppercase tracking-widest text-gray-500 border-l border-white/10 pl-8">
              <Link to="/privacy-policy" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors">Privacy</Link>
              <Link to="/terms" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;