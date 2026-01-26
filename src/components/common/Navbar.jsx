

// import TopHeader from './TopHeader'
// import DropdownMenu from './DropdownMenu'
// import { useState } from 'react'
// import { Menu, X } from 'lucide-react'
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//   const [mobileMenu, setMobileMenu] = useState(false)

//   const fabrication = [
//     "Multi-Spindle Router Machine Display", "Modern I-NAX CNC Lathe Machine", "Logo", 
//     "Laser Machine (2)", "I-NAX VMC with tinted windows", "I-NAX Vertical machining center", 
//     "I-NAX Radial drilling machine close-up", "I-NAX Milling machine in detail", 
//     "I-NAX Laser marking workstation design", "I-NAX Industrial press brake machine", 
//     "I-NAX CNC Router with controller", "I-NAX CNC Router precision machinery", 
//     "I-NAX CNC Router machine setup", "I-NAX CNC Milling machine showcase",
//     "I-KRAFT CNC Router system", "I-KRAFT 5-axis CNC Router & control",
//     "I-KRAFT 3D statue maker machine", "Closed body laser"  
//   ].map(name => ({ 
//     name, 
//     link: `/machine/${name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}` 
//   }));

//   return (
//     <header className='w-full relative z-50'>
//       <TopHeader />
//       <nav className='bg-white border-b sticky top-0 shadow-sm'>
//         <div className='max-w-7xl mx-auto px-4 flex justify-between items-center h-20'>
          
//           {/* LOGO SECTION - Common Image Used Here */}
//           <Link to='/' className='shrink-0 flex items-center gap-3 group'>
//             <img 
//               src="/images/logo.png" 
//               alt="I-NAX Precision" 
//               className="h-14 w-auto object-contain" 
//             />
//             <div className="hidden md:flex flex-col border-l pl-3 border-gray-200">
//                <span className="text-xl font-black text-[#1e3a8a] leading-none">i-NAX™</span>
//                <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Precision Industries</span>
//             </div>
//           </Link>

//           {/* Desktop Menu */}
//           <div className='hidden lg:flex gap-8 items-center'>
//             <Link to='/' className='hover:text-red-700 font-bold uppercase text-[12px] tracking-wider transition-colors'>Home</Link>
//             <DropdownMenu title='Products' items={fabrication} />
//             <Link to='/i-nax' className='hover:text-red-700 font-bold uppercase text-[12px] tracking-wider transition-colors'>i-NAX</Link>
//             <Link to='/about' className='hover:text-red-700 font-bold uppercase text-[12px] tracking-wider transition-colors'>About Us</Link>
//           </div>

//           {/* Right Section */}
//           <div className='flex items-center gap-4'>
//             <Link to='/contact' className='hidden sm:block'>
//               <button className='bg-[#1e3a8a] text-white px-6 py-2.5 rounded font-bold hover:bg-red-700 transition-all uppercase text-xs tracking-widest shadow-md'>
//                 Contact Us
//               </button>
//             </Link>
//             <button className='lg:hidden p-2 text-gray-800' onClick={() => setMobileMenu(!mobileMenu)}>
//               {mobileMenu ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {mobileMenu && (
//           <div className='lg:hidden bg-white border-t absolute w-full left-0 shadow-xl max-h-[80vh] overflow-y-auto'>
//             <div className='flex flex-col p-4 space-y-4'>
//               <Link to='/' onClick={() => setMobileMenu(false)} className='font-bold border-b pb-2 uppercase text-sm text-gray-800'>Home</Link>
//               <Link to='/i-nax' onClick={() => setMobileMenu(false)} className='font-bold border-b pb-2 uppercase text-sm text-gray-800'>i-NAX</Link>
//               <Link to='/about' onClick={() => setMobileMenu(false)} className='font-bold border-b pb-2 uppercase text-sm text-gray-800'>About Us</Link>
//               <Link to='/contact' onClick={() => setMobileMenu(false)} className='font-bold border-b pb-2 uppercase text-sm text-red-700'>Contact Us</Link>
//             </div>
//           </div>
//         )}
//       </nav>
//     </header>
//   )
// }

// export default Navbar;


import TopHeader from './TopHeader'
import DropdownMenu from './DropdownMenu'
import { useState } from 'react'
import { Menu, X, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false)

  const fabrication = [
    "Multi-Spindle Router Machine Display", "Modern I-NAX CNC Lathe Machine", 
    "Laser Machine (2)", "I-NAX VMC with tinted windows", "I-NAX Vertical machining center", 
    "I-NAX Radial drilling machine close-up", "I-NAX Milling machine in detail", 
    "I-NAX Laser marking workstation design", "I-NAX Industrial press brake machine", 
    "I-NAX CNC Router with controller", "I-NAX CNC Router precision machinery", 
    "I-NAX CNC Router machine setup", "I-NAX CNC Milling machine showcase",
    "I-KRAFT CNC Router system", "I-KRAFT 5-axis CNC Router & control",
    "I-KRAFT 3D statue maker machine", "Closed body laser"  
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
                className="h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
            <div className="flex flex-col border-l-2 pl-4 border-gray-100 py-1">
               <span className="text-2xl font-black text-[#0f172a] leading-none tracking-tighter">i-NAX™</span>
               <span className="text-[10px] font-extrabold text-red-700 uppercase tracking-[0.2em] mt-1">Precision Industries</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className='hidden lg:flex gap-10 items-center'>
            <NavLink to='/i-nax' label='Home' />
            <div className="relative group py-8">
                <DropdownMenu title='Products' items={fabrication} />
            </div>
            <NavLink to='/i-nax' label='i-NAX' />
            <NavLink to='/about' label='About Us' />
          </div>

          {/* Right Section: Call to Action */}
          <div className='flex items-center gap-5'>
            <Link to='/contact' className='hidden sm:block'>
              <button className='bg-red-700 text-white px-8 py-3 rounded-md font-bold hover:bg-[#0f172a] transition-all duration-300 uppercase text-[11px] tracking-widest shadow-lg shadow-red-700/20 active:scale-95'>
                Contact Us
              </button>
            </Link>
            
            {/* Mobile Toggle */}
            <button className='lg:hidden p-2.5 bg-gray-50 rounded-lg text-gray-900 border border-gray-200' onClick={() => setMobileMenu(!mobileMenu)}>
              {mobileMenu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Improved UI */}
        {mobileMenu && (
          <div className='lg:hidden bg-white border-t absolute w-full left-0 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300'>
            <div className='flex flex-col p-6 space-y-2'>
              <MobileNavLink to='/i-nax' label='Home' onClick={() => setMobileMenu(false)} />
              <MobileNavLink to='/i-nax' label='i-NAX' onClick={() => setMobileMenu(false)} />
              <MobileNavLink to='/about' label='About Us' onClick={() => setMobileMenu(false)} />
              <Link 
                to='/contact' 
                onClick={() => setMobileMenu(false)} 
                className='flex items-center justify-between font-black p-4 uppercase text-xs bg-red-50 text-red-700 rounded-lg'
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

// Helper Components for clean code
const NavLink = ({ to, label }) => (
  <Link 
    to={to} 
    className='relative text-[#0f172a] font-bold uppercase text-[11px] tracking-[0.15em] transition-all hover:text-red-700 after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-red-700 after:transition-all hover:after:w-full'
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