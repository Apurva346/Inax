import React from 'react'
import {
  Award,
  Factory,
  Globe,
  Users,
  PlayCircle,
  ArrowRight
} from 'lucide-react'

const AboutUs = () => {
  return (
    <div className='w-full bg-white'>
      {/* SECTION 1: TOP CONTENT (WHO WE ARE) */}
      <section className='py-20 px-4 max-w-7xl mx-auto'>
        <div className='flex flex-col lg:flex-row gap-12 items-start'>
          {/* Left Side: Headings */}
          <div className='lg:w-1/3'>
            <h4 className='text-red-600 font-bold uppercase tracking-widest text-sm mb-2'>
              Who We Are
            </h4>
            <h2 className='text-4xl md:text-5xl font-black text-blue-900 leading-tight mb-4'>
              I-NAX™ Precision <br /> Industries
            </h2>
            <p className='text-gray-700 font-bold text-lg mb-8'>
              I-NAX™ formerly known as <br />
              <span className='text-blue-800'>
                Mech Chem Engineering Services.
              </span>
            </p>

            <div className='flex flex-wrap gap-4 items-center'>
              <button className='bg-red-600 text-white px-8 py-3 rounded-md font-bold flex items-center gap-2 hover:bg-red-700 transition-all uppercase text-sm'>
                About Us <ArrowRight size={18} />
              </button>
              <button className='flex items-center gap-2 text-blue-900 font-bold hover:text-red-600 transition-colors uppercase text-sm'>
                <PlayCircle size={40} className='text-blue-600' /> See Video
              </button>
            </div>
          </div>

          {/* Right Side: Description */}
          <div className='lg:w-2/3 space-y-6 text-gray-600 leading-relaxed text-base'>
            <p>
              <strong>I-NAX™ Precision Industries</strong> are manufacturers of
              high-performance CNC machines, lathe machines, and specialized
              industrial equipment. With over a decade of experience, we provide
              solutions serving a wide range of industries including automotive,
              aerospace, metalworking, woodworking, and modern fabrication
              units.
            </p>
            <p>
              Our team of dedicated professionals is committed to customer
              satisfaction through reliable support, technical guidance, and
              engineering excellence. Headquartered with a robust presence
              across India, we have established 15+ manufacturing support
              centers to prioritize innovation and a customer-centric approach
              to empower businesses.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: STATS/EXPERTISE CARDS (AS PER SCREENSHOT) */}
      <section className='border-t border-gray-100 py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {/* Expertise */}
            <div className='flex flex-col items-start p-4 border-r-0 lg:border-r border-gray-200 last:border-0'>
              <Award
                className='text-blue-600 mb-6'
                size={48}
                strokeWidth={1.5}
              />
              <h3 className='text-2xl font-black text-gray-900 mb-3 tracking-tight'>
                12+ Years of Expertise
              </h3>
              <p className='text-gray-500 text-sm leading-relaxed'>
                Trusted track record since 2012 in CNC, Lathe, and Precision
                Industrial Solutions.
              </p>
            </div>

            {/* Manufacturing */}
            <div className='flex flex-col items-start p-4 border-r-0 lg:border-r border-gray-200 last:border-0'>
              <Factory
                className='text-blue-600 mb-6'
                size={48}
                strokeWidth={1.5}
              />
              <h3 className='text-2xl font-black text-gray-900 mb-3 tracking-tight'>
                Manufacturing Power
              </h3>
              <p className='text-gray-500 text-sm leading-relaxed'>
                Modern facility across strategic locations with ISO-certified
                manufacturing standards.
              </p>
            </div>

            {/* Presence */}
            <div className='flex flex-col items-start p-4 border-r-0 lg:border-r border-gray-200 last:border-0'>
              <Globe
                className='text-blue-600 mb-6'
                size={48}
                strokeWidth={1.5}
              />
              <h3 className='text-2xl font-black text-gray-900 mb-3 tracking-tight'>
                National Presence
              </h3>
              <p className='text-gray-500 text-sm leading-relaxed'>
                Serving 20+ states with a strong distributor and reliable
                service support network.
              </p>
            </div>

            {/* Team */}
            <div className='flex flex-col items-start p-4 border-r-0 lg:border-r border-gray-200 last:border-0'>
              <Users
                className='text-blue-600 mb-6'
                size={48}
                strokeWidth={1.5}
              />
              <h3 className='text-2xl font-black text-gray-900 mb-3 tracking-tight'>
                Expert Team Members
              </h3>
              <p className='text-gray-500 text-sm leading-relaxed'>
                A skilled workforce powering innovation, precision service, and
                technical support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: MISSION & VISION */}
      <section className='py-20 bg-gray-50 px-4'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            {/* OUR MISSION */}
            <div className='bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-start group hover:shadow-md transition-all'>
              <div className='bg-red-50 p-4 rounded-2xl mb-6 group-hover:bg-red-600 transition-colors'>
                <Award
                  className='text-red-600 group-hover:text-white'
                  size={32}
                />
              </div>
              <h3 className='text-3xl font-black text-blue-900 mb-4'>
                Our Mission
              </h3>
              <p className='text-gray-600 leading-relaxed text-lg'>
                To deliver high-performance CNC and precision industrial
                machinery that empowers manufacturers with accuracy,
                reliability, and long-term value—supported by expert service and
                engineering excellence.
              </p>
            </div>

            {/* OUR VISION */}
            <div className='bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-start group hover:shadow-md transition-all'>
              <div className='bg-blue-50 p-4 rounded-2xl mb-6 group-hover:bg-blue-800 transition-colors'>
                <Globe
                  className='text-blue-800 group-hover:text-white'
                  size={32}
                />
              </div>
              <h3 className='text-3xl font-black text-blue-900 mb-4'>
                Our Vision
              </h3>
              <p className='text-gray-600 leading-relaxed text-lg'>
                To become a trusted leader in advanced industrial machinery by
                setting new standards in precision, innovation, and customer
                support—driving the future of modern manufacturing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: BOTTOM SLOGAN (Optional) */}
      <div className='bg-blue-900 py-4 text-center'>
        <p className='text-white/80 text-sm italic tracking-widest uppercase'>
          "I-NAX™ machines aren't just built—they're engineered for excellence."
        </p>
      </div>
    </div>
  )
}

export default AboutUs
