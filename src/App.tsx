import Navbar from './components/Navbar'
import { ThemeProvider } from './components/Theme'
import HeroSection from './components/HeroSection'
import ProjectSection from './components/ProjectSection'
import Footer from './components/Footer'
import Quote from './layout/Quote'
// import ViewCount from './layout/ViewCount'
import CopyRight from './layout/CopyRight'

const App = () => {
  return (
    <div>
      <ThemeProvider defaultTheme="dark">
        <Navbar />
        <HeroSection />
        <ProjectSection />
        <Quote/>
        {/* <ViewCount/> */}
        <CopyRight/>
        <Footer />
      </ThemeProvider>
    </div>
  )
}

export default App