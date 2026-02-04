// import React, { useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { machinesData } from '../data/machinesData';

// const MachineDetails = () => {
//   const { id } = useParams();
  
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [id]);

//   const machine = machinesData.find((m) => m.id === id);

//   if (!machine) {
//     return (
//       <div className="py-32 text-center">
//         <h2 className="text-3xl font-bold text-red-700 uppercase">Machine Not Found</h2>
//         <Link to="/" className="mt-6 inline-block bg-gray-900 text-white px-8 py-3 rounded font-bold uppercase text-sm">
//           Back to Home
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-12 lg:py-20">
//       {/* मुख्य कंटेनर: items-start वापरल्यामुळे इमेज विनाकारण ओढली जाणार नाही */}
//       <div className="flex flex-col lg:flex-row lg:items-start gap-12">
        
//         {/* LEFT: Image Section (रुंदी ४५% केली आहे) */}
//         <div className="w-full lg:w-[45%] sticky top-24">
//           <div className="relative rounded-2xl overflow-hidden shadow-2xl border-b-10 border-red-700 aspect-4/5 bg-gray-100">
//             <img 
//               src={machine.image} 
//               alt={machine.name} 
//               className="w-full h-full object-cover" 
//             />
//             <div className="absolute top-4 left-4 bg-red-700 text-white px-4 py-1 text-[10px] font-bold uppercase tracking-widest">
//               Industrial Grade
//             </div>
//           </div>
//         </div>

//         {/* RIGHT: Content Section (रुंदी ५५% केली आहे) */}
//         <div className="w-full lg:w-[55%] flex flex-col">
//           <nav className="flex mb-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
//             <Link to="/" className="hover:text-red-700">Home</Link>
//             <span className="mx-2">/</span>
//             <span className="text-red-700">Product Details</span>
//           </nav>

//           <h1 className="text-4xl lg:text-5xl font-black text-gray-900 uppercase leading-tight">
//             {machine.name}
//           </h1>
          
//           <div className="flex items-center gap-4 mt-3">
//             <p className="text-3xl font-black text-red-700">{machine.price}</p>
//             <span className="text-gray-400 text-[11px] font-bold border-l pl-4 border-gray-300 uppercase tracking-tighter">
//               Quality Assured
//             </span>
//           </div>

//           <div className="w-16 h-1.5 bg-gray-900 my-6"></div>
          
//           <div className="space-y-8">
//             <div>
//               <h3 className="text-sm font-black uppercase mb-2 tracking-wider text-gray-400">Description</h3>
//               <p className="text-gray-600 leading-relaxed text-lg">
//                 {machine.description}
//               </p>
//             </div>
            
//             <div>
//               <h3 className="text-sm font-black uppercase mb-4 tracking-wider text-gray-400">Technical Specs</h3>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                 {machine.specs.map((spec, index) => (
//                   <div key={index} className="flex items-center gap-2 bg-gray-50 p-4 rounded border-l-4 border-red-700 shadow-sm">
//                     <span className="text-gray-800 font-bold text-[13px] uppercase">{spec}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="mt-12 flex flex-col sm:flex-row gap-4">
//             <button className="flex-1 px-8 py-5 bg-red-700 text-white font-black rounded shadow-lg hover:bg-gray-800 transition-all uppercase text-xs tracking-widest">
//               Inquire Now
//             </button>
//             <button className="flex-1 px-8 py-5 border-2 border-gray-900 text-gray-900 font-black rounded hover:bg-gray-900 hover:text-white transition-all uppercase text-xs tracking-widest">
//               Download PDF
//             </button>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default MachineDetails;


import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { machinesData } from '../data/machinesData';

const MachineDetails = () => {
  const { id } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const machine = machinesData.find((m) => m.id === id);

  if (!machine) {
    return (
      <div className="py-32 text-center">
        <h2 className="text-3xl font-bold text-red-700 uppercase">Machine Not Found</h2>
        <Link to="/" className="mt-6 inline-block bg-gray-900 text-white px-8 py-3 rounded font-bold uppercase text-sm">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 lg:py-20">
      {/* CSS for handling Client's HTML Content */}
      <style>{`
        .client-html h3 { color: #003366; font-weight: 900; text-transform: uppercase; margin-top: 2.5rem; border-bottom: 3px solid #f97316; display: inline-block; padding-bottom: 4px; font-size: 1.5rem; margin-bottom: 1rem; }
        .client-html h4 { color: #003366; font-weight: 800; text-transform: uppercase; font-size: 1.1rem; margin-top: 1.5rem; }
        .client-html p { color: #4b5563; line-height: 1.8; margin-bottom: 1rem; font-size: 1.05rem; }
        .client-html strong { color: #111827; }
        
        .spec-table { width: 100%; border-collapse: collapse; margin: 2rem 0; background: #fff; }
        .spec-table th, .spec-table td { border: 1px solid #e5e7eb; padding: 12px 15px; text-align: left; }
        .spec-table th { background: #003366; color: white; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 1px; }
        .spec-table tr:nth-child(even) { background: #f9fafb; }
        
        .faq-box { background: #f3f4f6; padding: 1.5rem; border-radius: 12px; margin-top: 1rem; border-left: 5px solid #003366; }
      `}</style>

      <div className="flex flex-col lg:flex-row lg:items-start gap-12">
        
        {/* LEFT: Image Section (Sticky) */}
        <div className="w-full lg:w-[45%] lg:sticky lg:top-24">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-b-10 border-[#003366] bg-gray-100">
            <img 
              src={machine.image} 
              alt={machine.name} 
              className="w-full h-auto object-cover" 
            />
            {/* <div className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-1 text-[10px] font-bold uppercase tracking-widest">
              Premium i-NAX Series
            </div> */}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link to="/contact" onClick={() => window.scrollTo(0, 0)} >
              <button className="flex-1 px-8 py-5 bg-[#003366] text-white font-black rounded shadow-lg hover:bg-orange-500 transition-all uppercase text-xs tracking-widest">
              Inquire Now
              </button>
            </Link>
            
            <button className="flex-1 px-8 py-5 border-2 border-gray-900 text-gray-900 font-black rounded hover:bg-gray-900 hover:text-white transition-all uppercase text-xs tracking-widest">
              Download PDF
            </button>
          </div>
        </div>

        {/* RIGHT: Content Section */}
        <div className="w-full lg:w-[55%] flex flex-col">
          <nav className="flex mb-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            <Link to="/" className="hover:text-orange-500">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-[#003366]">Product Details</span>
          </nav>

          <h3 className="text-2xl lg:text-4xl font-black text-gray-900 uppercase leading-tight">
            {machine.name}
          </h3>

          <div className="w-20 h-2 bg-orange-500 my-8"></div>
          
          {/* Rendering the longDescription from Data */}
          <div className="client-html">
            {machine.longDescription ? (
              <div dangerouslySetInnerHTML={{ __html: machine.longDescription }} />
            ) : (
              <div>
                <p className="text-lg text-gray-600">{machine.description}</p>
                <div className="mt-8">
                  <h3 className="text-sm font-black uppercase mb-4 tracking-wider text-gray-400">Technical Specs</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {machine.specs.map((spec, index) => (
                      <div key={index} className="flex items-center gap-2 bg-gray-50 p-4 rounded border-l-4 border-[#003366] shadow-sm">
                        <span className="text-gray-800 font-bold text-[13px] uppercase">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default MachineDetails;