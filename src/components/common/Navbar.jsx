// import DropdownMenu from './DropdownMenu'
// import { useState } from 'react'
// import { Menu, X, ChevronRight, ChevronDown } from 'lucide-react'
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//   const [mobileMenu, setMobileMenu] = useState(false)
//   const [mobileMachinesOpen, setMobileMachinesOpen] = useState(false)

//   const fabrication = [
//   {
//     category: 'Laser Machines',
//     subItems: [
//       'Fiber Laser Cutting Machine', 'Closed Body Fiber Laser Cutting Machine',
//       'Open Body Fiber Laser Cutting Machine', 'CNC Laser Pipe & Tube Cutting Machine',
//       'CO₂ Laser Cutting Machine', 'Crystal Laser Cutting Machine',
//       'Laser Marking Workstation Design Machine'
//     ]
//   },
//   {
//     category: 'Sheet Metal & Bending',
//     subItems: ['CNC Press Brake Machine', 'CNC Shearing Machine']
//   },
//   {
//     category: 'CNC Router Machines',
//     subItems: [
//       'CNC Router Machine', 'Multi Spindle CNC Router Machine',
//       '5-Axis CNC Router Machine', '3D Statue Maker CNC Router Machine'
//     ]
//   },
//   {
//     category: 'CNC Machining & Lathes',
//     subItems: [
//       'Vertical Machining Center (VMC)', 'VMC with Tinted Windows',
//       'CNC Lathe Machine', 'Metal Lathe Machine'
//     ]
//   },
//   {
//     category: 'Other CNC Solutions',
//     subItems: [
//       'CNC Milling Machine', 'Conventional Milling Machine',
//       'CNC Plasma Cutting Machine', 'CNC Engraving Machine'
//     ]
//   }
// ].map(name => ({
//     name,
//     link: `/machine/${name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`
//   }))

//   return (
//     <>
//       <header className="fixed top-0 left-0 w-full z-[999]">
//         <nav className="bg-[#f9fafb] shadow-[0_10px_35px_rgba(0,0,0,0.15)] border-b border-gray-200">
//           <div className="max-w-7xl mx-auto  flex justify-between items-center h-24">

//             {/* LOGO */}
//             <Link to="/" className="flex items-center group">
//               <img
//                 src="/himages/newlogo2.png"
//                 alt="I-NAX Precision"
//                 className="h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-md"
//               />
//             </Link>

//             {/* DESKTOP MENU */}
//             <div className="hidden lg:flex gap-10 items-center">
//               <NavLink to="/" label="HOME" />
//               <div className="relative group py-6">
//                 <DropdownMenu title="Machines" items={fabrication} />
//               </div>
//               <NavLink to="/all-machines" label="i-NAX™" />
//               <NavLink to="/about" label="ABOUT i-NAX™" />
//               <NavLink to="/why-choose-us" label="WHY CHOOSE i-NAX™" />
//             </div>

//             {/* RIGHT SECTION */}
//             <div className="flex items-center gap-6">
//               <Link to="/contact" className="hidden lg:block">
//                 <button className="bg-[#b91c1c] text-white px-7 py-2.5 rounded-full font-semibold uppercase text-[11px] tracking-[0.15em] hover:bg-black transition-all duration-300 shadow-lg">
//                   Contact Us
//                 </button>
//               </Link>

//               {/* MOBILE TOGGLE - FIXED ICON COLOR */}
//               <button
//                 className="lg:hidden p-2.5 bg-gray-100 rounded-lg text-[#111827] border border-gray-200 hover:bg-gray-200 transition"
//                 onClick={() => setMobileMenu(!mobileMenu)}
//               >
//                 {mobileMenu ? <X size={28} /> : <Menu size={28} />}
//               </button>
//             </div>
//           </div>

//           {/* MOBILE MENU - MATCHING DESKTOP ORDER */}
//           {mobileMenu && (
//             <div className="lg:hidden bg-white border-t border-gray-200 shadow-2xl h-[calc(100vh-96px)] overflow-y-auto">
//               <div className="flex flex-col p-6 space-y-1">
                
//                 {/* 1. HOME */}
//                 <MobileNavLink to="/" label="HOME" onClick={() => setMobileMenu(false)} />

