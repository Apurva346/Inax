// import { Search, Mail, Facebook, Youtube, Instagram, X } from 'lucide-react';

// const TopHeader = () => {
//   return (
//     <div className="bg-[#b91c1c] text-white py-2 hidden md:block">
//       <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        
//         {/* Left: Search Bar */}
//         <div className="flex items-center bg-white/10 rounded-full px-4 py-1 border border-white/20">
//           <input 
//             type="text" 
//             placeholder="Search Machines..." 
//             className="bg-transparent outline-none placeholder:text-white/60 w-48 text-sm" 
//           />
//           <Search size={16} className="text-white/80 cursor-pointer" />
//         </div>

//         {/* Right Section: Social Icons & Email */}
//         <div className="flex items-center gap-6">
          
//           {/* Social Icons with Circular Background */}
//           <div className="flex items-center gap-3">
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
//                 className="bg-white/20 hover:bg-white/40 p-2 rounded-full transition-all duration-300"
//               >
//                 <social.Icon size={16} strokeWidth={2.5} />
//               </a>
//             ))}
//           </div>

//           {/* Vertical Divider */}
//           <div className="h-6 w-px bg-white/20"></div>

//           {/* Email Section with Icon */}
//           <a 
//             href="mailto:inquiry@mechchemindia.com" 
//             className="flex items-center gap-3 group"
//           >
//             <div className="bg-white/20 group-hover:bg-white/40 p-2 rounded-full transition-all">
//               <Mail size={16} strokeWidth={2.5} />
//             </div>
//             <span className="text-sm font-medium tracking-wide">
//               mechchemindia@gmail.com
//             </span>
//           </a>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default TopHeader;


import { Search, Mail, Facebook, Youtube, Instagram, X } from 'lucide-react';

const TopHeader = () => {
  return (
    <div className="bg-[#0f172a] text-white py-2.5 hidden md:block border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Left: Professional Search Bar */}
        <div className="flex items-center bg-white/5 hover:bg-white/10 rounded-md px-3 py-1.5 border border-white/10 transition-all group">
          <input 
            type="text" 
            placeholder="Search Machinery..." 
            className="bg-transparent outline-none placeholder:text-gray-400 w-56 text-xs font-medium tracking-wide" 
          />
          <Search size={14} className="text-gray-400 group-hover:text-red-500 transition-colors cursor-pointer" />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-8">
          
          {/* Email Section */}
          <a href="mailto:mechchemindia@gmail.com" className="flex items-center gap-2.5 group">
            <Mail size={14} className="text-red-600 group-hover:scale-110 transition-transform" />
            <span className="text-[11px] font-bold tracking-widest text-gray-300 group-hover:text-white transition-colors uppercase">
              mechchemindia@gmail.com
            </span>
          </a>

          {/* Social Icons */}
          <div className="flex items-center gap-4 border-l border-white/10 pl-8">
            {[
              { Icon: Facebook, link: "https://facebook.com" },
              { Icon: X, link: "https://x.com" },
              { Icon: Youtube, link: "https://youtube.com" },
              { Icon: Instagram, link: "https://instagram.com" }
            ].map((social, index) => (
              <a 
                key={index}
                href={social.link} 
                target="_blank" 
                rel="noreferrer" 
                className="text-gray-400 hover:text-white transition-all duration-300"
              >
                <social.Icon size={15} strokeWidth={2} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;