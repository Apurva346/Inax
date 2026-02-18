import DropdownMenu from './DropdownMenu'
import { useState } from 'react'
import { Menu, X, ChevronRight, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [mobileMachinesOpen, setMobileMachinesOpen] = useState(false)

  const fabrication = [
    'Multi Spindle Router Machine', 'Modern I-NAX CNC Lathe Machine',
    'I-NAX Vertical machine center', 'i-NAX Open Body Laser Cutting Machine',
    'i-NAX Closed Body Laser Cutting Machine', 'I-NAX Radial drilling machine',
    'I-NAX Milling machine', 'I-NAX Laser marking workstation design',
    'I-NAX Industrial press brake machine', 'I-NAX CNC Router with controller',
    'I-NAX CNC Router precision machinery', 'I-NAX CNC Router machine setup',
    'I-NAX CNC Milling machine showcase', 'I-KRAFT CNC Router System',
    'I-KRAFT 5-axis CNC Router & control', 'I-KRAFT 3D statue maker machine',
    'I-NAX Metal Lathe Machine'
  ].map(name => ({
    name,
    link: `/machine/${name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`
  }))

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[999]">
        <nav className="
          bg-[#f9fafb]

          shadow-[0_10px_35px_rgba(0,0,0,0.35)]
          border-b border-white/10
        ">
          <div className="max-w-7xl mx-auto px-8 flex justify-between items-center h-24">

            {/* LOGO */}
            <Link to="/" className="flex items-center group">
              <img
                src="/images/logo-removebg-preview.png"
                alt="I-NAX Precision"
                className="h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-lg"
              />
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex gap-12 items-center">
              <NavLink to="/" label="Home" />
              <div className="relative group py-6">
                <DropdownMenu title="Machines" items={fabrication} />
              </div>
              <NavLink to="/all-machines" label="i-NAX" />
              <NavLink to="/about" label="About i-NAX" />
              <NavLink to="/why-choose-us" label="Why Choose i-NAX" />
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-6">
              <Link to="/contact" className="hidden lg:block">
                <button className="
                  bg-white text-[#b91c1c]
                  px-7 py-2.5 rounded-full
                  font-semibold uppercase text-[11px]
                  tracking-[0.15em]
                  hover:bg-black hover:text-white
                  transition-all duration-300
                  shadow-lg
                ">
                  Contact Us
                </button>
              </Link>

              <button
                className="lg:hidden p-2.5 bg-white/15 rounded-lg text-white border border-white/20 hover:bg-white/25 transition"
                onClick={() => setMobileMenu(!mobileMenu)}
              >
                {mobileMenu ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* MOBILE MENU */}
          {mobileMenu && (
            <div className="lg:hidden bg-[#b91c1c] border-t border-white/10 shadow-2xl h-[calc(100vh-80px)] overflow-y-auto transition-all duration-300">
              <div className="flex flex-col p-8 space-y-3">
                <MobileNavLink to="/" label="Home" onClick={() => setMobileMenu(false)} />

                <div>
                  <button
                    onClick={() => setMobileMachinesOpen(!mobileMachinesOpen)}
                    className="flex items-center justify-between w-full font-semibold p-4 uppercase text-[12px] text-white hover:bg-white/10 rounded-lg"
                  >
                    Machines
                    {mobileMachinesOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                  </button>

                  {mobileMachinesOpen && (
                    <div className="bg-black/20 rounded-lg mt-2 mb-4 ml-4 border-l-2 border-white/40">
                      {fabrication.map((item, idx) => (
                        <Link
                          key={idx}
                          to={item.link}
                          onClick={() => setMobileMenu(false)}
                          className="block p-4 pl-6 text-[11px] font-medium text-white/80 hover:text-white border-b border-white/5 last:border-0"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <MobileNavLink to="/all-machines" label="i-NAX Catalog" onClick={() => setMobileMenu(false)} />
                <MobileNavLink to="/about" label="About Us" onClick={() => setMobileMenu(false)} />

                <Link
                  to="/contact"
                  onClick={() => setMobileMenu(false)}
                  className="flex items-center justify-center gap-3 font-semibold p-4 mt-6 uppercase text-[12px] bg-white text-[#b91c1c] rounded-full shadow-xl"
                >
                  Contact Us <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      <div className="h-20"></div>
    </>
  )
}

const NavLink = ({ to, label }) => (
  <Link
    to={to}
    className="
      relative text-[#111827]
       hover:text-[#dc2626] font-semibold uppercase text-[12px]
      tracking-[0.12em] py-2
      after:absolute after:left-0 after:bottom-0
      after:h-[2px] after:w-0 after:bg-white
      after:transition-all after:duration-300
      hover:after:w-full
    "
  >
    {label}
  </Link>
)

const MobileNavLink = ({ to, label, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="flex items-center justify-between font-semibold p-4 uppercase text-[12px] text-white hover:bg-white/10 rounded-lg"
  >
    {label} <ChevronRight size={16} className="text-white/60" />
  </Link>
)

export default Navbar
