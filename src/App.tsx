import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'
import { AnimatedThemeToggler } from './components/AnimatedThemeToggler'

function App() {
  return (
    <main className="min-h-screen bg-[#f0f0f0] dark:bg-[#0a0c10] transition-colors duration-300 relative">
      <Hero />
      <Features />
      <Footer />

      {/* Floating Theme Toggler */}
      <div className="fixed top-6 right-6 z-50">
        <AnimatedThemeToggler className="p-3 bg-white/80 dark:bg-[#13151b]/80 backdrop-blur-md shadow-xl border-2 border-[rgba(30,50,90,0.15)] dark:border-white/10 rounded-full hover:scale-105 transition-all w-12 h-12 flex items-center justify-center cursor-pointer" />
      </div>
    </main>
  )
}

export default App
