import { useState } from 'react'
import { motion } from 'motion/react'
import { ChevronRight, ArrowUpRight } from 'lucide-react'

export default function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const navItems = [
    { name: 'Ecosystem', hasDropdown: false },
    { name: 'Economics', hasDropdown: true },
    { name: 'Developers', hasDropdown: false },
    { name: 'Governance', hasDropdown: true },
  ]

  return (
    <nav className="flex items-center justify-between py-6 px-6 md:px-10 w-full relative z-10">
      {/* Left Side (hidden spacer for centering) */}
      <div className="flex-1 hidden md:block" />

      {/* Center Menu */}
      <ul 
        className="hidden md:flex items-center gap-4 text-[rgb(45,45,45)] dark:text-[rgb(220,225,235)] font-normal text-sm"
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {navItems.map((item, index) => (
          <li
            key={item.name}
            onMouseEnter={() => setHoveredIndex(index)}
            className="relative cursor-pointer px-4 py-2 flex items-center gap-1 group transition-colors duration-200"
          >
            {hoveredIndex === index && (
              <motion.div
                layoutId="navbar-hover-pill"
                className="absolute inset-0 bg-white/50 dark:bg-white/10 backdrop-blur-md rounded-full -z-10 border border-white/20 dark:border-white/5 shadow-[0_4px_12px_rgba(0,0,0,0.03)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 350,
                  damping: 30,
                }}
              />
            )}
            <span className="flex items-center gap-1 relative z-10 text-[rgb(45,45,45)] dark:text-[rgb(220,225,235)]">
              {item.name}
              {item.hasDropdown && (
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              )}
            </span>
          </li>
        ))}
      </ul>

      {/* Mobile Logo */}
      <div className="md:hidden">
        <span className="font-regular tracking-tighter text-xl text-[rgba(30,50,90,0.9)] dark:text-white/95">
          RIVR
        </span>
      </div>

      {/* Right Button */}
      <div className="flex-1 flex justify-end items-center">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center bg-[rgba(30,50,90,0.8)] dark:bg-white/15 text-white rounded-full pl-2 pr-4 md:pr-6 py-1.5 md:py-2 gap-2 md:gap-3 hover:bg-[rgba(30,50,90,1)] dark:hover:bg-white/20 border border-transparent dark:border-white/10 transition-colors group cursor-pointer"
        >
          <div className="bg-white/20 p-1 md:p-1.5 rounded-full flex items-center justify-center">
            <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </div>
          <span className="text-xs md:text-sm font-normal">Book Demo</span>
        </motion.button>
      </div>
    </nav>
  )
}