//                 {/* 2. MACHINES DROPDOWN */}
//                 <div className="border-b border-gray-100 last:border-0">
//                   <button
//                     onClick={() => setMobileMachinesOpen(!mobileMachinesOpen)}
//                     className="flex items-center justify-between w-full font-bold p-4 uppercase text-[12px] text-gray-800 hover:bg-gray-50 rounded-lg transition-colors"
//                   >
//                     Machines
//                     {mobileMachinesOpen ? <ChevronDown size={18} className="text-[#b91c1c]" /> : <ChevronRight size={18} />}
//                   </button>

//                   {mobileMachinesOpen && (
//                     <div className="bg-gray-50 rounded-xl mt-1 mb-4 ml-4 border-l-2 border-[#b91c1c]">
//                       {fabrication.map((item, idx) => (
//                         <Link
//                           key={idx}
//                           to={item.link}
//                           onClick={() => setMobileMenu(false)}
//                           className="block p-4 pl-6 text-[11px] font-semibold text-gray-600 hover:text-[#b91c1c] border-b border-gray-100 last:border-0"
//                         >
//                           {item.name}
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>

//                 {/* 3. i-NAX */}
//                 <MobileNavLink to="/all-machines" label="i-NAX" onClick={() => setMobileMenu(false)} />

//                 {/* 4. ABOUT i-NAX */}
//                 <MobileNavLink to="/about" label="ABOUT i-NAX" onClick={() => setMobileMenu(false)} />

//                 {/* 5. WHY CHOOSE i-NAX */}
//                 <MobileNavLink to="/why-choose-us" label="WHY CHOOSE i-NAX" onClick={() => setMobileMenu(false)} />

//                 {/* 6. CONTACT US BUTTON */}
//                 <Link
//                   to="/contact"
//                   onClick={() => setMobileMenu(false)}
//                   className="flex items-center justify-center gap-3 font-bold p-5 mt-6 uppercase text-[12px] bg-[#b91c1c] text-white rounded-xl shadow-lg active:scale-95 transition-transform"
//                 >
//                   Contact Us <ChevronRight size={18} />
//                 </Link>
//               </div>
//             </div>
//           )}
//         </nav>
//       </header>

//       {/* OFFSET FOR FIXED HEADER */}
//       <div className="h-24"></div>
//     </>
//   )
// }

// /* DESKTOP LINK COMPONENT */
// const NavLink = ({ to, label }) => (
//   <Link
//     to={to}
//     className="relative text-[#111827] hover:text-[#b91c1c] font-bold text-[12px] tracking-[0.15em] py-2 transition-colors after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#b91c1c] after:transition-all after:duration-300 hover:after:w-full"
//   >
//     {label}
//   </Link>
// )

// /* MOBILE LINK COMPONENT - UPDATED STYLING */
// const MobileNavLink = ({ to, label, onClick }) => (
//   <Link
//     to={to}
//     onClick={onClick}
//     className="flex items-center justify-between font-bold p-4 uppercase text-[12px] text-gray-800 hover:bg-gray-50 border-b border-gray-100 last:border-0 rounded-lg transition-colors"
//   >
//     {label} <ChevronRight size={16} className="text-gray-300" />
//   </Link>
// )

// export default Navbar



