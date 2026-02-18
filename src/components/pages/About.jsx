// import React from 'react'
// import {
//   Award,
//   Factory,
//   Globe,
//   Users,
//   PlayCircle,
//   ArrowRight
// } from 'lucide-react'

// const AboutUs = () => {
//   return (
//     <div className='w-full bg-white'>
//       {/* SECTION 1: TOP CONTENT (WHO WE ARE) */}
//       <section className='py-20 px-4 max-w-7xl mx-auto'>
//         <div className='flex flex-col lg:flex-row gap-12 items-start'>
//           {/* Left Side: Headings */}
//           <div className='lg:w-1/3'>
//             <h4 className='text-red-600 font-bold uppercase tracking-widest text-sm mb-2'>
//               Who We Are
//             </h4>
//             <h2 className='text-4xl md:text-5xl font-black text-blue-900 leading-tight mb-4'>
//               I-NAX™ Precision <br /> Industries
//             </h2>
//             <p className='text-gray-700 font-bold text-lg mb-8'>
//               I-NAX™ formerly known as <br />
//               <span className='text-blue-800'>
//                 Mech Chem Engineering Services.
//               </span>
//             </p>

//             <div className='flex flex-wrap gap-4 items-center'>
//               <button className='bg-red-600 text-white px-8 py-3 rounded-md font-bold flex items-center gap-2 hover:bg-red-700 transition-all uppercase text-sm'>
//                 About Us <ArrowRight size={18} />
//               </button>
              
//             </div>
//           </div>

//           {/* Right Side: Description */}
//           <div className='lg:w-2/3 space-y-6 text-gray-600 leading-relaxed text-base'>
//             <p>
//               <strong>I-NAX™ Precision Industries</strong> are manufacturers of
//               high-performance CNC machines, lathe machines, and specialized
//               industrial equipment. With over a decade of experience, we provide
//               solutions serving a wide range of industries including automotive,
//               aerospace, metalworking, woodworking, and modern fabrication
//               units.
//             </p>
//             <p>
//               Our team of dedicated professionals is committed to customer
//               satisfaction through reliable support, technical guidance, and
//               engineering excellence. Headquartered with a robust presence
//               across India, we have established 15+ manufacturing support
//               centers to prioritize innovation and a customer-centric approach
//               to empower businesses.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* SECTION 2: STATS/EXPERTISE CARDS (AS PER SCREENSHOT) */}
//       <section className='border-t border-gray-100 py-16 bg-white'>
//         <div className='max-w-7xl mx-auto px-4'>
//           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
//             {/* Expertise */}
//             <div className='flex flex-col items-start p-4 border-r-0 lg:border-r border-gray-200 last:border-0'>
//               <Award
//                 className='text-blue-600 mb-6'
//                 size={48}
//                 strokeWidth={1.5}
//               />
//               <h3 className='text-2xl font-black text-gray-900 mb-3 tracking-tight'>
//                 12+ Years of Expertise
//               </h3>
//               <p className='text-gray-500 text-sm leading-relaxed'>
//                 Trusted track record since 2012 in CNC, Lathe, and Precision
//                 Industrial Solutions.
//               </p>
//             </div>

//             {/* Manufacturing */}
//             <div className='flex flex-col items-start p-4 border-r-0 lg:border-r border-gray-200 last:border-0'>
//               <Factory
//                 className='text-blue-600 mb-6'
//                 size={48}
//                 strokeWidth={1.5}
//               />
//               <h3 className='text-2xl font-black text-gray-900 mb-3 tracking-tight'>
//                 Manufacturing Power
//               </h3>
//               <p className='text-gray-500 text-sm leading-relaxed'>
//                 Modern facility across strategic locations with ISO-certified
//                 manufacturing standards.
//               </p>
//             </div>

//             {/* Presence */}
//             <div className='flex flex-col items-start p-4 border-r-0 lg:border-r border-gray-200 last:border-0'>
//               <Globe
//                 className='text-blue-600 mb-6'
//                 size={48}
//                 strokeWidth={1.5}
//               />
//               <h3 className='text-2xl font-black text-gray-900 mb-3 tracking-tight'>
//                 National Presence
//               </h3>
//               <p className='text-gray-500 text-sm leading-relaxed'>
//                 Serving 20+ states with a strong distributor and reliable
//                 service support network.
//               </p>
//             </div>

