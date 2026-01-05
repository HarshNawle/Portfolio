import Navbar from './components/Navbar'
import { ThemeProvider } from './components/Theme'
import HeroSection from './components/HeroSection'

const App = () => {
  return (
    <div className=''>
      <ThemeProvider defaultTheme="dark">
        <Navbar />
        <HeroSection/>
      </ThemeProvider>
    </div>
  )
}

export default App