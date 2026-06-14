import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <main className="min-h-screen bg-[#f0f0f0] dark:bg-[#0a0c10] transition-colors duration-300">
      <Hero />
      <Features />
      <Footer />
    </main>
  )
}

export default App
