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



