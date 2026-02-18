// import React from 'react';
// import { Link } from 'react-router-dom';
// import { machinesData } from '../data/machinesData';
// // तुमच्या प्रोजेक्टमधील डेटा फाईलचा अचूक पाथ तपासा

// const AllMachines = () => {
//   return (
//     <div className="bg-slate-50 min-h-screen py-16">
//       <div className="container mx-auto px-4 md:px-10 lg:px-20">

//         {/* Header Section */}
//         <div className="max-w-3xl mx-auto text-center mb-16">
//           <h2 className="text-red-700 font-bold tracking-[5px] uppercase text-[12px] mb-3">
//             Premium Engineering Solutions
//           </h2>
//           <h1 className="text-4xl md:text-5xl font-black text-gray-900 uppercase leading-tight">
//             Our <span className="text-red-700">Machine</span> Collection
//           </h1>
//           <div className="flex justify-center mt-6">
//             <span className="w-20 h-1.5 bg-red-700 rounded-full"></span>
//             <span className="w-4 h-1.5 bg-gray-900 rounded-full ml-2"></span>
//           </div>
//         </div>

//         {/* Machine Cards Grid - Responsive (1, 2, or 3 columns) */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {machinesData.map((machine) => (
//             <div
//               key={machine.id}
//               className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 border border-gray-100 flex flex-col h-full"
//             >
//               {/* Image Box */}
//               <div className="relative h-64 overflow-hidden bg-gray-50 flex items-center justify-center p-6">
//                 <img
//                   src={machine.image}
//                   alt={machine.name}
//                   className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-in-out"
//                 />
//                 {/* Product Badge */}
//                 <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
//                   <span className="text-red-700 text-[9px] font-black uppercase tracking-widest">i-NAX Tech</span>
//                 </div>
//               </div>

//               {/* Text Details Box */}
//               <div className="p-8 flex flex-col flex-grow">
//                 <h3 className="text-xl font-extrabold text-gray-900 mb-3 group-hover:text-red-700 transition-colors duration-300 min-h-[56px] flex items-center">
//                   {machine.name}
//                 </h3>

//                 <p className="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-3">
//                   {machine.description}
//                 </p>

//                 {/* Button - Bottom Aligned */}
//                 <div className="mt-auto">
//                   <Link
//                     to={`/machine/${machine.id}`}
//                     className="flex items-center justify-center w-full py-4 bg-gray-900 text-white text-[11px] font-bold uppercase tracking-[2px] rounded-2xl hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-red-200"
//                   >
//                     View Full Details
//                     <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
//                     </svg>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom Contact CTA (Optional) */}
//         <div className="mt-20 bg-gray-900 rounded-[2rem] p-10 md:p-16 text-center text-white relative overflow-hidden">
//             <div className="relative z-10">
//                 <h3 className="text-2xl md:text-3xl font-bold mb-4">Need a Customized Machining Solution?</h3>
//                 <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">Our experts help you select the right machine for your production needs.</p>
//                 <Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="inline-block bg-red-700 hover:bg-red-600 text-white px-10 py-4 rounded-full font-bold uppercase text-[12px] tracking-widest transition-all">
//                     Contact Us Now
//                 </Link>
//             </div>
//             {/* Background Decor */}
//             <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-red-700/10 rounded-full blur-3xl"></div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default AllMachines;

import React from 'react'
import { Link } from 'react-router-dom'
import { machinesData } from '../data/machinesData'

const AllMachines = () => {
  return (
    <div className='bg-slate-50 min-h-screen'>
      {/* Main Layout Container - No gap for Sidebar */}
      <div className='flex flex-col lg:flex-row min-h-screen relative'>
        {/* LEFT SIDEBAR - Dark Theme, Top to Bottom */}
        

        <aside className='lg:w-72 bg-[#1f2937]
 text-gray-800
 lg:sticky lg:top-0 lg:h-screen overflow-y-auto border-r border-white/10 z-40'>
          <div className='p-6'>
            {/* HEADER */}
            {/* <h3 className='text-red-600 font-semibold uppercase text-[11px] tracking-[0.25em] mb-1'>
              Catalog
            </h3> */}

            <h2 className='text-lg font-bold uppercase tracking-tight mb-6 border-b border-white/10 pb-3'>
               <span className='text-gray-400'>Machine List</span>
            </h2>

            {/* MACHINE LIST */}
            <ul className='space-y-1'>
              {machinesData.map(machine => (
                <li key={machine.id}>
                  <Link
                    to={`/machine/${machine.id}`}
                    className='group flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-white/5 transition-all duration-200'
                  >
                    <div className='w-1.5 h-1.5 bg-red-600 rounded-full group-hover:scale-125 transition-transform'></div>

                    <span className='text-[12px] font-medium text-gray-300 group-hover:text-white uppercase tracking-wide truncate transition-colors'>
                      {machine.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* SUPPORT CARD (COMPACT VERSION) */}
            {/* <div className='mt-8 p-4 bg-white/5 border border-white/10 rounded-xl'>
              <p className='text-red-500 text-[10px] font-semibold uppercase tracking-widest mb-1'>
                Support
              </p>

              <p className='text-gray-300 text-[12px] font-medium mb-3'>
                Need expert guidance?
              </p>

              <Link
                to='/contact'
                className='text-[11px] text-white font-semibold hover:text-red-500 transition-colors uppercase tracking-wide'
              >
                Talk to Us →
              </Link>
            </div> */}
          </div>
        </aside>

        

        {/* RIGHT CONTENT AREA */}
        <main className='flex-1 bg-white'>
          <div className='py-16 px-6 md:px-12 lg:px-16'>
            {/* Page Header inside Main Content */}
            <div className='mb-16'>
              <h2 className='text-red-700 font-bold tracking-[5px] uppercase text-[12px] mb-3'>
                Industrial Precision
              </h2>
              <h1 className='text-4xl md:text-6xl font-black text-[#0f172a] uppercase tracking-tighter leading-none'>
                i-NAX <br />{' '}
                <span className='text-gray-300'>Engineering Collection</span>
              </h1>
              <div className='w-24 h-2 bg-red-700 mt-6'></div>
            </div>

            {/* Machine Cards Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10'>
              {machinesData.map(machine => (
                <div
                  key={machine.id}
                  className='group relative bg-[#f8fafc] rounded-3xl overflow-hidden border border-gray-100 flex flex-col h-full hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500'
                >
                  {/* Image Box */}
                  <div className='relative h-72 overflow-hidden flex items-center justify-center p-10 bg-white group-hover:bg-gray-50 transition-colors duration-500'>
                    <img
                      src={machine.image}
                      alt={machine.name}
                      className='max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-in-out'
                    />
                    <div className='absolute top-6 left-6 flex flex-col gap-2'>
                      <span className='bg-[#0f172a] text-white text-[8px] font-black px-3 py-1 uppercase tracking-widest'>
                        Premium
                      </span>
                    </div>
                  </div>

                  {/* Details Box */}
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
                          <svg
                            className='w-4 h-4'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='3'
                              d='M14 5l7 7m0 0l-7 7m7-7H3'
                            ></path>
                          </svg>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
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
