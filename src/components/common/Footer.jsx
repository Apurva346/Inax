import React from 'react';
import { Facebook, Youtube, Instagram, X, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    { Icon: Facebook, link: "https://facebook.com" },
    // { Icon: X, link: "https://x.com" },
    // { Icon: Youtube, link: "https://youtube.com" },
    { Icon: Instagram, link: "https://instagram.com" }
  ];

  // मशीन नेव्हिगेशनसाठी नाव आणि त्याची URL लिंक मॅप केली आहे
  const productList = [
    'Multi Spindle Router Machine', 'Modern i-NAX™ CNC Lathe Machine',
    'i-NAX™ Vertical machine center', 'i-NAX™ Open Body Laser Cutting Machine',
    'i-NAX™ Closed Body Laser Cutting Machine', 'i-NAX™ Radial drilling machine',
    'i-NAX™ Milling machine', 'i-NAX™ Laser marking workstation design',
    'i-NAX™ Industrial press brake machine', 'i-NAX™ CNC Router with controller',
    'i-NAX™ CNC Router precision machinery', 'i-NAX™ CNC Router machine setup',
    'i-NAX™ CNC Milling machine showcase', 'I-KRAFT CNC Router System',
    'I-KRAFT 5-axis CNC Router & control', 'I-KRAFT 3D statue maker machine',
    'i-NAX™ Metal Lathe Machine'
  ].map(name => ({
    name,
    path: `/machine/${name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`
  }));

  // नेव्हिगेशन लिंक्स मॅपिंग
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About i-NAX', path: '/about' },
    { name: 'i-NAX Brand', path: '/all-machines' },
    { name: 'Why Choose i-NAX', path: '/why-choose-us' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <footer className="bg-gradient-to-b from-[#0b1224] to-[#0f172a] text-white pt-16 pb-8 mt-12 border-t-4 border-red-700">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* BRAND */}
          <div className="lg:col-span-4 space-y-8 bg-white/3 p-6 rounded-2xl border border-white/5">
            <div>
              <div className="flex items-center gap-4 mb-6 group">
                <Link to="/">
                  <img 
                    src="/himages/newlogo1.png"
                    alt="i-NAX Logo"
                    className="h-12 w-auto object-contain drop-shadow-[0_0_14px_rgba(255,255,255,0.15)] transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>

                <div className="flex flex-col border-l-2 pl-4 border-red-700/40">
                  <h1 className="text-2xl font-black italic leading-none">i-NAX™</h1>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-red-600 font-black mt-1">
                    Precision Industries
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-400 leading-relaxed font-medium">
                Advanced CNC & Precision Industrial Machinery designed for 
                High-Output Modern Manufacturing. Built for performance and reliability since 2012.
              </p>
            </div>

            {/* CONTACT CARD */}
            <div className="space-y-4 bg-white/5 p-6 rounded-xl border border-white/5">
              <h3 className="text-xs font-black uppercase tracking-widest text-red-600">Connect With Us</h3>
              
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-red-700 shrink-0" />
                <span className="text-xs text-gray-300">
                  Shop No.1, Nathuji, SPT market, Pise Complex, Plot No.27, Great Nag Rd, Sardar Patel Square, Rambagh, Nagpur, Maharashtra 440003.
                </span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-red-700 shrink-0" />
                <span className="text-xs text-gray-300">
                  New i-NAX™ Experience Center Coming Soon at:
                  Plot No.11 NASA Ground, Nehru Nagar, Nagpur - 440015
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-red-700 shrink-0" />
                <a href="tel:+919960846786" className="text-xs text-gray-300 hover:text-white transition-colors">
                  +91-9960846786 / 9226450455
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-red-700 shrink-0" />
                <a href="mailto:mechchemindia@gmail.com" className="text-xs text-gray-300 break-all hover:text-white transition-colors">
                  mechchemindia@gmail.com
                </a>
              </div>
            </div>

            {/* SOCIAL */}
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 text-gray-500">
                Follow Our Updates
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-red-700 p-2.5 rounded-xl transition-all duration-300 hover:scale-110"
                  >
                    <social.Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* NAVIGATION */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-black mb-8 uppercase tracking-widest border-l-4 border-red-700 pl-3">
              Navigation
            </h3>
            <ul className="space-y-4 text-xs font-bold text-gray-400">
              {navLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.path}
                        className="hover:text-red-500 flex items-center gap-2 transition-all group">
                    <ChevronRight size={12}
                      className="text-red-800 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* PRODUCTS / INDUSTRIAL SOLUTIONS */}
          <div className="lg:col-span-6">
            <h3 className="text-xs font-black mb-8 uppercase tracking-widest border-l-4 border-red-700 pl-3">
              Industrial Solutions
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-[11px] text-gray-400 mb-10">
              {productList.map((product, idx) => (
                <Link 
                  key={idx}
                  to={product.path}
                  className="flex items-center gap-2 border-b border-white/5 pb-1 hover:text-white transition-all hover:pl-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-red-700 rounded-full group-hover:bg-white transition-colors"></span>
                  {product.name}
                </Link>
              ))}
            </div>

            <div className="bg-red-700/10 p-5 rounded-xl border border-red-700/20">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-red-500 mb-3">
                Serving Industries
              </h4>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-[10px] font-black text-gray-300 uppercase">
                {['Automobile', 'Fabrication', 'Manufacturing', 'Engineering', 'MSMEs'].map(ind => (
                  <span key={ind}><span className="text-red-700">/</span> {ind}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">
          <p>
            &copy; {new Date().getFullYear()} <span className="text-red-700 italic">i-NAX™</span> Powered by 
            <span className="text-white"> Mech Chem Engineering Services</span>
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-white cursor-pointer transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white cursor-pointer transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;