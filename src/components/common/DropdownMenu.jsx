// import { useState, useEffect, useRef } from 'react'
// import { Link } from 'react-router-dom'

// const DropdownMenu = ({ title, items }) => {
//   const [isOpen, setIsOpen] = useState(false)
//   const dropdownRef = useRef(null)
//   let timeoutId = null

//   // Hover logic
//   const handleMouseEnter = () => {
//     clearTimeout(timeoutId)
//     setIsOpen(true)
//   }

//   const handleMouseLeave = () => {
//     timeoutId = setTimeout(() => setIsOpen(false), 200)
//   }

//   // बाहेरील क्लिकवर बंद करणे
//   useEffect(() => {
//     const handleClickOutside = event => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsOpen(false)
//       }
//     }
//     document.addEventListener('mousedown', handleClickOutside)
//     return () => document.removeEventListener('mousedown', handleClickOutside)
//   }, [])

//   return (
//     <div
//       className='relative'
//       ref={dropdownRef}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       {/* मुख्य नेव्हिगेशन बटण */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className={`hover:text-red-700 font-bold py-4 flex items-center gap-1.5 uppercase text-[11px] tracking-[1px] transition-all duration-300 outline-none ${
//           isOpen ? 'text-red-700' : 'text-gray-700'
//         }`}
//       >
//         {title}
//         <span
//           className={`text-[8px] transition-transform duration-500 ${
//             isOpen ? 'rotate-180' : 'rotate-0'
//           }`}
//         >
//           ▼
//         </span>
//       </button>

//       {/* मेगा ड्रॉपडाऊन - ३ कॉलम्स */}
//       {isOpen && (
//         <div className='absolute left-[-150px] top-[100%] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 w-[950px] z-[100] rounded-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300'>
//           <div className='flex'>
//             {/* बाजूची रेड डिझाइन स्ट्रिप */}
//             <div className='w-1.5 bg-red-700'></div>

//             <div className='flex-1'>
//               {/* ड्रॉपडाऊन हेडर */}
//               <div className='flex justify-between items-center px-8 py-3.5 bg-gray-50/50 border-b border-gray-100'>
//                 <div className='flex items-center gap-2'>
//                   <span className='text-[11px] font-black text-gray-900 uppercase tracking-widest'>
//                     {title} Solutions
//                   </span>
//                   <span className='bg-red-100 text-red-700 text-[9px] px-2 py-0.5 rounded-full font-bold'>
//                     INDUSTRIAL
//                   </span>
//                 </div>
//                 <button
//                   onClick={() => setIsOpen(false)}
//                   className='w-6 h-6 flex items-center justify-center text-gray-400 hover:text-red-700 hover:bg-red-50 rounded-full transition-all'
//                 >
//                   ✕
//                 </button>
//               </div>

//               {/* ३ कॉलम्स ग्रिड - Height Control (gap-y आणि py) */}
//               <ul className='p-6 grid grid-cols-3 gap-x-6 gap-y-3'>
//                 {items.map((item, idx) => (
//                   <li key={idx}>
                    
//                     <Link
//                       to={item.link}
//                       onClick={() => setIsOpen(false)}
//                       className='group flex items-start px-4 py-3.5 text-gray-600 hover:text-red-700 text-[13px] font-semibold transition-all duration-200 rounded-lg hover:bg-red-50/50 border border-transparent hover:border-red-100/50'
//                     >
//                       {/* Red Dot */}
//                       <span className='w-1.5 h-1.5 bg-red-700 rounded-full mt-2 mr-3 flex-shrink-0'></span>

//                       {/* Text */}
//                       <span className='whitespace-nowrap'>{item.name}</span>
//                     </Link>
//                   </li>
//                 ))}
//               </ul>

//               {/* तळाची छोटी पट्टी (Footer) */}
//               <div className='bg-gray-50 px-8 py-2.5 text-right border-t border-gray-100'>
//                 <p className='text-[10px] text-gray-400 font-medium tracking-wide'>
//                   © I-NAX PRECISION TECHNOLOGY
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default DropdownMenu

import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';

const DropdownMenu = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const dropdownRef = useRef(null);
  let timeoutId = null;

  // Error check
  if (!items || !Array.isArray(items)) return null;

  const formatId = (name) =>
    name.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsOpen(false);
      setActiveCategory(0);
    }, 200);
  };

  return (
    <div 
      className="relative" 
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button 
        className={`flex items-center gap-1.5 py-6 px-2 text-[12px] font-bold uppercase tracking-widest transition-all outline-none ${
          isOpen ? 'text-[#b91c1c]' : 'text-gray-800'
        }`}
      >
        {title} 
        <ChevronDown size={14} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-[100%] flex z-[999] shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          
          {/* LEVEL 1: Categories */}
          <div className="w-[260px] bg-[#f9fafb] border border-gray-200 flex flex-col h-fit shrink-0">
            {items.map((section, idx) => (
              <div 
                key={idx}
                onMouseEnter={() => setActiveCategory(idx)}
                className={`relative flex items-center justify-between px-5 py-4 cursor-pointer text-[11px] font-black border-b border-gray-100 last:border-0 transition-colors ${
                  activeCategory === idx ? 'bg-white text-[#b91c1c] border-l-4 border-l-[#b91c1c]' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <span className="uppercase tracking-wider">{section.category}</span>
                <ChevronRight size={14} strokeWidth={3} className={activeCategory === idx ? 'text-[#b91c1c]' : 'text-gray-300'} />

                {/* LEVEL 2: Sub-Items */}
                {activeCategory === idx && section.subItems && (
                  <div className="absolute left-[258px] top-[-1px] min-w-[320px] bg-white border border-gray-200 shadow-2xl flex flex-col h-fit">
                    <div className="px-6 py-3 bg-gray-50 border-b border-gray-100">
                       <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Industrial Solutions</span>
                    </div>
                    {section.subItems.map((item, iIdx) => (
                      <Link 
                        key={iIdx}
                        to={`/machine/${formatId(item)}`}
                        onClick={() => setIsOpen(false)}
                        className="text-[12px] font-bold px-6 py-3.5 border-b border-gray-50 last:border-0 hover:text-white hover:bg-[#b91c1c] text-gray-700 transition-all duration-200"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
