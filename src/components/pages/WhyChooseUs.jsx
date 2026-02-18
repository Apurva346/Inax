// import React from 'react';
// import { 
//   Settings, 
//   Cpu, 
//   ShieldCheck, 
//   Wrench, 
//   Zap, 
//   Users, 
//   TrendingUp, 
//   Activity 
// } from 'lucide-react';

// const WhyChooseUs = () => {
//   const features = [
//     {
//       icon: <Activity className="text-red-700" size={32} />,
//       title: "Built for Performance",
//       desc: "Every i-NAX™ machine is engineered with a clear objective — consistent performance under real industrial conditions. From structural design to final assembly, our machines deliver accuracy and stability over long production cycles."
//     },
//     {
//       icon: <Settings className="text-red-700" size={32} />,
//       title: "Precision Engineering",
//       desc: "Our machines are designed for high machining accuracy and repeatability. Rigid machine structures and advanced control systems ensure precise output for demanding manufacturing applications."
//     },
//     {
//       icon: <ShieldCheck className="text-red-700" size={32} />,
//       title: "Industrial-Grade Build Quality",
//       desc: "We use heavy-duty construction and quality-tested components to ensure long service life, reduced vibration, and dependable operation in continuous industrial environments."
//     },
//     {
//       icon: <Cpu className="text-red-700" size={32} />,
//       title: "Advanced CNC & Modern Technology",
//       desc: "Our product range includes CNC routers, machining centers, lathes, press brakes, and laser systems designed to meet modern automation and production requirements."
//     },
//     {
//       icon: <Users className="text-red-700" size={32} />,
//       title: "Backed by Trusted Expertise",
//       desc: "Supported by Mech Chem Engineering Services (Since 2012), ensuring professional guidance, transparent business practices, and dependable support."
//     },
//     {
//       icon: <Zap className="text-red-700" size={32} />,
//       title: "Application-Focused Solutions",
//       desc: "We offer multiple configurations and technical specifications to match specific production needs, understanding that every industry has unique requirements."
//     },
//     {
//       icon: <Wrench className="text-red-700" size={32} />,
//       title: "Reliable Service & Support",
//       desc: "Beyond machines, we provide technical assistance, installation guidance, and responsive after-sales support to maintain productivity and minimize downtime."
//     },
//     {
//       icon: <TrendingUp className="text-red-700" size={32} />,
//       title: "Long-Term Value",
//       desc: "With a focus on performance and durability, i-NAX™ machines offer a strong return on investment and long-term operational confidence."
//     }
//   ];

//   return (
//     <section className="py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Section Header */}
//         <div className="text-center mb-20">
//           <h4 className="text-red-700 font-black uppercase tracking-[0.3em] text-xs mb-4">
//             Our Advantage
//           </h4>
//           <h1 className="text-4xl md:text-5xl font-black text-[#0f172a] uppercase tracking-tighter">
//             Why Choose <span className="text-gray-400 font-light">i-NAX™</span>
//           </h1>
//           <div className="w-20 h-1.5 bg-[#1e3a8a] mx-auto mt-6"></div>
//         </div>

//         {/* Features Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
//           {features.map((item, index) => (
//             <div 
//               key={index} 
//               className="group p-8 bg-gray-50 hover:bg-[#0f172a] transition-all duration-500 rounded-xl border-b-4 border-transparent hover:border-red-700 shadow-sm hover:shadow-2xl"
//             >
//               <div className="mb-6 p-3 bg-white inline-block rounded-lg shadow-sm group-hover:bg-white transition-colors">
//                 {item.icon}
//               </div>
//               <h3 className="text-lg font-black text-[#0f172a] group-hover:text-white mb-4 uppercase tracking-tight leading-tight">
//                 {item.title}
//               </h3>
//               <p className="text-sm text-gray-500 group-hover:text-gray-300 leading-relaxed">
//                 {item.desc}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Bottom Slogan */}
//         <div className="mt-20 p-10 bg-[#0f172a] rounded-2xl text-center relative overflow-hidden">
//           <div className="relative z-10">
//             <h2 className="text-2xl md:text-3xl font-black text-white uppercase italic tracking-tighter">
//               "Precision Driven. Performance Focused."
//             </h2>
//           </div>
//           <div className="absolute top-0 right-0 w-32 h-32 bg-red-700/10 rounded-full -mr-16 -mt-16"></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;


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
            <h4 className="text-red-700 font-bold uppercase tracking-widest text-sm mb-4">The i-NAX Advantage</h4>
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