import Navbar from './components/common/Navbar'
import { ThemeProvider } from './components/common/Theme'
import HeroSection from './components/features/HeroSection'
import ProjectSection from './components/features/ProjectSection'
import Footer from './components/common/Footer'
import Quote from './components/layout/Quote'
// import ViewCount from './components/layout/ViewCount'
import CopyRight from './components/layout/CopyRight'
// import GithubActivity from './components/layout/GitHubActivityBar'
import AboutMe from './components/layout/AboutMe'
import { Route, Routes } from 'react-router-dom'
import ProjectPage from './components/layout/ProjectPage'

const App = () => {
  return (
    <>
      <ThemeProvider defaultTheme="dark">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <ProjectSection />
                {/* <GithubActivity/> */}
                <AboutMe />
                <Quote />
                {/* <ViewCount/> */}
              </>
            }
          />
          <Route path="/project" element={<ProjectPage />} />
        </Routes>
        <CopyRight />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App