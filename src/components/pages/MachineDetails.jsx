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
    <div className="max-w-7xl mx-auto px-4 py-6 lg:py-10">
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

      {/* Main Container */}
      <div className="flex flex-col lg:flex-row lg:items-start gap-12">
        
        {/* 1. Header Section (Title & Breadcrumbs) */}
        {/* मोबाईलवर सर्वात वर दिसेल (order-1), डेस्कटॉपवर तो मजकुराच्या वर असेल */}
        <div className="w-full lg:hidden order-1">
          <nav className="flex mb-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            <Link to="/" className="hover:text-orange-500">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-[#003366]">Product Details</span>
          </nav>

          <h3 className="text-2xl font-black text-gray-900 uppercase leading-tight">
            {machine.name}
          </h3>
          <div className="w-20 h-2 bg-orange-500 mt-4 mb-2"></div>
        </div>

        {/* 2. Image Section */}
        {/* मोबाईलवर नाव खाली दिसेल (order-2) */}
        <div className="w-full lg:w-[45%] lg:sticky lg:top-24 order-2 lg:order-1">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-b-10 border-[#003366] bg-gray-100">
            <img 
              src={machine.image} 
              alt={machine.name} 
              className="w-full h-[400px] object-contain" 
            />
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="flex-1" onClick={() => window.scrollTo(0, 0)} >
              <button className="w-full px-8 py-5 bg-[#003366] text-white font-black rounded shadow-lg hover:bg-orange-500 transition-all uppercase text-xs tracking-widest">
                Inquire Now
              </button>
            </Link>
            
            <button className="flex-1 px-8 py-5 border-2 border-gray-900 text-gray-900 font-black rounded hover:bg-gray-900 hover:text-white transition-all uppercase text-xs tracking-widest">
              Download PDF
            </button>
          </div>
        </div>

        {/* 3. Content Section (Desktop Title + HTML Content) */}
        {/* मोबाईलवर तिसऱ्या क्रमांकावर दिसेल (order-3) */}
        <div className="w-full lg:w-[55%] flex flex-col order-3 lg:order-2">
          
          {/* डेस्कटॉपसाठी टायटल (मोबाईलवर लपवले आहे) */}
          <div className="hidden lg:block">
            <nav className="flex mb-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              <Link to="/" className="hover:text-orange-500">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-[#003366]">Product Details</span>
            </nav>
            <h3 className="text-4xl font-black text-gray-900 uppercase leading-tight">
              {machine.name}
            </h3>
            <div className="w-20 h-2 bg-orange-500 my-8"></div>
          </div>
          
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