import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { machinesData } from '../data/machinesData'
import { ChevronDown, ChevronRight } from 'lucide-react'

const AllMachines = () => {
  
  const getAllMachines = () => {
    let allItems = [];
    Object.keys(machinesData).forEach(categoryKey => {
      const category = machinesData[categoryKey];
      if (category.items && Array.isArray(category.items)) {
        allItems = [...allItems, ...category.items];
      }
      if (category.subcategories) {
        Object.keys(category.subcategories).forEach(subKey => {
          const subcategory = category.subcategories[subKey];
          if (subcategory.items && Array.isArray(subcategory.items)) {
            allItems = [...allItems, ...subcategory.items];
          }
        });
      }
    });
    return allItems;
  };

  // २. साईडबारमधील कॅटेगरीज मॅनेज करण्यासाठी स्टेट (No Change)
  const [openCategories, setOpenCategories] = useState({
    'laser-machines': true,
  });

  const toggleCategory = (key) => {
    setOpenCategories(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className='bg-slate-50 min-h-screen'>
      {/* फिक्स १: items-start जोडले आहे, ज्यामुळे साईडबार फुटर येताच थांबेल आणि खाली जाणार नाही */}
      <div className='flex flex-col lg:flex-row min-h-screen relative items-start'>
        
        {/* LEFT SIDEBAR - FULLY STICKY */}
        {/* फिक्स २: w-full lg:w-80 सोबत lg:h-screen आणि overflow-y-auto दिला आहे जेणेकरून स्क्रोलिंग जागेवरच होईल */}
        <aside className='w-full lg:w-80 bg-[#1f2937] text-white lg:sticky lg:top-0 lg:h-screen overflow-y-auto border-r border-white/10 z-40 shrink-0'>
          <div className='p-6'>
            <h2 className='text-sm font-black uppercase tracking-[0.2em] mb-6 border-b border-white/10 pb-3 text-gray-400'>
              Machine Categories
            </h2>

            <div className='space-y-3'>
              {Object.keys(machinesData).map(categoryKey => {
                const category = machinesData[categoryKey];
                const isOpen = openCategories[categoryKey];
                
                const machineItems = category.items || 
                  (category.subcategories ? Object.values(category.subcategories).flatMap(sub => sub.items || []) : []);

                if (machineItems.length === 0) return null;

                return (
                  <div key={categoryKey} className='border-b border-white/5 pb-2 last:border-0'>
                    <button
                      onClick={() => toggleCategory(categoryKey)}
                      className='flex items-center justify-between w-full px-2 py-2 text-left text-[12px] font-black uppercase tracking-wider text-gray-300 hover:text-white transition-colors group'
                    >
                      <span className='group-hover:translate-x-1 transition-transform duration-200'>
                        {category.title || category.name}
                      </span>
                      {isOpen ? (
                        <ChevronDown size={16} className='text-red-500' />
                      ) : (
                        <ChevronRight size={16} className='text-gray-500 group-hover:text-gray-300' />
                      )}
                    </button>

                    {isOpen && (
                      <ul className='mt-1 ml-3 pl-2 border-l border-red-600/30 space-y-1'>
                        {machineItems.map(machine => (
                          <li key={machine.id}>
                            <Link
                              to={`/machine/${machine.id}`}
                              className='group flex items-center gap-2 px-2 py-1.5 rounded hover:bg-white/5 transition-all duration-150'
                            >
                              <div className='w-1 h-1 bg-red-600 rounded-full group-hover:scale-150 transition-transform'></div>
                              <span className='text-[11px] font-semibold text-gray-400 group-hover:text-white uppercase tracking-wide truncate'>
                                {machine.name}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </aside>

        {/* RIGHT CONTENT AREA */}
        <main className='flex-1 bg-white w-full'>
          <div className='py-16 px-6 md:px-12 lg:px-16'>
            
            {/* Page Main Header */}
            <div className='mb-20'>
              <h2 className='text-red-700 font-bold tracking-[5px] uppercase text-[12px] mb-3'>
                Industrial Precision
              </h2>
              <h1 className='text-4xl md:text-6xl font-black text-[#0f172a] uppercase tracking-tighter leading-none'>
                i-NAX <br />{' '}
                <span className='text-gray-300'>Engineering Collection</span>
              </h1>
              <div className='w-24 h-2 bg-red-700 mt-6'></div>
            </div>

            {/* मशिन्स ग्रिड लिस्ट */}
            <div className='space-y-24'>
              {Object.keys(machinesData).map(categoryKey => {
                const category = machinesData[categoryKey];
                const machineItems = category.items || 
                  (category.subcategories ? Object.values(category.subcategories).flatMap(sub => sub.items || []) : []);

                if (machineItems.length === 0) return null;

                return (
                  <div key={categoryKey} className='border-b border-gray-100 pb-16 last:border-0 last:pb-0'>
                    
                    <div className='flex items-center gap-4 mb-10'>
                      <h2 className='text-4xl font-black text-red-900 uppercase tracking-tight whitespace-nowrap'>
                        {category.title || category.name}
                      </h2>
                      <div className='w-full h-[1px] bg-gray-200'></div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10'>
                      {machineItems.map(machine => (
                        <div
                          key={machine.id}
                          className='group relative bg-[#f8fafc] rounded-3xl overflow-hidden border border-gray-100 flex flex-col h-full hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500'
                        >
                          <div className='relative h-72 overflow-hidden flex items-center justify-center p-10 bg-white group-hover:bg-gray-50 transition-colors duration-500'>
                            <img
                              src={machine.image}
                              alt={machine.name}
                              className='max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-in-out'
                            />
                            <div className='absolute top-6 left-6'>
                              <span className='bg-[#0f172a] text-white text-[8px] font-black px-3 py-1 uppercase tracking-widest'>
                                Premium
                              </span>
                            </div>
                          </div>

                          <div className='p-8 flex flex-col flex-grow'>
                            <h3 className='text-2xl font-black text-[#0f172a] mb-4 uppercase tracking-tighter group-hover:text-red-700 transition-colors leading-tight'>
                              {machine.name}
                            </h3>
                            <p className='text-gray-500 text-sm leading-relaxed mb-8 line-clamp-2 font-medium'>
                              {machine.description}
                            </p>

                            <div className='mt-auto'>
                              <Link
                                to={`/machine/${machine.id}`}
                                className='group/btn flex items-center justify-between w-full p-5 bg-[#0f172a] hover:bg-red-700 text-white rounded-xl transition-all duration-300 shadow-xl'
                              >
                                <span className='text-[10px] font-black uppercase tracking-[0.2em]'>
                                  Explore Machine
                                </span>
                                <div className='w-8 h-8 bg-white/10 rounded-full flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-red-700 transition-all'>
                                  <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='3' d='M14 5l7 7m0 0l-7 7m7-7H3'></path>
                                  </svg>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Simple Contact Footer */}
            <div className='mt-24 border-t border-gray-100 pt-16 flex flex-col md:flex-row justify-between items-center gap-8'>
              <div>
                <h3 className='text-2xl font-black text-[#0f172a] uppercase tracking-tighter'>
                  Looking for more?
                </h3>
                <p className='text-gray-500 font-medium'>
                  Get in touch for custom industrial designs.
                </p>
              </div>
              <Link
                to='/contact'
                className='bg-[#0f172a] text-white px-12 py-5 rounded-full font-black uppercase text-[11px] tracking-widest hover:bg-red-700 transition-all active:scale-95'
              >
                Contact Specialist
              </Link>
            </div>

          </div>
        </main>
      </div>
    </div>
  )
}

export default AllMachines