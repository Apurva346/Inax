

import React from 'react';
import { Shield, Target, Cpu, Wrench, Truck, Award, Settings, BarChart } from 'lucide-react';

const WhyChooseUs = () => {
  const points = [
    { title: "Built for Performance", icon: <Award className="text-white" />, desc: "Consistent performance under real industrial conditions with rigid structural design." },
    { title: "Precision Engineering", icon: <Target className="text-white" />, desc: "High accuracy and repeatability with advanced control systems." },
    { title: "Industrial Quality", icon: <Shield className="text-white" />, desc: "Heavy-duty construction ensuring long service life and reduced vibration." },
    { title: "Modern Technology", icon: <Cpu className="text-white" />, desc: "Advanced CNC, Laser, and Press Brake systems for modern automation." },
    { title: "Trusted Expertise", icon: <BarChart className="text-white" />, desc: "Backed by Mech Chem Engineering Services' reliability since 2012." },
    { title: "Custom Solutions", icon: <Settings className="text-white" />, desc: "Multiple configurations to match your specific production needs." },
    { title: "Expert Support", icon: <Wrench className="text-white" />, desc: "Installation guidance and responsive after-sales service to minimize downtime." },
    { title: "Long-Term Value", icon: <Truck className="text-white" />, desc: "Strong ROI with focus on durability and serviceability." },
  ];

  return (
    <section className="py-6 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-16">
          {/* Left Side: Text */}
          <div className="lg:w-1/2">
            <h4 className="text-red-700 font-bold uppercase tracking-widest text-sm mb-4">The i-NAX™ Advantage</h4>
            <h2 className="text-4xl md:text-5xl font-black text-[#0f172a] leading-tight mb-6 uppercase">
              Why Manufacturers <br /> <span className="text-red-700">Trust Us</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We don't just supply machines; we deliver complete manufacturing solutions engineered for excellence and backed by a decade of expertise.
            </p>
          </div>
          
          {/* Right Side: Quick Stats/Image Placeholder */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
             <div className="bg-[#0f172a] p-8 rounded-2xl text-center">
                <p className="text-red-600 text-4xl font-black mb-2">12+</p>
                <p className="text-white text-xs uppercase font-bold tracking-widest">Years Experience</p>
             </div>
             <div className="bg-white p-8 rounded-2xl text-center border border-gray-100 shadow-sm">
                <p className="text-[#0f172a] text-4xl font-black mb-2">100%</p>
                <p className="text-gray-500 text-xs uppercase font-bold tracking-widest">Precision Focus</p>
             </div>
          </div>
        </div>

        {/* Bottom Grid: Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 bg-red-700 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-red-700/30">
                {p.icon}
              </div>
              <h3 className="text-[#0f172a] font-black uppercase text-sm mb-3 tracking-tight">{p.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;