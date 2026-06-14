import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'

export default function BottomLeftCard() {
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="absolute bottom-28 right-4 left-auto md:left-6 md:right-auto md:bottom-6 lg:bottom-10 lg:left-10 p-3 md:p-4 lg:p-5 rounded-[1.2rem] md:rounded-[1.5rem] lg:rounded-[2.2rem] bg-white/30 dark:bg-black/35 backdrop-blur-xl border border-white/20 dark:border-white/5 flex flex-col gap-2 lg:gap-3 min-w-[140px] md:min-w-[150px] lg:min-w-[180px] w-fit transition-colors duration-300"
    >
      {/* Top text block */}
      <div className="flex flex-col">
        <span className="text-2xl md:text-3xl font-normal text-[rgba(30,50,90,0.9)] dark:text-white/95 tracking-tight transition-colors duration-300">
          5.2K
        </span>
        <span className="text-[10px] md:text-[12px] font-normal text-[rgba(30,50,90,0.6)] dark:text-white/50 uppercase tracking-wider transition-colors duration-300">
          Active Yielders
        </span>
      </div>

      {/* Join Discord button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center bg-white dark:bg-white/10 rounded-full pl-1.5 pr-5 py-1.5 gap-2 hover:bg-white/90 dark:hover:bg-white/15 transition-colors self-start group cursor-pointer"
      >
        <div className="bg-[rgba(30,50,90,0.1)] dark:bg-white/15 p-1 rounded-full flex items-center justify-center transition-colors">
          <ArrowUpRight className="w-4 h-4 text-[rgba(30,50,90,0.9)] dark:text-white" />
        </div>
        <span className="text-[14px] font-normal text-[rgba(30,50,90,0.9)] dark:text-white/90 transition-colors">
          Join Discord
        </span>
      </motion.button>
    </motion.div>
  )
}
