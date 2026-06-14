import { motion } from 'motion/react'
import { ArrowUpRight, ArrowRight, Lock } from 'lucide-react'

export default function Features() {
  const stats = [
    { value: '$2.4B', label: 'TOTAL VALUE LOCKED' },
    { value: '8.5%', label: 'AVERAGE REALIZED YIELD' },
    { value: '140K+', label: 'ACTIVE PARTICIPANTS' },
    { value: '< 2s', label: 'FINALITY ENGINE' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <div className="w-full bg-[#f0f0f0] dark:bg-[#0a0c10] py-20 md:py-28 px-6 md:px-12 flex flex-col items-center select-none transition-colors duration-300">
      <div className="w-full max-w-[1536px] flex flex-col gap-16 md:gap-24">
        
        {/* Stats Panel */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 w-full border-b border-[rgba(30,50,90,0.08)] dark:border-white/10 pb-12 transition-colors duration-300"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="flex flex-col"
            >
              <span className="text-3xl md:text-5xl lg:text-6xl font-semibold text-[rgba(30,50,90,0.95)] dark:text-white/95 tracking-tight transition-colors duration-300">
                {stat.value}
              </span>
              <span className="text-xs font-bold text-[rgba(30,50,90,0.75)] dark:text-white/50 uppercase tracking-wider mt-2.5 transition-colors duration-300">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 w-full">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl md:text-4xl font-normal text-[rgba(30,50,90,0.95)] dark:text-white/95 tracking-tight leading-tight transition-colors duration-300">
              Architected for high-performance DeFi
            </h2>
            <p className="text-sm md:text-base text-[rgba(30,50,90,0.6)] dark:text-white/60 font-normal transition-colors duration-300">
              Fluid Liquidity Solutions. Access the future of staking.
            </p>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center bg-[rgba(30,50,90,0.05)] dark:bg-white/10 text-[rgba(30,50,90,0.9)] dark:text-white/90 border border-[rgba(30,50,90,0.1)] dark:border-white/10 hover:bg-[rgba(30,50,90,0.1)] dark:hover:bg-white/15 transition-colors rounded-full px-5 py-2.5 gap-2 text-sm font-normal cursor-pointer group w-fit"
          >
            <span>Start Staking</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </motion.button>
        </div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
        >
          {/* Card 1: Liquid Staking */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -6, boxShadow: '0 12px 30px rgba(30,50,90,0.04)' }}
            className="md:row-span-2 bg-white dark:bg-[#13151b] backdrop-blur-md border-2 border-[rgba(30,50,90,0.18)] dark:border-white/10 hover:border-[rgba(30,50,90,0.35)] dark:hover:border-white/25 p-6 md:p-8 rounded-[1.8rem] flex flex-col justify-between min-h-[460px] lg:min-h-[580px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 group relative overflow-hidden"
          >
            <div className="flex justify-between items-center text-[11px] font-normal text-[rgba(30,50,90,0.5)] dark:text-white/45 uppercase tracking-wider transition-colors duration-300">
              <span>01/</span>
              <span>Liquid Staking</span>
            </div>
            <div className="flex flex-col gap-4 mt-auto">
              <h3 className="text-2xl md:text-3xl font-normal text-[rgba(30,50,90,0.95)] dark:text-white/95 tracking-tight leading-tight transition-colors duration-300">
                Unlock the liquidity of your staked assets
              </h3>
              <p className="text-sm text-[rgba(30,50,90,0.65)] dark:text-white/65 leading-relaxed transition-colors duration-300">
                Trade, borrow, or yield farm without unstaking periods. Experience zero friction with immediate access to your capital.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Real-time Yields */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -6, boxShadow: '0 12px 30px rgba(30,50,90,0.04)' }}
            className="md:col-span-2 bg-white dark:bg-[#13151b] backdrop-blur-md border-2 border-[rgba(30,50,90,0.18)] dark:border-white/10 hover:border-[rgba(30,50,90,0.35)] dark:hover:border-white/25 p-6 md:p-8 rounded-[1.8rem] flex flex-col justify-between min-h-[220px] md:min-h-[270px] lg:min-h-[280px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 group relative overflow-hidden"
          >
            <div className="flex justify-between items-start w-full">
              <h3 className="text-2xl font-normal text-[rgba(30,50,90,0.95)] dark:text-white/95 tracking-tight transition-colors duration-300">
                Real-time Yields
              </h3>
              <span className="text-[11px] font-normal text-[rgba(30,50,90,0.5)] dark:text-white/45 uppercase tracking-wider transition-colors duration-300">
                02/
              </span>
            </div>
            <p className="text-sm text-[rgba(30,50,90,0.65)] dark:text-white/65 leading-relaxed max-w-xl mt-6 md:mt-12 transition-colors duration-300">
              Track your compounding rewards minute by minute with our high-fidelity indexers. Keep your finger on the pulse of your portfolio's performance.
            </p>
          </motion.div>

          {/* Card 3: Bank-Grade */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -6, boxShadow: '0 12px 30px rgba(30,50,90,0.04)' }}
            className="bg-white dark:bg-[#13151b] backdrop-blur-md border-2 border-[rgba(30,50,90,0.18)] dark:border-white/10 hover:border-[rgba(30,50,90,0.35)] dark:hover:border-white/25 p-6 md:p-8 rounded-[1.8rem] flex flex-col justify-between min-h-[220px] md:min-h-[270px] lg:min-h-[280px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 group relative overflow-hidden"
          >
            <div className="flex justify-between items-center text-[11px] font-normal text-[rgba(30,50,90,0.5)] dark:text-white/45 uppercase tracking-wider transition-colors duration-300">
              <span>Bank-Grade</span>
              <span>03/</span>
            </div>
            <p className="text-sm text-[rgba(30,50,90,0.8)] dark:text-white/80 leading-relaxed font-normal mt-6 transition-colors duration-300">
              Smart contracts audited by leading firms, protected by multisig.
            </p>
            <div className="flex justify-between items-center mt-auto pt-6">
              <div className="flex items-center gap-1 text-[rgba(30,50,90,0.9)] dark:text-white/90 hover:opacity-85 transition-opacity text-xs font-semibold cursor-pointer">
                <span>View Audits</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
              <Lock className="w-4 h-4 text-[rgba(30,50,90,0.4)] dark:text-white/40 transition-colors duration-300" />
            </div>
          </motion.div>

          {/* Card 4: Cross-Chain */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -6, boxShadow: '0 12px 30px rgba(30,50,90,0.04)' }}
            className="bg-white dark:bg-[#13151b] backdrop-blur-md border-2 border-[rgba(30,50,90,0.18)] dark:border-white/10 hover:border-[rgba(30,50,90,0.35)] dark:hover:border-white/25 p-6 md:p-8 rounded-[1.8rem] flex flex-col justify-between min-h-[220px] md:min-h-[270px] lg:min-h-[280px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 group relative overflow-hidden"
          >
            <div className="flex justify-between items-center text-[11px] font-normal text-[rgba(30,50,90,0.5)] dark:text-white/45 uppercase tracking-wider transition-colors duration-300">
              <span>Cross-Chain</span>
              <span>04/</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-[rgba(30,50,90,0.05)] dark:bg-white/10 border border-[rgba(30,50,90,0.1)] dark:border-white/10 flex items-center justify-center hover:bg-[rgba(30,50,90,0.1)] dark:hover:bg-white/15 transition-all duration-200 self-center my-4 cursor-pointer group-hover:scale-105 transition-transform">
              <ArrowUpRight className="w-4 h-4 text-[rgba(30,50,90,0.8)] dark:text-white/80 transition-colors duration-300" />
            </div>
            <p className="text-sm text-[rgba(30,50,90,0.65)] dark:text-white/65 leading-relaxed mt-auto transition-colors duration-300">
              Move your liquid position across Layer 2 solutions seamlessly. Capital flows where opportunity arises.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </div>
  )
}