import DropdownMenu from './DropdownMenu'
import { useState } from 'react'
import { Menu, X, ChevronRight, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [mobileMachinesOpen, setMobileMachinesOpen] = useState(false)

  const fabrication = [
    {
      category: 'Laser Machines',
      subItems: [
        'Fiber Laser Cutting Machine', 'Closed Body Fiber Laser Cutting Machine',
        'Open Body Fiber Laser Cutting Machine', 'CNC Laser Pipe & Tube Cutting Machine',
        'CO₂ Laser Cutting Machine', 'Crystal Laser Cutting Machine',
        'Laser Marking Workstation Design Machine'
      ]
    },
    {
      category: 'Sheet Metal & Bending',
      subItems: ['CNC Press Brake Machine', 'CNC Shearing Machine']
    },
    {
      category: 'CNC Router Machines',
      subItems: [
        'CNC Router Machine', 'Multi Spindle CNC Router Machine',
        '5-Axis CNC Router Machine', '3D Statue Maker CNC Router Machine'
      ]
    },
    {
      category: 'CNC Machining & Lathes',
      subItems: [
        'Vertical Machining Center (VMC)', 'VMC with Tinted Windows',
        'CNC Lathe Machine', 'Metal Lathe Machine'
      ]
    },
    {
      category: 'Other CNC Solutions',
      subItems: [
        'CNC Milling Machine', 'Conventional Milling Machine',
        'CNC Plasma Cutting Machine', 'CNC Engraving Machine'
      ]
    }
  ];

  // Mobile menu sathi flat list logic
  const allMachinesMobile = fabrication.flatMap(section => 
    section.subItems.map(item => ({
      name: item,
      link: `/machine/${item.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`
    }))
  );

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[999]">
        <nav className="bg-[#f9fafb] shadow-[0_10px_35px_rgba(0,0,0,0.15)] border-b border-gray-200">
          <div className="max-w-7xl mx-auto flex justify-between items-center h-24 px-4">

            {/* LOGO */}
            <Link to="/" className="flex items-center group">
              <img
                src="/himages/newlogo2.png"
                alt="I-NAX Precision"
                className="h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-md"
              />
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex gap-8 items-center">
              <NavLink to="/" label="HOME" />
              <div className="relative">
                <DropdownMenu title="Machines" items={fabrication} />
              </div>
              <NavLink to="/all-machines" label="i-NAX™" />
              <NavLink to="/about" label="ABOUT i-NAX™" />
              <NavLink to="/why-choose-us" label="WHY CHOOSE i-NAX™" />
            </div>

            {/* RIGHT SECTION */}
            <div className="flex items-center gap-6">
              <Link to="/contact" className="hidden lg:block">
                <button className="bg-[#b91c1c] text-white px-7 py-2.5 rounded-full font-semibold uppercase text-[11px] tracking-[0.15em] hover:bg-black transition-all duration-300 shadow-lg">
                  Contact Us
                </button>
              </Link>

              {/* MOBILE TOGGLE */}
              <button
                className="lg:hidden p-2.5 bg-gray-100 rounded-lg text-[#111827] border border-gray-200"
                onClick={() => setMobileMenu(!mobileMenu)}
              >
                {mobileMenu ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* MOBILE MENU */}
          {mobileMenu && (
            <div className="lg:hidden bg-white border-t border-gray-200 shadow-2xl h-[calc(100vh-96px)] overflow-y-auto">
              <div className="flex flex-col p-6 space-y-1">
                <MobileNavLink to="/" label="HOME" onClick={() => setMobileMenu(false)} />

                {/* MACHINES MOBILE DROPDOWN */}
                <div className="border-b border-gray-100">
                  <button
                    onClick={() => setMobileMachinesOpen(!mobileMachinesOpen)}
                    className="flex items-center justify-between w-full font-bold p-4 uppercase text-[12px] text-gray-800 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    Machines
                    {mobileMachinesOpen ? <ChevronDown size={18} className="text-[#b91c1c]" /> : <ChevronRight size={18} />}
                  </button>

                  {mobileMachinesOpen && (
                    <div className="bg-gray-50 rounded-xl mt-1 mb-4 ml-4 border-l-2 border-[#b91c1c]">
                      {allMachinesMobile.map((item, idx) => (
                        <Link
                          key={idx}
                          to={item.link}
                          onClick={() => setMobileMenu(false)}
                          className="block p-4 pl-6 text-[11px] font-semibold text-gray-600 hover:text-[#b91c1c] border-b border-gray-100 last:border-0"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <MobileNavLink to="/all-machines" label="i-NAX" onClick={() => setMobileMenu(false)} />
                <MobileNavLink to="/about" label="ABOUT i-NAX" onClick={() => setMobileMenu(false)} />
                <MobileNavLink to="/why-choose-us" label="WHY CHOOSE i-NAX" onClick={() => setMobileMenu(false)} />
                
                <Link
                  to="/contact"
                  onClick={() => setMobileMenu(false)}
                  className="flex items-center justify-center gap-3 font-bold p-5 mt-6 uppercase text-[12px] bg-[#b91c1c] text-white rounded-xl shadow-lg"
                >
                  Contact Us <ChevronRight size={18} />
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>
      <div className="h-24"></div>
    </>
  )
}

const NavLink = ({ to, label }) => (
  <Link
    to={to}
    className="relative text-[#111827] hover:text-[#b91c1c] font-bold text-[12px] tracking-[0.15em] py-2 transition-colors after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#b91c1c] after:transition-all after:duration-300 hover:after:w-full"
  >
    {label}
  </Link>
)

const MobileNavLink = ({ to, label, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="flex items-center justify-between font-bold p-4 uppercase text-[12px] text-gray-800 hover:bg-gray-50 border-b border-gray-100 last:border-0 rounded-lg transition-colors"
  >
    {label} <ChevronRight size={16} className="text-gray-300" />
  </Link>
)

export default Navbar