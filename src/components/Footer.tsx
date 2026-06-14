import { useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import Hls from 'hls.js'

export default function Footer() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const src = 'https://customer-cbeadsgr09pnsezs.cloudflarestream.com/12a9780eeb1ea015801a5f55cf2e9d3d/manifest/video.m3u8'

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Native HLS support (Safari, iOS Safari)
      video.src = src
    } else if (Hls.isSupported()) {
      // Chrome, Firefox, Edge, etc.
      const hls = new Hls()
      hls.loadSource(src)
      hls.attachMedia(video)
      return () => {
        hls.destroy()
      }
    }
  }, [])

  const footerLinks = [
    {
      title: 'Protocol',
      links: ['Ecosystem', 'Tokenomics', 'Governance', 'Security'],
    },
    {
      title: 'Developers',
      links: ['Documentation', 'Github', 'Bug Bounty', 'Audits'],
    },
    {
      title: 'Community',
      links: ['Discord', 'Twitter', 'Blog', 'Forum'],
    },
  ]

  return (
    <div className="w-full bg-[#f0f0f0] dark:bg-[#0a0c10] pb-16 px-6 md:px-12 flex flex-col items-center select-none font-sans transition-colors duration-300">
      <div className="w-full max-w-[1536px] flex flex-col gap-16 md:gap-24">
        
        {/* HLS Video CTA Banner */}
        <section className="relative w-full min-h-[320px] md:min-h-[380px] rounded-[1.8rem] md:rounded-[3rem] overflow-hidden flex items-center bg-black/10 dark:bg-black/25 group shadow-[0_4px_30px_rgba(0,0,0,0.03)] transition-colors duration-300">
          {/* Video Background */}
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0 filter brightness-[0.9] dark:brightness-[0.75] contrast-[1.05] transition-[filter] duration-300"
          />
          
          {/* Dark/Blur overlay for readability */}
          <div className="absolute inset-0 bg-black/15 dark:bg-black/20 z-0" />

          {/* Banner Contents */}
          <div className="relative z-10 w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 p-8 md:p-16">
            {/* Title & Subtitle */}
            <div className="flex flex-col gap-4 max-w-2xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-normal text-white mb-2 tracking-tight leading-[1.1]">
                Melt rigid assets <br className="hidden md:block" /> into fluid yield.
              </h2>
              <p className="text-sm sm:text-base text-white/80 max-w-md font-light leading-relaxed">
                Join the decentralized ecosystem transforming capital efficiency across chains.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-row items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center bg-white dark:bg-white/10 text-[rgba(30,50,90,0.9)] dark:text-white rounded-full pl-3 pr-6 py-3 gap-2.5 hover:bg-white/95 dark:hover:bg-white/15 transition-colors font-semibold text-sm cursor-pointer shadow-lg shadow-black/10 dark:shadow-none group border border-transparent dark:border-white/10"
              >
                <div className="bg-[rgba(30,50,90,0.08)] dark:bg-white/15 p-1 rounded-full flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-[rgba(30,50,90,0.9)] dark:text-white" />
                </div>
                <span>Launch App</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center bg-white/10 dark:bg-white/5 backdrop-blur-md text-white border border-white/20 dark:border-white/10 rounded-full px-6 py-3.5 hover:bg-white/20 dark:hover:bg-white/10 transition-all font-semibold text-sm cursor-pointer"
              >
                <span>Read Docs</span>
              </motion.button>
            </div>
          </div>
        </section>

        {/* Footer Link directory */}
        <footer className="w-full flex flex-col md:flex-row md:justify-between gap-12 border-t border-[rgba(30,50,90,0.08)] dark:border-white/10 pt-12 pb-4 transition-colors duration-300">
          {/* Logo & Description */}
          <div className="flex flex-col max-w-sm">
            <span className="text-2xl font-bold text-[rgba(30,50,90,0.95)] dark:text-white/95 transition-colors duration-300">
              RIVR
            </span>
            <p className="text-xs md:text-sm text-[rgba(30,50,90,0.6)] dark:text-white/60 mt-4 leading-relaxed font-normal transition-colors duration-300">
              Streamlining wealth through liquid asset streams, cross-chain yield, and multi-state protocols.
            </p>
          </div>

          {/* Directory Columns */}
          <div className="grid grid-cols-3 gap-8 md:gap-16">
            {footerLinks.map((col, colIdx) => (
              <div key={colIdx} className="flex flex-col">
                <span className="text-[10px] md:text-[11px] font-bold text-[rgba(30,50,90,0.4)] dark:text-white/35 uppercase tracking-widest mb-4 transition-colors duration-300">
                  {col.title}
                </span>
                <ul className="flex flex-col gap-2.5 text-xs font-semibold text-[rgba(30,50,90,0.75)] dark:text-white/70">
                  {col.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="hover:text-[rgba(30,50,90,0.95)] dark:hover:text-white transition-colors cursor-pointer"
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </footer>

      </div>
    </div>
  )
}
