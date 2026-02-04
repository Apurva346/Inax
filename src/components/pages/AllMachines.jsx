import React from 'react';
import { Link } from 'react-router-dom';
import { machinesData } from '../data/machinesData';
// तुमच्या प्रोजेक्टमधील डेटा फाईलचा अचूक पाथ तपासा


const AllMachines = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 md:px-10 lg:px-20">
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-red-700 font-bold tracking-[5px] uppercase text-[12px] mb-3">
            Premium Engineering Solutions
          </h2>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 uppercase leading-tight">
            Our <span className="text-red-700">Machine</span> Collection
          </h1>
          <div className="flex justify-center mt-6">
            <span className="w-20 h-1.5 bg-red-700 rounded-full"></span>
            <span className="w-4 h-1.5 bg-gray-900 rounded-full ml-2"></span>
          </div>
        </div>

        {/* Machine Cards Grid - Responsive (1, 2, or 3 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {machinesData.map((machine) => (
            <div 
              key={machine.id} 
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 border border-gray-100 flex flex-col h-full"
            >
              {/* Image Box */}
              <div className="relative h-64 overflow-hidden bg-gray-50 flex items-center justify-center p-6">
                <img 
                  src={machine.image} 
                  alt={machine.name} 
                  className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                {/* Product Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                  <span className="text-red-700 text-[9px] font-black uppercase tracking-widest">i-NAX Tech</span>
                </div>
              </div>

              {/* Text Details Box */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-extrabold text-gray-900 mb-3 group-hover:text-red-700 transition-colors duration-300 min-h-[56px] flex items-center">
                  {machine.name}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-3">
                  {machine.description}
                </p>

                {/* Button - Bottom Aligned */}
                <div className="mt-auto">
                  <Link 
                    to={`/machine/${machine.id}`}
                    className="flex items-center justify-center w-full py-4 bg-gray-900 text-white text-[11px] font-bold uppercase tracking-[2px] rounded-2xl hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-red-200"
                  >
                    View Full Details
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Contact CTA (Optional) */}
        <div className="mt-20 bg-gray-900 rounded-[2rem] p-10 md:p-16 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Need a Customized Machining Solution?</h3>
                <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">Our experts help you select the right machine for your production needs.</p>
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="inline-block bg-red-700 hover:bg-red-600 text-white px-10 py-4 rounded-full font-bold uppercase text-[12px] tracking-widest transition-all">
                    Contact Us Now
                </Link>
            </div>
            {/* Background Decor */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-red-700/10 rounded-full blur-3xl"></div>
        </div>

      </div>
    </div>
  );
};

export default AllMachines;