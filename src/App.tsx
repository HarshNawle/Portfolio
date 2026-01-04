import React from 'react'
import Navbar from './components/Navbar'
import { ThemeProvider } from './components/Theme'

type Props = {}

const App = (props: Props) => {
  return (
    <div className=''>
      <ThemeProvider defaultTheme="dark">

        <Navbar />
      </ThemeProvider>
    </div>
  )
}

export default App