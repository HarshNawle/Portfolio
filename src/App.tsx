import Navbar from './components/Navbar'
import { ThemeProvider } from './components/Theme'
import HeroSection from './components/HeroSection'
import ProjectSection from './components/ProjectSection'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <ThemeProvider defaultTheme="dark">
        <Navbar />
        <HeroSection />
        <ProjectSection />
        <Footer />
      </ThemeProvider>
    </div>
  )
}

export default App