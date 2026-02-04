

// import React from 'react';
// import { Facebook, Youtube, Instagram, X, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';

// const Footer = () => {
//   const socialLinks = [
//     { Icon: Facebook, link: "https://facebook.com" },
//     { Icon: X, link: "https://x.com" },
//     { Icon: Youtube, link: "https://youtube.com" },
//     { Icon: Instagram, link: "https://instagram.com" }
//   ];

//   const productList = [
//     "Multi-Spindle Router Machine", "Modern I-NAX CNC Lathe", "Laser Machine (2)", 
//     "I-NAX VMC Tinted", "I-NAX Vertical Machining", "I-NAX Radial Drilling", 
//     "I-NAX Milling Machine", "I-NAX Laser Marking", "I-NAX Press Brake", 
//     "I-NAX CNC Router Controller", "I-NAX CNC Router Precision", "I-NAX CNC Router Setup", 
//     "I-NAX CNC Milling Showcase", "I-KRAFT CNC Router System", "I-KRAFT 5-axis CNC Router",
//     "I-KRAFT 3D Statue Maker", "Closed Body Laser"
//   ];

//   return (
//     <footer className="bg-[#0f172a] text-white pt-16 pb-8 mt-12 border-t-4 border-red-700">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
//           {/* 1. BRAND LOGO SECTION (Updated from MECH CHEM to i-NAX) */}
//           <div className="lg:col-span-4 space-y-8">
//             <div>
//               <div className="flex items-center gap-4 mb-6 group">
//                 {/* i-NAX Logo Image */}
//                 <div className="bg-white p-2 rounded-lg shadow-xl">
//                    <img 
//                       src="/images/logo.png" 
//                       alt="i-NAX Logo" 
//                       className="h-12 w-auto object-contain transition-transform group-hover:scale-105 duration-500" 
//                    />
//                 </div>
//                 {/* i-NAX Text Branding */}
//                 <div className="flex flex-col border-l-2 pl-4 border-red-700/40">
//                    <h1 className="text-2xl font-black tracking-tighter leading-none text-white italic">i-NAX™</h1>
//                    <p className="text-[9px] uppercase tracking-[0.3em] text-red-600 font-black mt-1">Precision Industries</p>
//                 </div>
//               </div>
              
//               <p className="text-sm text-gray-400 leading-relaxed font-medium">
//                 Advanced CNC & Precision Industrial Machinery designed for 
//                 High-Output Modern Manufacturing. Built for performance and reliability since 2012.
//               </p>
//             </div>

//             {/* Contact Details Card */}
//             <div className="space-y-4 bg-white/5 p-6 rounded-xl border border-white/5">
//               <h3 className="text-xs font-black uppercase tracking-widest text-red-600 mb-2">Connect With Us</h3>
//               <div className="flex items-start gap-3 group">
//                 <MapPin size={18} className="text-red-700 shrink-0 group-hover:scale-110 transition-transform" />
//                 <span className="text-xs text-gray-300 font-medium leading-relaxed">Plot No.11 NASA Ground, Nehru Nagar, Nagpur - 440015</span>
//               </div>
//               <div className="flex items-center gap-3 group">
//                 <Phone size={18} className="text-red-700 shrink-0 group-hover:scale-110 transition-transform" />
//                 <span className="text-xs text-gray-300 font-medium">+91-9960846786 / 9226450455</span>
//               </div>
//               <div className="flex items-center gap-3 group">
//                 <Mail size={18} className="text-red-700 shrink-0 group-hover:scale-110 transition-transform" />
//                 <span className="text-xs text-gray-300 font-medium break-all">mechchemindia@gmail.com</span>
//               </div>
//             </div>

//             {/* Social Icons */}
//             <div className="pt-2">
//               <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 text-gray-500">Follow Our Updates</h4>
//               <div className="flex gap-3">
//                 {socialLinks.map((social, index) => (
//                   <a key={index} href={social.link} className="bg-white/10 hover:bg-red-700 p-2.5 rounded-lg transition-all duration-300 group">
//                     <social.Icon size={16} className="group-hover:rotate-12 transition-transform" />
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* 2. NAVIGATION LINKS */}
//           <div className="lg:col-span-2">
//             <h3 className="text-xs font-black mb-8 uppercase tracking-widest text-white border-l-4 border-red-700 pl-3">Navigation</h3>
//             <ul className="space-y-4 text-xs font-bold text-gray-400">
//               {['Home', 'About Us', 'i-NAX Brand', 'Services', 'Contact Us'].map((item) => (
//                 <li key={item}>
//                   <a href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-red-500 flex items-center gap-2 transition-all group">
//                     <ChevronRight size={12} className="text-red-800 opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* 3. PRODUCT GRID */}
//           <div className="lg:col-span-6">
//             <h3 className="text-xs font-black mb-8 uppercase tracking-widest text-white border-l-4 border-red-700 pl-3">Industrial Solutions</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-[11px] font-medium text-gray-400 mb-10">
//               {productList.map((product, idx) => (
//                 <div key={idx} className="flex items-center gap-2 hover:text-white transition-colors cursor-default border-b border-white/5 pb-1 group">
//                    <span className="w-1.5 h-1.5 bg-red-900 rounded-full group-hover:bg-red-600 transition-colors"></span>
//                    {product}
//                 </div>
//               ))}
//             </div>