//             {/* Team */}
//             <div className='flex flex-col items-start p-4 border-r-0 lg:border-r border-gray-200 last:border-0'>
//               <Users
//                 className='text-blue-600 mb-6'
//                 size={48}
//                 strokeWidth={1.5}
//               />
//               <h3 className='text-2xl font-black text-gray-900 mb-3 tracking-tight'>
//                 Expert Team Members
//               </h3>
//               <p className='text-gray-500 text-sm leading-relaxed'>
//                 A skilled workforce powering innovation, precision service, and
//                 technical support.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* SECTION 3: MISSION & VISION */}
//       <section className='py-20 bg-gray-50 px-4'>
//         <div className='max-w-7xl mx-auto'>
//           <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
//             {/* OUR MISSION */}
//             <div className='bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-start group hover:shadow-md transition-all'>
//               <div className='bg-red-50 p-4 rounded-2xl mb-6 group-hover:bg-red-600 transition-colors'>
//                 <Award
//                   className='text-red-600 group-hover:text-white'
//                   size={32}
//                 />
//               </div>
//               <h3 className='text-3xl font-black text-blue-900 mb-4'>
//                 Our Mission
//               </h3>
//               <p className='text-gray-600 leading-relaxed text-lg'>
//                 To deliver high-performance CNC and precision industrial
//                 machinery that empowers manufacturers with accuracy,
//                 reliability, and long-term value—supported by expert service and
//                 engineering excellence.
//               </p>
//             </div>

//             {/* OUR VISION */}
//             <div className='bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-start group hover:shadow-md transition-all'>
//               <div className='bg-blue-50 p-4 rounded-2xl mb-6 group-hover:bg-blue-800 transition-colors'>
//                 <Globe
//                   className='text-blue-800 group-hover:text-white'
//                   size={32}
//                 />
//               </div>
//               <h3 className='text-3xl font-black text-blue-900 mb-4'>
//                 Our Vision
//               </h3>
//               <p className='text-gray-600 leading-relaxed text-lg'>
//                 To become a trusted leader in advanced industrial machinery by
//                 setting new standards in precision, innovation, and customer
//                 support—driving the future of modern manufacturing.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* SECTION 3: BOTTOM SLOGAN (Optional) */}
//       <div className='bg-blue-900 py-4 text-center'>
//         <p className='text-white/80 text-sm italic tracking-widest uppercase'>
//           "I-NAX™ machines aren't just built—they're engineered for excellence."
//         </p>
//       </div>
//     </div>
//   )
// }

// export default AboutUs


import React from 'react'
import {
  Award,
  Factory,
  Globe,
  Users,
  Target,
  Rocket,
  ArrowRight,
  ShieldCheck
} from 'lucide-react'

