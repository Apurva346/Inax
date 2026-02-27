import React from 'react'
import {
  Settings,
  Wrench,
  ShieldCheck,
  Users,
  ArrowRight,
  Cpu,
  Layout,
  CheckCircle,
  Globe
} from 'lucide-react'
import { Link } from 'react-router-dom'

const Inax = () => {
  return (
    <div className='w-full overflow-hidden bg-white font-sans'>
      {/* SECTION 1: HERO - Ultra Modern Look */}
      <section className='relative h-[600px] w-full flex items-center overflow-hidden bg-[#0f172a]'>
        {/* Background Image with Screen-accurate Overlay */}
        <div className='absolute inset-0 z-0 w-full h-full'>
          <img
            src='/himages/image3.png'
            className='w-full h-full object-cover opacity-60'
            alt='Modern Industrial CNC'
          />
          {/* Gradient from left to right - as per screenshot */}
          <div className='absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent'></div>
        </div>

        <div className='max-w-7xl mx-auto px-8 relative z-10 text-white w-full'>
          {/* Clean Typography like screenshot */}
          <h1 className='text-5xl md:text-7xl font-bold mb-4 tracking-tight leading-[1.1]'>
            i-NAX™ – Built for <br />
            <span className='text-white'>Performance</span>
          </h1>

          <p className='text-lg md:text-xl text-gray-200 max-w-xl mb-10 font-light leading-relaxed'>
            Precision Fiber Laser Cutting Machines <br />
            High-Speed, intelligent laser solutions for modern manufacturing.
          </p>

          {/* Buttons - Yellow & White combination from screenshot */}
          <div className='flex flex-wrap gap-4'>
            {/* <button className='bg-[#FFB800] hover:bg-yellow-500 text-black font-extrabold px-10 py-4 rounded-md text-xs uppercase tracking-widest transition-all shadow-xl active:scale-95'>
              Explore Machines
            </button> */}
            <Link to='/all-machines'>
              <button className='bg-[#FFB800] hover:bg-yellow-500 text-black font-extrabold px-10 py-4 rounded-md text-xs uppercase tracking-widest transition-all shadow-xl active:scale-95'>
                Explore Machines
              </button>
            </Link>
            <Link to='/contact'>
              <button className='bg-white hover:bg-gray-100 text-black font-extrabold px-10 py-4 rounded-md text-xs uppercase tracking-widest transition-all shadow-xl active:scale-95'>
                Get a Quote
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/* SECTION 2: OUR STORY - Professional & Clean */}
      <section className='py-24 bg-white w-full overflow-hidden border-b border-gray-100'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='flex flex-col lg:flex-row gap-20 items-center'>
            <div className='flex-1 space-y-8'>
              <div className='inline-block'>
                <h4 className='text-red-700 font-black uppercase tracking-[0.3em] text-xs mb-2'>
                  The Journey
                </h4>
                <h2 className='text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#0f172a]'>
                  Our <span className='text-gray-400'>Story</span>
                </h2>
                <div className='w-12 h-2 bg-[#1e3a8a] mt-2'></div>
              </div>

              <div className='relative'>
                <p className='text-xl text-gray-800 leading-relaxed font-semibold mb-6'>
                  Founded in <span className='text-[#1e3a8a]'>2012</span>, Mech
                  Chem Engineering Services has been the backbone of industrial
                  reliability for over a decade.
                </p>
                <p className='text-md text-gray-500 leading-relaxed'>
                  In 2024, we evolved into <strong>i-NAX™</strong>, a premium
                  brand representing our commitment to modern
                  manufacturing—delivering unmatched accuracy and engineering
                  excellence across the globe.
                </p>
              </div>

              <div className='bg-gray-50 p-8 rounded-tr-[50px] rounded-bl-[50px] border-l-8 border-red-700 shadow-sm flex items-start gap-4'>
                <CheckCircle className='text-red-700 shrink-0' size={24} />
                <p className='text-[#0f172a] italic font-bold leading-relaxed text-sm'>
                  "Our mission is to redefine industrial performance with
                  machines built to endure."
                </p>
              </div>

              {/* --- नवीन READ MORE बटण येथे जोडले आहे --- */}
              <div className='pt-4'>
                <Link to='/about'>
                  <button className='uppercase group flex items-center gap-3 bg-[#0f172a] hover:bg-red-700 text-white px-8 py-4 rounded-md font-bold transition-all duration-300 shadow-lg shadow-blue-900/20 active:scale-95 text-xs tracking-widest'>
                    Read Full Story
                    <ArrowRight
                      size={18}
                      className='group-hover:translate-x-2 transition-transform'
                    />
                  </button>
                </Link>
              </div>
              {/* ------------------------------------------ */}
            </div>

            {/* Interactive Timeline */}
            <div className='flex-1 w-full'>
              <div className='relative flex flex-col space-y-8'>
                <div className='absolute left-[31px] top-0 bottom-0 w-1 bg-gray-100'></div>

                {[
                  {
                    year: '2012',
                    title: 'MECH CHEM FOUNDATION',
                    desc: 'Expertise in Industrial Service',
                    color: 'bg-[#1e3a8a]'
                  },
                  {
                    year: '2024',
                    title: 'i-NAX™ BRAND LAUNCH',
                    desc: 'Premium Precision Machinery',
                    color: 'bg-red-700'
                  },
                  {
                    year: 'Future',
                    title: 'GLOBAL IMPACT',
                    desc: 'Leading Industrial Automation',
                    color: 'bg-[#0f172a]'
                  }
                ].map((item, i) => (
                  <div
                    key={i}
                    className='relative flex items-center gap-8 group'
                  >
                    <div
                      className={`z-10 w-16 h-16 ${item.color} rounded-full flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform`}
                    >
                      <span className='text-[10px] font-black uppercase tracking-tighter'>
                        {item.year}
                      </span>
                    </div>
                    <div className='flex-1 bg-white p-6 rounded-xl border border-gray-100 group-hover:shadow-xl transition-all'>
                      <h3 className='font-black text-[#0f172a] tracking-widest text-xs mb-1'>
                        {item.title}
                      </h3>
                      <p className='text-[10px] text-gray-400 font-bold uppercase tracking-widest'>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 3: WHO WE ARE - Content Rich */}
      
      
      <section className='py-24 bg-[#0f172a] text-white w-full overflow-hidden'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='flex flex-col lg:flex-row items-center gap-20'>
            <div className='flex-1 text-left order-2 lg:order-1'>
              <h1 className='text-red-700 font-black uppercase tracking-[0.4em] mb-4 text-xs'>
                Who We Are
              </h1>
              <h2 className='text-4xl md:text-5xl font-black leading-tight mb-8 uppercase tracking-tighter italic'>
                A New Standard in <br />
                <span className='text-blue-500 not-italic'>
                  Precision Engineering
                </span>
              </h2>

              <div className='space-y-6 text-gray-400 leading-relaxed text-md'>
                <p className='font-bold text-white border-l-4 border-red-700 pl-6 py-2 bg-white/5 uppercase text-xs tracking-widest'>
                  High-performance CNC and precision engineering solutions for
                  modern manufacturing.
                </p>
                <p>
                  Built on technical expertise, i-NAX™ represents a new standard
                  in accuracy, durability, and operational excellence.
                  Engineered to perform consistently under demanding industrial
                  conditions.
                </p>

                <div className='flex flex-wrap gap-4 pt-6'>
                  {['Accuracy', 'Durability', 'Stability'].map(tag => (
                    <span
                      key={tag}
                      className='px-6 py-2 border border-white/20 text-[10px] font-black uppercase tracking-widest hover:bg-red-700 transition-colors cursor-default'
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* --- नवीन READ MORE बटण येथे जोडले आहे --- */}
                <div className='pt-8'>
                  <Link to='/about'>
                    <button className='group flex items-center gap-4 bg-white text-[#0f172a] hover:bg-red-700 hover:text-white px-8 py-4 rounded-sm font-black transition-all duration-300 uppercase text-xs tracking-[0.2em] shadow-xl'>
                      Read More
                      <ArrowRight
                        size={18}
                        className='group-hover:translate-x-2 transition-transform'
                      />
                    </button>
                  </Link>
                </div>
                {/* ------------------------------------------ */}
              </div>
            </div>

            <div className='flex-1 relative order-1 lg:order-2'>
              <div className='relative p-4 border border-white/10 rounded-3xl'>
                <img
                  src='/himages/image1.jpeg'
                  alt='i-NAX Machine Design'
                  className='w-full h-[500px] object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700'
                />
                <div className='absolute -bottom-6 -right-6 bg-red-700 p-8 rounded-sm shadow-2xl'>
                  <p className='text-white font-black uppercase text-xl leading-none'>
                    Built for <br /> Performance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 4: WHAT MAKES US DIFFERENT */}
      <section className='py-24 bg-gray-50 overflow-hidden'>
        <div className='max-w-7xl mx-auto px-4 text-center'>
          <h2 className='text-4xl font-black text-[#0f172a] uppercase tracking-tighter mb-16'>
            What Makes Us <span className='text-red-700'>Different</span>
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-4 gap-px bg-gray-200 border border-gray-200 rounded-3xl overflow-hidden shadow-2xl'>
            {[
              { icon: Cpu, title: 'Advanced CNC', color: 'text-[#1e3a8a]' },
              { icon: Wrench, title: 'Full Support', color: 'text-red-700' },
              { icon: Layout, title: 'Custom Fit', color: 'text-[#0f172a]' },
              { icon: ShieldCheck, title: 'Expertise', color: 'text-[#1e3a8a]' }
            ].map((item, i) => (
              <div
                key={i}
                className='bg-white p-12 hover:bg-[#0f172a] group transition-all duration-500'
              >
                <item.icon
                  className={`${item.color} group-hover:text-white mb-6 mx-auto transition-transform group-hover:rotate-12`}
                  size={40}
                />
                <h3 className='text-[#0f172a] group-hover:text-white font-black uppercase text-xs tracking-widest'>
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* SECTION 5: PRODUCT RANGE */}
      <section className='py-24 bg-white'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='flex justify-between items-end mb-16'>
            <div className='text-left'>
              <h2 className='text-4xl font-black uppercase tracking-tighter text-[#0f172a]'>
                Product Range
              </h2>
              <div className='w-24 h-1 bg-red-700 mt-2'></div>
            </div>
            <Link to='/all-machines' onClick={() => window.scrollTo(0, 0)}>
              <button className='text-xs font-black uppercase tracking-widest text-red-700 flex items-center gap-2 hover:gap-4 transition-all'>
                View All <ArrowRight size={16} />
              </button>
            </Link>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            {[
              {
                title: 'CNC Machines',
                img: '/images/I-NAX CNC Milling Machine Showcase.png'
              },
              {
                title: 'Lathe Machines',
                img: '/images/I-NAX Metal Lathe in Detail.png'
              },
              {
                title: 'Precision Units',
                img: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600'
              },
              {
                title: 'Support Services',
                img: '/images/Contactusimage.jfif'
              }
            ].map((product, i) => (
              <div key={i} className='group cursor-pointer'>
                <div className='relative h-80 overflow-hidden rounded-2xl mb-6'>
                  <img
                    src={product.img}
                    className='w-full h-full  group-hover:scale-110 transition-transform duration-700'
                  />
                  <div className='absolute inset-0 bg-black/20 group-hover:bg-red-700/40 transition-all'></div>
                </div>
                <h3 className='text-sm font-black uppercase tracking-widest text-[#0f172a]'>
                  {product.title}
                </h3>
                <p className='text-[10px] font-bold text-gray-400 uppercase mt-1'>
                  High-Precision Engineering
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* SECTION 6: WHY CHOOSE I-NAX (Modern Diagram Style) */}
      <section className='py-24 bg-gray-50 w-full'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='text-center mb-16'>
            <h1 className='text-4xl font-black text-[#0f172a]  tracking-tighter'>
              WHY CHOOSE <span className='text-red-700'>i-NAX™</span>
            </h1>
          </div>

          <div className='flex flex-col lg:flex-row items-center gap-12'>
            <div className='flex-1 space-y-4'>
              {[
                'Built for Performance',
                'Precision Engineering',
                'Industrial Build Quality',
                'Modern CNC Tech'
              ].map((title, idx) => (
                <div
                  key={idx}
                  className='p-6 bg-white rounded-xl border-r-4 border-transparent hover:border-red-700 shadow-sm transition-all text-right group'
                >
                  <h3 className='font-black text-[#0f172a] uppercase text-xs mb-1 group-hover:text-red-700 transition-colors'>
                    {title}
                  </h3>
                  <p className='text-[10px] text-gray-400 uppercase font-bold tracking-tighter'>
                    Maximum stability & High repeatability
                  </p>
                </div>
              ))}
            </div>

            <div className='flex-1 relative flex justify-center'>
              <div className='relative w-80 h-80 md:w-96 md:h-96 bg-[#0f172a] rounded-full p-2 shadow-2xl overflow-hidden group'>
                <img
                  src='/himages/image2.png'
                  className='w-full h-full object-cover rounded-full opacity-60 group-hover:scale-110 transition-all duration-700'
                  alt='i-NAX Machine'
                />
                <div className='absolute inset-0 flex items-center justify-center'>
                  <span className='text-white font-black text-4xl italic tracking-tighter opacity-20'>
                    i-NAX™
                  </span>
                </div>
              </div>
            </div>

            <div className='flex-1 space-y-4 text-left'>
              {[
                'Trusted Expertise',
                'Application-Focused',
                'Reliable Service',
                'Long-Term Value'
              ].map((title, idx) => (
                <div
                  key={idx}
                  className='p-6 bg-white rounded-xl border-l-4 border-transparent hover:border-[#1e3a8a] shadow-sm transition-all group'
                >
                  <h3 className='font-black text-[#0f172a] uppercase text-xs mb-1 group-hover:text-[#1e3a8a] transition-colors'>
                    {title}
                  </h3>
                  <p className='text-[10px] text-gray-400 uppercase font-bold tracking-tighter'>
                    Reliable support & Industry insight
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 7: TRUST - Dark Grid */}
      <section className='py-20 bg-[#0f172a] w-full border-t border-white/5'>
        <div className='max-w-7xl mx-auto px-6'>
          {/* Title Section - Adjusted for Dark Theme */}
          <div className='mb-12 border-l-4 border-red-700 pl-4'>
            <h2 className='text-3xl md:text-4xl font-black  tracking-tighter text-white'>
              WHY MANUFACTURES{' '}  
              <span className='text-red-700'>TRUST i-NAX™</span>
            </h2>
            <p className='text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1'>
              The Gold Standard in Precision Engineering
            </p>
          </div>

          {/* Compact 4-Column Feature Grid - Dark Cards */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {/* Precision */}
            <div className='flex items-center gap-4 bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all group'>
              <div className='bg-red-700/20 p-3 rounded-lg text-red-600 shrink-0 group-hover:bg-red-700 group-hover:text-white transition-all'>
                <Settings size={24} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className='text-sm font-black uppercase text-white'>
                  Precision
                </h3>
                <p className='text-[11px] font-bold text-gray-500'>
                  Engineered for accuracy.
                </p>
              </div>
            </div>

            {/* Support */}
            <div className='flex items-center gap-4 bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all group'>
              <div className='bg-red-700/20 p-3 rounded-lg text-red-600 shrink-0 group-hover:bg-red-700 group-hover:text-white transition-all'>
                <Wrench size={24} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className='text-sm font-black uppercase text-white'>
                  Reliable Support
                </h3>
                <p className='text-[11px] font-bold text-gray-500'>
                  24/7 Service you can trust.
                </p>
              </div>
            </div>

            {/* Custom */}
            <div className='flex items-center gap-4 bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all group'>
              <div className='bg-red-700/20 p-3 rounded-lg text-red-600 shrink-0 group-hover:bg-red-700 group-hover:text-white transition-all'>
                <ShieldCheck size={24} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className='text-sm font-black uppercase text-white'>
                  Custom Solutions
                </h3>
                <p className='text-[11px] font-bold text-gray-500'>
                  Built to fit your needs.
                </p>
              </div>
            </div>

            {/* Experience */}
            <div className='flex items-center gap-4 bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all group'>
              <div className='bg-red-700/20 p-3 rounded-lg text-red-600 shrink-0 group-hover:bg-red-700 group-hover:text-white transition-all'>
                <Users size={24} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className='text-sm font-black uppercase text-white'>
                  Proven Experience
                </h3>
                <p className='text-[11px] font-bold text-gray-500'>
                  10+ Years of expertise.
                </p>
              </div>
            </div>
          </div>

          {/* Compact CTA Button - Red accent to pop on Dark background */}
          <div className='mt-12 flex justify-center'>
            <Link to='/contact' onClick={() => window.scrollTo(0, 0)}>
              <button className='bg-red-700 text-white px-10 py-3.5 rounded-md font-bold uppercase tracking-widest text-[10px] hover:bg-white hover:text-[#0f172a] transition-all shadow-lg active:scale-95'>
                Talk To Our Experts
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/* SECTION 8: SERVICES - Integrated Hub */}
      <section className='py-20 bg-white w-full'>
        <div className='max-w-7xl mx-auto px-6'>
          {/* Compact Header */}
          <div className='mb-12 border-l-4 border-red-700 pl-4'>
            <h2 className='text-3xl md:text-4xl font-black uppercase tracking-tighter text-[#0f172a]'>
              Our <span className='text-red-700'>Services</span>
            </h2>
            <p className='text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1'>
              Precision Support for Modern Industry
            </p>
          </div>

          {/* Compact 4-Column Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
            {/* Sales */}
            <div className='group bg-[#0f172a] p-6 transition-all hover:-translate-y-2 duration-300 rounded-lg'>
              <Settings
                className='text-red-600 mb-4 group-hover:scale-110 transition-transform'
                size={32}
              />
              <h3 className='text-white font-black uppercase text-sm mb-2'>
                Machinery Sales
              </h3>
              <p className='text-gray-400 text-[11px] leading-relaxed'>
                High-precision CNC & VMC machines.
              </p>
              <div className='w-8 h-1 bg-red-700 mt-4 group-hover:w-full transition-all'></div>
            </div>

            {/* Installation */}
            <div className='group bg-gray-50 p-6 border border-gray-100 transition-all hover:-translate-y-2 duration-300 rounded-lg'>
              <Wrench
                className='text-[#1e3a8a] mb-4 group-hover:scale-110 transition-transform'
                size={32}
              />
              <h3 className='text-[#0f172a] font-black uppercase text-sm mb-2'>
                Installation
              </h3>
              <p className='text-gray-500 text-[11px] leading-relaxed'>
                Expert setup and onsite calibration.
              </p>
              <div className='w-8 h-1 bg-[#1e3a8a] mt-4 group-hover:w-full transition-all'></div>
            </div>

            {/* Maintenance */}
            <div className='group bg-gray-50 p-6 border border-gray-100 transition-all hover:-translate-y-2 duration-300 rounded-lg'>
              <ShieldCheck
                className='text-[#1e3a8a] mb-4 group-hover:scale-110 transition-transform'
                size={32}
              />
              <h3 className='text-[#0f172a] font-black uppercase text-sm mb-2'>
                Maintenance
              </h3>
              <p className='text-gray-500 text-[11px] leading-relaxed'>
                Annual contracts and preventive care.
              </p>
              <div className='w-8 h-1 bg-[#1e3a8a] mt-4 group-hover:w-full transition-all'></div>
            </div>

            {/* Spare Parts */}
            <div className='group bg-[#0f172a] p-6 transition-all hover:-translate-y-2 duration-300 rounded-lg'>
              <Users
                className='text-red-600 mb-4 group-hover:scale-110 transition-transform'
                size={32}
              />
              <h3 className='text-white font-black uppercase text-sm mb-2'>
                Spare Parts
              </h3>
              <p className='text-gray-400 text-[11px] leading-relaxed'>
                Genuine components and fast supply.
              </p>
              <div className='w-8 h-1 bg-red-700 mt-4 group-hover:w-full transition-all'></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

/* Internal Components for consistent styling */
const ServiceCard = ({ Icon, title, align, border }) => (
  <div
    className={`bg-gray-50 p-6 rounded-xl ${border} ${align} hover:bg-[#0f172a] hover:text-white transition-all group`}
  >
    <div
      className={`flex ${
        align === 'text-right' ? 'justify-end' : 'justify-start'
      } mb-3 text-red-700`}
    >
      <Icon size={24} className='group-hover:text-white' />
    </div>
    <h3 className='font-black uppercase text-[10px] tracking-widest'>
      {title}
    </h3>
  </div>
)

const FeatureBox = ({ Icon, title, desc }) => (
  <div className='flex flex-col items-center group'>
    <div className='w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mb-6 border border-white/10 group-hover:bg-red-700 group-hover:border-red-700 transition-all duration-500'>
      <Icon
        className='text-red-700 group-hover:text-white transition-colors'
        size={32}
        strokeWidth={1.5}
      />
    </div>
    <h4 className='font-black text-white text-sm mb-2 uppercase tracking-widest'>
      {title}
    </h4>
    <p className='text-[10px] text-gray-500 font-bold uppercase tracking-tighter'>
      {desc}
    </p>
  </div>
)

export default Inax
