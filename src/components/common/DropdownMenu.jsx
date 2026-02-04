import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const DropdownMenu = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)
  let timeoutId = null

  // Hover logic
  const handleMouseEnter = () => {
    clearTimeout(timeoutId)
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => setIsOpen(false), 200)
  }

  // बाहेरील क्लिकवर बंद करणे
  useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div
      className='relative'
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* मुख्य नेव्हिगेशन बटण */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`hover:text-red-700 font-bold py-4 flex items-center gap-1.5 uppercase text-[11px] tracking-[1px] transition-all duration-300 outline-none ${
          isOpen ? 'text-red-700' : 'text-gray-700'
        }`}
      >
        {title}
        <span
          className={`text-[8px] transition-transform duration-500 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        >
          ▼
        </span>
      </button>

      {/* मेगा ड्रॉपडाऊन - ३ कॉलम्स */}
      {isOpen && (
        <div className='absolute left-[-150px] top-[100%] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 w-[950px] z-[100] rounded-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300'>
          <div className='flex'>
            {/* बाजूची रेड डिझाइन स्ट्रिप */}
            <div className='w-1.5 bg-red-700'></div>

            <div className='flex-1'>
              {/* ड्रॉपडाऊन हेडर */}
              <div className='flex justify-between items-center px-8 py-3.5 bg-gray-50/50 border-b border-gray-100'>
                <div className='flex items-center gap-2'>
                  <span className='text-[11px] font-black text-gray-900 uppercase tracking-widest'>
                    {title} Solutions
                  </span>
                  <span className='bg-red-100 text-red-700 text-[9px] px-2 py-0.5 rounded-full font-bold'>
                    INDUSTRIAL
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className='w-6 h-6 flex items-center justify-center text-gray-400 hover:text-red-700 hover:bg-red-50 rounded-full transition-all'
                >
                  ✕
                </button>
              </div>

              {/* ३ कॉलम्स ग्रिड - Height Control (gap-y आणि py) */}
              <ul className='p-6 grid grid-cols-3 gap-x-6 gap-y-3'>
                {items.map((item, idx) => (
                  <li key={idx}>
                    
                    <Link
                      to={item.link}
                      onClick={() => setIsOpen(false)}
                      className='group flex items-start px-4 py-3.5 text-gray-600 hover:text-red-700 text-[13px] font-semibold transition-all duration-200 rounded-lg hover:bg-red-50/50 border border-transparent hover:border-red-100/50'
                    >
                      {/* Red Dot */}
                      <span className='w-1.5 h-1.5 bg-red-700 rounded-full mt-2 mr-3 flex-shrink-0'></span>

                      {/* Text */}
                      <span className='whitespace-nowrap'>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* तळाची छोटी पट्टी (Footer) */}
              <div className='bg-gray-50 px-8 py-2.5 text-right border-t border-gray-100'>
                <p className='text-[10px] text-gray-400 font-medium tracking-wide'>
                  © I-NAX PRECISION TECHNOLOGY
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default DropdownMenu