const AboutUs = () => {
  return (
    <div className='w-full bg-white'>
      {/* SECTION 1: TOP CONTENT (WHO WE ARE - About i-NAX™) */}
      <section className='py-20 px-4 max-w-7xl mx-auto'>
        <div className='flex flex-col lg:flex-row gap-12 items-start'>
          {/* Left Side: Headings */}
          <div className='lg:w-1/3'>
            <h4 className='text-red-700 font-bold uppercase tracking-widest text-sm mb-2'>
              Built for Performance.
            </h4>
            <h1 className='text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-4 uppercase'>
              About <span className="text-red-700">i-NAX™</span>
            </h1>
            <p className='text-gray-900 font-bold text-lg mb-8 italic'>
              Backed by Experience.
            </p>

            <div className='flex flex-wrap gap-4 items-center'>
              <button className='bg-red-700 text-white px-8 py-3 rounded-md font-bold flex items-center gap-2 hover:bg-slate-900 transition-all uppercase text-sm tracking-widest shadow-lg shadow-red-700/20'>
                Our Story <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Right Side: Description */}
          <div className='lg:w-2/3 space-y-6 text-gray-600 leading-relaxed text-lg'>
            <p>
              <strong>i-NAX™</strong> is a premium brand of advanced CNC and precision industrial machinery, engineered to meet the evolving demands of modern manufacturing. Designed with a strong focus on accuracy, reliability, and long-term performance, i-NAX™ machines help manufacturers achieve higher productivity and operational confidence.
            </p>
            <p>
              Our brand stands for precision-driven engineering, robust construction, and dependable support—ensuring every machine delivers consistent results in real-world industrial environments.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: JOURNEY & PARENT COMPANY */}
      <section className='bg-slate-50 py-20 px-4'>
        <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          <div>
             <h2 className='text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight border-l-4 border-red-700 pl-4'>
              Our Journey
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>The foundation of <strong>i-NAX™</strong> is built on experience. Our parent company, <strong>Mech Chem Engineering Services</strong>, was established in 2012 with a clear mission: to provide reliable industrial machinery sales, service, and engineering solutions that manufacturers can trust.</p>
              <p>Over the years, we have worked closely with workshops, factories, and industrial units, gaining deep insight into real production challenges and performance expectations.</p>
              <p className="bg-white p-4 rounded-xl border-l-4 border-slate-900 shadow-sm font-semibold">In 2025, leveraging this decade-long expertise, we introduced i-NAX™—a dedicated premium brand created to deliver advanced CNC and precision machinery.</p>
            </div>
          </div>
          {/* Parent Company Note Card */}
          <div className='bg-slate-900 text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden'>
            <div className="relative z-10">
              <h3 className='text-xl font-bold mb-4 text-red-500 uppercase tracking-widest'>Our Parent Company</h3>
              <p className='text-gray-300 leading-relaxed mb-6'>
                <strong>Mech Chem Engineering Services (Est. 2012)</strong> is a trusted provider of industrial machinery sales, service, and engineering solutions. With a strong reputation for reliability, they provide the solid foundation behind the i-NAX™ brand—ensuring proven industry knowledge and dependable service.
              </p>
              <div className="w-12 h-1 bg-red-700"></div>
            </div>
            <Factory className="absolute -bottom-10 -right-10 text-white/5" size={200} />
          </div>
        </div>
      </section>

      {/* SECTION 3: LEADERSHIP */}
      <section className='py-20 px-4 max-w-7xl mx-auto text-center'>
        <h2 className='text-3xl font-black text-slate-900 mb-12 uppercase'>Leadership & Vision</h2>
        <div className='max-w-2xl mx-auto bg-white border border-gray-100 p-8 rounded-3xl shadow-sm'>
           <div className="w-24 h-24 bg-slate-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Users size={40} className="text-red-700" />
           </div>
           <h3 className='text-2xl font-black text-slate-900'>Atul Pise</h3>
           <p className='text-red-700 font-bold uppercase tracking-widest text-sm mb-6'>Managing Director & CEO</p>
           <p className='text-gray-600 leading-relaxed italic'>
            "As the driving force behind i-NAX™, Atul Pise brings a strong vision for precision-driven manufacturing. Under his guidance, i-NAX™ has been developed as a premium CNC machinery brand committed to consistent performance and long-term value."
           </p>
        </div>
      </section>

      {/* SECTION 4: INNOVATION & WHAT SETS US APART */}
      <section className='py-20 px-4 bg-white border-t border-gray-100'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-black text-slate-900 uppercase'>Innovation at the Core</h2>
            <div className='w-20 h-1.5 bg-red-700 mx-auto mt-4'></div>
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <FeatureCard icon={<Target size={32}/>} title="High Accuracy" desc="Engineered for precision and repeatability in every cut." />
            <FeatureCard icon={<ShieldCheck size={32}/>} title="Stable Operations" desc="Optimized machine structures for smooth and stable performance." />
            <FeatureCard icon={<Rocket size={32}/>} title="Reduced Downtime" desc="Advanced CNC technology ensuring continuous production." />
            <FeatureCard icon={<Award size={32}/>} title="Long-term Value" desc="Built to perform and designed to last in demanding environments." />
          </div>

          <div className="mt-20 bg-slate-50 p-10 rounded-3xl">
            <h3 className="text-2xl font-black text-slate-900 mb-8 text-center uppercase">What Sets i-NAX™ Apart</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               <ListItem text="Precision-focused engineering" />
               <ListItem text="Heavy-duty, durable construction" />
               <ListItem text="Customized solutions for applications" />
               <ListItem text="Strong after-sales & service support" />
               <ListItem text="Backed by 10+ years of experience" />
               <ListItem text="Complete manufacturing solutions" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: MISSION & VISION */}
      <section className='py-20 bg-slate-900 px-4 text-white'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            {/* OUR MISSION */}
            <div className='bg-slate-800 p-10 rounded-3xl border border-slate-700 flex flex-col items-start'>
              <div className='bg-red-700 p-4 rounded-2xl mb-6'>
                <Target className='text-white' size={32} />
              </div>
              <h3 className='text-3xl font-black mb-4 uppercase'>Our Mission</h3>
              <p className='text-gray-300 leading-relaxed text-lg'>
                To deliver high-performance CNC and precision industrial machinery that empowers manufacturers with accuracy, reliability, and long-term value—supported by expert service and engineering excellence.
              </p>
            </div>

            {/* OUR VISION */}
            <div className='bg-slate-800 p-10 rounded-3xl border border-slate-700 flex flex-col items-start'>
              <div className='bg-red-700 p-4 rounded-2xl mb-6'>
                <Globe className='text-white' size={32} />
              </div>
              <h3 className='text-3xl font-black mb-4 uppercase'>Our Vision</h3>
              <p className='text-gray-300 leading-relaxed text-lg'>
                To become a trusted leader in advanced industrial machinery by setting new standards in precision, innovation, and customer support—driving the future of modern manufacturing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER SLOGAN */}
      <div className='bg-red-700 py-8 text-center'>
        <h2 className='text-white text-2xl font-black uppercase tracking-widest'>
          Built to Perform. Designed to Last.
        </h2>
        <p className='text-white/80 mt-2 text-sm uppercase tracking-widest'>
          With i-NAX™, you gain more than machinery—you gain a long-term partner.
        </p>
      </div>
    </div>
  )
}

// Helper Components
const FeatureCard = ({ icon, title, desc }) => (
  <div className='flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-50 hover:shadow-md transition-all'>
    <div className='text-red-700 mb-4'>{icon}</div>
    <h3 className='text-lg font-black text-slate-900 mb-2 uppercase'>{title}</h3>
    <p className='text-gray-500 text-sm'>{desc}</p>
  </div>
)

const ListItem = ({ text }) => (
  <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100">
    <div className="w-2 h-2 bg-red-700 rounded-full"></div>
    <span className="font-bold text-slate-800 text-sm uppercase tracking-tight">{text}</span>
  </div>
)

export default AboutUs