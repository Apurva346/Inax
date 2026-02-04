


import TopHeader from './TopHeader'
import DropdownMenu from './DropdownMenu'
import { useState } from 'react'
import { Menu, X, ChevronRight, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [mobileMachinesOpen, setMobileMachinesOpen] = useState(false) // मशिन लिस्टसाठी नवीन स्टेट

  const fabrication = [
    "Multi Spindle Router Machine", "Modern I-NAX CNC Lathe Machine", 
    "I-NAX Vertical machine center", "i-NAX Open Body Laser Cutting Machine", "i-NAX Closed Body Laser Cutting Machine",
    "I-NAX Radial drilling machine", "I-NAX Milling machine", 
    "I-NAX Laser marking workstation design", "I-NAX Industrial press brake machine", 
    "I-NAX CNC Router with controller", "I-NAX CNC Router precision machinery", 
    "I-NAX CNC Router machine setup", "I-NAX CNC Milling machine showcase",
    "I-KRAFT CNC Router System", "I-KRAFT 5-axis CNC Router & control",
    "I-KRAFT 3D statue maker machine", "I-NAX Metal Lathe Machine"  
  ].map(name => ({ 
    name, 
    link: `/machine/${name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}` 
  }));

  return (
    <header className='w-full relative z-[100]'>
      <TopHeader />
      <nav className='bg-white/95 backdrop-blur-md sticky top-0 border-b border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)]'>
        <div className='max-w-7xl mx-auto px-6 flex justify-between items-center h-24'>
          
          {/* LOGO SECTION */}
          <Link to='/' className='shrink-0 flex items-center gap-4 group'>
            <div className="relative">
              <img 
                src="/images/logo.png" 
                alt="I-NAX Precision" 
                className="h-23 w-auto object-contain group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
            {/* <div className="flex flex-col border-l-2 pl-4 border-gray-100 py-1">
               <span className="text-2xl font-black text-[#0f172a] leading-none tracking-tighter">i-NAX™</span>
               <span className="text-[10px] font-extrabold text-red-700 uppercase tracking-[0.2em] mt-1">Precision Industries</span>
            </div> */}
          </Link>

          {/* Desktop Menu */}
          <div className='hidden lg:flex gap-10 items-center'>
            <NavLink to='/' label='Home' />
            <div className="relative group py-8">
                <DropdownMenu title='Machines' items={fabrication} />
            </div>
            <NavLink to='/all-machines' label='i-NAX' />
            <NavLink to='/about' label='About i-Nax' />
          </div>

          {/* Right Section */}
          <div className='flex items-center gap-5'>
            <Link to='/contact' className='hidden lg:block'>
              <button className='bg-red-700 text-white px-8 py-3 rounded-md font-bold hover:bg-[#0f172a] transition-all duration-300 uppercase text-[11px] tracking-widest shadow-lg shadow-red-700/20 active:scale-95'>
                Contact Us
              </button>
            </Link>
            
            <button className='lg:hidden p-2.5 bg-gray-50 rounded-lg text-gray-900 border border-gray-200' onClick={() => setMobileMenu(!mobileMenu)}>
              {mobileMenu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU - IMPROVED */}
        {mobileMenu && (
          <div className='lg:hidden bg-white border-t absolute w-full left-0 shadow-2xl h-[calc(100vh-150px)] overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-300'>
            <div className='flex flex-col p-6 space-y-1'>
              
              <MobileNavLink to='/' label='Home' onClick={() => setMobileMenu(false)} />

              {/* MOBILE MACHINES ACCORDION */}
              <div>
                <button 
                  onClick={() => setMobileMachinesOpen(!mobileMachinesOpen)}
                  className='flex items-center justify-between w-full font-bold p-4 uppercase text-xs text-gray-800 hover:bg-gray-50 rounded-lg border-b border-gray-50'
                >
                  Machines 
                  {mobileMachinesOpen ? <ChevronDown size={16} className="text-red-700" /> : <ChevronRight size={16} className="text-gray-300" />}
                </button>
                
                {mobileMachinesOpen && (
                  <div className='bg-gray-50/50 rounded-lg mt-1 mb-2 ml-2 border-l-2 border-red-700'>
                    {fabrication.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.link}
                        onClick={() => setMobileMenu(false)}
                        className='block p-3.5 pl-6 text-[11px] font-semibold text-gray-600 border-b border-gray-100 last:border-0 hover:text-red-700'
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <MobileNavLink to='/all-machines' label='i-NAX' onClick={() => setMobileMenu(false)} />
              <MobileNavLink to='/about' label='About Us' onClick={() => setMobileMenu(false)} />
              
              <Link 
                to='/contact' 
                onClick={() => setMobileMenu(false)} 
                className='flex items-center justify-between font-black p-4 mt-4 uppercase text-xs bg-red-700 text-white rounded-lg shadow-lg shadow-red-700/20'
              >
                Contact Us <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

const NavLink = ({ to, label }) => (
  <Link 
    to={to} 
    className='relative text-[#0f172a] font-bold uppercase text-[11px] tracking-[0.15em] transition-all hover:text-red-700'
  >
    {label}
  </Link>
)

const MobileNavLink = ({ to, label, onClick }) => (
  <Link 
    to={to} 
    onClick={onClick} 
    className='flex items-center justify-between font-bold p-4 uppercase text-xs text-gray-800 hover:bg-gray-50 rounded-lg border-b border-gray-50'
  >
    {label} <ChevronRight size={14} className="text-gray-300" />
  </Link>
)

export default Navbar;