


// import { Search, Mail, Facebook, Youtube, Instagram, X } from 'lucide-react';

// const TopHeader = () => {
//   return (
//     <div className="bg-[#0f172a] text-white py-2.5 hidden md:block border-b border-white/5">
//       <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        

//         {/* Right Section */}
//         <div className="flex items-center gap-8">
          
//           {/* Email Section */}
//           <a href="mailto:mechchemindia@gmail.com" className="flex items-center gap-2.5 group">
//             <Mail size={14} className="text-red-600 group-hover:scale-110 transition-transform" />
//             <span className="text-[11px] font-bold tracking-widest text-gray-300 group-hover:text-white transition-colors uppercase">
//               mechchemindia@gmail.com
//             </span>
//           </a>

//           {/* Social Icons */}
//           <div className="flex items-center gap-4 border-l border-white/10 pl-8">
//             {[
//               { Icon: Facebook, link: "https://facebook.com" },
//               { Icon: X, link: "https://x.com" },
//               { Icon: Youtube, link: "https://youtube.com" },
//               { Icon: Instagram, link: "https://instagram.com" }
//             ].map((social, index) => (
//               <a 
//                 key={index}
//                 href={social.link} 
//                 target="_blank" 
//                 rel="noreferrer" 
//                 className="text-gray-400 hover:text-white transition-all duration-300"
//               >
//                 <social.Icon size={15} strokeWidth={2} />
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TopHeader;


import { Mail, Facebook, Youtube, Instagram, X, Phone } from 'lucide-react';

const TopHeader = () => {
  return (
    <div className="bg-slate-900 text-white py-2 hidden md:block border-b border-white/10">
      <div className="w-full px-8 flex justify-between items-center">
        
        {/* Left Section: Mobile Numbers (Replacing Search Bar) */}
        <div className="pl-7 flex items-center gap-4 text-xs font-semibold tracking-wide text-white/80">
          <div className="flex items-center gap-1.5 group">
            <Phone size={13} className="text-orange-500" />
            <a href="tel:+919960846786" className="hover:text-orange-500 hover:underline transition-colors">
              +91-9960846786
            </a>
          </div>
          
          
        </div>

        {/* Right Section: Social Icons & Email */}
        <div className="flex items-center gap-6">
          
          {/* Social Media Links */}
          <div className="flex items-center gap-3">
            {[
              { Icon: Facebook, link: "https://www.facebook.com/MechChemEngineeringServices" },
              { Icon: X, link: "https://x.com/inaxlaser" },
              { Icon: Youtube, link: "https://m.youtube.com/@inaxlaser" },
              { Icon: Instagram, link: "https://www.instagram.com/inaxlaser" }
            ].map((social, index) => (
              <a 
                key={index}
                href={social.link} 
                target="_blank" 
                rel="noreferrer" 
                className="text-white/70 hover:text-orange-500 transition-all duration-300"
              >
                <social.Icon size={16} strokeWidth={2} />
              </a>
            ))}
          </div>

          <div className="h-6 w-px bg-white/20"></div>

          {/* Email Link */}
          <a href="mailto:mechchemindia@gmail.com" className="flex items-center gap-2 group">
            <Mail size={14} className="text-orange-500" />
            <span className="text-sm font-medium tracking-wide text-white/80 group-hover:text-white transition-colors">
              mechchemindia@gmail.com
            </span>
          </a>

        </div>
      </div>
    </div>
  );
};

export default TopHeader;