//             {/* Serving Industries */}
//             <div className="bg-red-700/10 p-5 rounded-xl border border-red-700/20">
//               <h4 className="text-[10px] font-black uppercase tracking-widest text-red-500 mb-3">Serving Industries</h4>
//               <div className="flex flex-wrap gap-x-6 gap-y-2 text-[10px] font-black text-gray-300 uppercase tracking-tighter">
//                 {['Automobile', 'Fabrication', 'Manufacturing', 'Engineering', 'MSMEs'].map((ind) => (
//                   <span key={ind} className="flex items-center gap-2">
//                     <span className="text-red-700">/</span> {ind}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>

//         </div>

//         {/* BOTTOM COPYRIGHT BAR */}
//         <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">
//           <p>&copy; {new Date().getFullYear()} <span className="text-white">Mech Chem Engineering Services</span>. Powered by <span className="text-red-700 italic">i-NAX™</span></p>
//           <div className="flex gap-6">
//             <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
//             <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import { Facebook, Youtube, Instagram, X, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { Icon: Facebook, link: "https://facebook.com" },
    { Icon: X, link: "https://x.com" },
    { Icon: Youtube, link: "https://youtube.com" },
    { Icon: Instagram, link: "https://instagram.com" }
  ];

  const productList = [
    "Multi-Spindle Router Machine", "Modern I-NAX CNC Lathe", "Laser Machine (2)", 
    "I-NAX VMC Tinted", "I-NAX Vertical Machining", "I-NAX Radial Drilling", 
    "I-NAX Milling Machine", "I-NAX Laser Marking", "I-NAX Press Brake", 
    "I-NAX CNC Router Controller", "I-NAX CNC Router Precision", "I-NAX CNC Router Setup", 
    "I-NAX CNC Milling Showcase", "I-KRAFT CNC Router System", "I-KRAFT 5-axis CNC Router",
    "I-KRAFT 3D Statue Maker", "Closed Body Laser"
  ];

  return (
    <footer className="bg-gradient-to-b from-[#0b1224] to-[#0f172a] text-white pt-16 pb-8 mt-12 border-t-4 border-red-700">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* BRAND */}
          <div className="lg:col-span-4 space-y-8 bg-white/3 p-6 rounded-2xl border border-white/5">
            <div>
              <div className="flex items-center gap-4 mb-6 group">
                
                {/* TRANSPARENT LOGO */}
                <img 
                  src="/images/logo.png"
                  alt="i-NAX Logo"
                  className="h-12 w-auto object-contain 
                             drop-shadow-[0_0_14px_rgba(255,255,255,0.15)]
                             transition-transform duration-500 group-hover:scale-105"
                />

                {/* BRAND TEXT */}
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
                  Plot No.11 NASA Ground, Nehru Nagar, Nagpur - 440015
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-red-700 shrink-0" />
                <span className="text-xs text-gray-300">+91-9960846786 / 9226450455</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-red-700 shrink-0" />
                <span className="text-xs text-gray-300 break-all">mechchemindia@gmail.com</span>
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
                    className="bg-white/10 hover:bg-red-700 p-2.5 rounded-xl 
                               transition-all duration-300 hover:scale-110"
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
              {['Home', 'About Us', 'i-NAX Brand', 'Services', 'Contact Us'].map(item => (
                <li key={item}>
                  <a href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                     className="hover:text-red-500 flex items-center gap-2 transition-all group">
                    <ChevronRight size={12}
                      className="text-red-800 opacity-0 group-hover:opacity-100 
                                 -ml-4 group-hover:ml-0 transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* PRODUCTS */}
          <div className="lg:col-span-6">
            <h3 className="text-xs font-black mb-8 uppercase tracking-widest border-l-4 border-red-700 pl-3">
              Industrial Solutions
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-[11px] text-gray-400 mb-10">
              {productList.map((product, idx) => (
                <div key={idx}
                     className="flex items-center gap-2 border-b border-white/5 pb-1
                                hover:text-white transition-all hover:pl-1">
                  <span className="w-1.5 h-1.5 bg-red-700 rounded-full"></span>
                  {product}
                </div>
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
            &copy; {new Date().getFullYear()} <span className="text-white">Mech Chem Engineering Services</span>.
            Powered by <span className="text-red-700 italic">i-NAX™</span>
          </p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
